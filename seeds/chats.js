
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {
          chat_id: 1,
          name: "testChatName",
          messages: {"messages": ["msg1","msg2","msg3","msg4"]},
          users: {"users": ["bobtheexpert","kyletheadmin","sYW2qp9RKkPgSPPjmaEWo4SlgCn1","joetheclient"]}
      }
      ]);
    });
};
