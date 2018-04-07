const io = require('../bin/www').io;
let knex = require('../db/knex');

const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED,
		LOGOUT, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT,
		TYPING, PRIVATE_MESSAGE, NEW_CHAT_USER, EXPERT_CHAT  } = require('./Events')

const { createUser, createMessage, createChat } = require('./Factories')

let connectedUsers = { }

let communityChat = createChat({ isCommunity:true })
let expertChat;

module.exports = function(socket){

	// console.log('\x1bc'); //clears console
	console.log("Socket Id:" + socket.id);

	let sendMessageToChatFromUser;

	let sendTypingFromUser;

	//Verify Username
	socket.on(VERIFY_USER, (firebase_id, callback)=>{
		console.log("firebase_id", firebase_id)
		if(isUser(connectedUsers, firebase_id)){
			callback({ isUser:true, user:null })
		}else{
			knex("expert_user_join").fullOuterJoin("user_table", "expert_user_join.user_id", "user_table.firebase_id").select()
				.where("firebase_id", firebase_id)
				// TODO need error handling: if no user_expert_join than it's an empty array
				.then(userInfo => {
					callback({
					isUser: false,
					user: createUser({
						name:userInfo[0].first_name,
						socketId:socket.id,
						userId: userInfo[0].firebase_id
					})
				})
				knex("user_table")
					.join("user_chats_join", "user_table.firebase_id", "user_chats_join.user_id")
					.join("chats", "user_chats_join.chat_id", "chats.chat_id")
					.select()
					.then(chatInfo => {
						console.log('chatInfo', chatInfo)
						// , chatInfo[0].messages.messages, chatInfo[0].name, chatInfo[0].users)
						createChat({messages: chatInfo[0].messages.messages, name: chatInfo[0].name, users: chatInfo[0].users
						})
						expertChat = createChat({messages: chatInfo[0].messages.messages, name: chatInfo[0].name, users: chatInfo[0].users
						})
					})
			})
		}
	})

	//User Connects with username
	socket.on(USER_CONNECTED, (user)=>{
		console.log("USER_CONNECTED", "user", user)
		// theUserObj is = {
		// 	userId: 'firebase_id',
		// 	name: 'name',
		// 	socketId: "autoGen?"
		// }


		// knex.select().table(`user_table`)
    //     .where("firebase_id", user)
    //     .then(userInfo => {
    //         console.log("user",userInfo)
    //     })
		user.socketId = socket.id
		connectedUsers = addUser(connectedUsers, user)
		socket.user = user

		sendMessageToChatFromUser = sendMessageToChat(user.name)
		sendTypingFromUser = sendTypingToChat(user.name)

		io.emit(USER_CONNECTED, connectedUsers)
		// console.log('connectedUsers', connectedUsers);

	})

	//User disconnects
	socket.on('disconnect', ()=>{
		if("user" in socket){
			connectedUsers = removeUser(connectedUsers, socket.user.name)

			io.emit(USER_DISCONNECTED, connectedUsers)
			// console.log("Disconnect", connectedUsers);
		}
	})


	//User logsout
	socket.on(LOGOUT, ()=>{
		connectedUsers = removeUser(connectedUsers, socket.user.name)
		io.emit(USER_DISCONNECTED, connectedUsers)
		// console.log("Disconnect", connectedUsers);

	})

	//Get Community Chat
	// socket.on(COMMUNITY_CHAT, (callback)=>{
	// 	callback(communityChat)
	// })

	socket.on(EXPERT_CHAT, (callback)=>{
		callback(expertChat)
	})

	socket.on(MESSAGE_SENT, ({chatId, message})=>{
		sendMessageToChatFromUser(chatId, message)
	})

	socket.on(TYPING, ({chatId, isTyping})=>{
		// console.log("sendTypingFromUser", chatId, isTyping)
		sendTypingFromUser(chatId, isTyping)
	})

	socket.on(PRIVATE_MESSAGE, ({reciever, sender, activeChat})=>{
		if(reciever in connectedUsers){
			const recieverSocket = connectedUsers[reciever].socketId
			if(activeChat === null || activeChat.id === communityChat.id){
				const newChat = createChat({ name:`${reciever}&${sender}`, users:[reciever, sender] })
				socket.to(recieverSocket).emit(PRIVATE_MESSAGE, newChat)
				socket.emit(PRIVATE_MESSAGE, newChat)
			}else{
				if(!(reciever in activeChat.users)){
					activeChat.users
										.filter( user => user in connectedUsers)
										.map( user => connectedUsers[user] )
										.map( user => {
												socket.to(user.socketId).emit(NEW_CHAT_USER, { chatId: activeChat.id, newUser: reciever })
										} )
										socket.emit(NEW_CHAT_USER, { chatId: activeChat.id, newUser: reciever } )
				}
				socket.to(recieverSocket).emit(PRIVATE_MESSAGE, activeChat)
			}
		}
	})

}
/*
* Returns a function that will take a chat id and a boolean isTyping
* and then emit a broadcast to the chat id that the sender is typing
* @param sender {string} username of sender
* @return function(chatId, message)
*/
function sendTypingToChat(user){
	return (chatId, isTyping)=>{
		io.emit(`${TYPING}-${chatId}`, {user, isTyping})
	}
}

/*
* Returns a function that will take a chat id and message
* and then emit a broadcast to the chat id.
* @param sender {string} username of sender
* @return function(chatId, message)
*/
function sendMessageToChat(sender){
	return (chatId, message)=>{

		console.log("sendMessageToChat", sender, chatId, message)


		knex('chats')
			.select()
			.where("chat_id", chatId)
			.then(old => {
				console.log("old", old)
				// let tempMsgs = old[0].messages.messages;
				// let newMsgs = tempMsgs.concat(message)
				// knex('chats')
				// 	.select()
				// 	.where("chat_id", chatId)
				// 	.update({
				// 		messages: {messages:newMsgs},
				// 	})
				// 	.returning("*")
				// 	.then(updated => console.log('updated chat', updated))

			})





		io.emit(`${MESSAGE_RECIEVED}-${chatId}`, createMessage({message, sender}))

	}
}

/*
* Adds user to list passed in.
* @param userList {Object} Object with key value pairs of users
* @param user {User} the user to added to the list.
* @return userList {Object} Object with key value pairs of Users
*/
function addUser(userList, user){
	let newList = Object.assign({}, userList)
	newList[user.name] = user
	return newList
}

/*
* Removes user from the list passed in.
* @param userList {Object} Object with key value pairs of Users
* @param username {string} name of user to be removed
* @return userList {Object} Object with key value pairs of Users
*/
function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}

/*
* Checks if the user is in list passed in.
* @param userList {Object} Object with key value pairs of Users
* @param username {String}
* @return userList {Object} Object with key value pairs of Users
*/
function isUser(userList, username){
  	return username in userList
}
