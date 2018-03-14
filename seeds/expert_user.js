
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expert_user_join').del()
    .then(function () {
      // Inserts seed entries
      return knex('expert_user_join').insert([
        {user_id: "asdfasdfasdfas", expert_id: 'KaO2uDZiice9B9Mk2xAKgJqLvMj2'},
      ]);
    });
};
