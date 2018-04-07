const uuidv4 = require('uuid/v4')
let knex = require('../db/knex');

/*
*	createUser
*	Creates a user.
*	@prop id {string}
*	@prop name {string}
*	@param {object}
*		name {string}
*/
const createUser = ({name = "", socketId = null, userId = "" } = {})=>(
	{
		userId,
		name,
		socketId
	}
)

/*
*	createMessage
*	Creates a messages object.
* 	@prop id {string}
* 	@prop time {Date} the time in 24hr format i.e. 14:22
* 	@prop message {string} actual string message
* 	@prop sender {string} sender of the message
*	@param {object}
*		message {string}
*		sender {string}
*/
const createMessage = ({message = "", sender = ""} = { })=>(
		{
			id:uuidv4(),
			time:getTime(new Date(Date.now())),
			message,
			sender
		}

	)

/*
*	createChat
*	Creates a Chat object
* 	@prop id {string}
* 	@prop name {string}
* 	@prop messages {Array.Message}
* 	@prop users {Array.string}
*		@prop typingUsers {Array.string}
*		@prop isCommunity {boolean}
*	@param {object}
*		messages {Array.Message}
*		name {string}
*		users {Array.string}
*
*/
const createChat = ({messages = [], name = "Community", users = [], isCommunity = false} = {}) => {

	let theChatId = uuidv4()

	let mes = JSON.stringify(messages);
  let us = JSON.stringify(users);
  // console.log('resp', mes, us)
  knex('chats')
    .insert({
      chat_id: theChatId,
      name: "afactoryname",
      messages: mes,
      users: us
    })
    .returning("*")
    .then(data => {
      console.log("factory createChat", data)
    })



		return {
			id:theChatId,
			name: isCommunity ? name : createChatNameFromUsers(users),
			messages,
			users,
			typingUsers:[],
			isCommunity
		}

	}


/*
* createChatNameFromUsers
* @param users {Array.string}
* @param excludedUser {string} user to exclude from list of names
* @return {string} users names concatenated by a '&' or "Empty Chat" if no users
*/
const createChatNameFromUsers = (users, excludedUser = "") => {
	return users.filter(u => u !== excludedUser).join(' & ') || "Empty Chat"
}

/*
*	@param date {Date}
*	@return a string represented in 24hr time i.e. '11:30', '19:30'
*/
const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
	createMessage,
	createChat,
	createUser,
	createChatNameFromUsers
}
