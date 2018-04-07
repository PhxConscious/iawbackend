
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_chats_join').del()
    .then(function () {
      // Inserts seed entries

      return knex('user_chats_join').insert([
        {user_id:"sYW2qp9RKkPgSPPjmaEWo4SlgCn1", chat_id:"testChatId"}
      ]);
    });
};
