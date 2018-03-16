
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expert_user_join').del()
    .then(function () {
      // Inserts seed entries
      return knex('expert_user_join').insert([
        {user_id: "sarahtheclient", expert_id:"bobtheexpert"},
        {user_id: "francoistheclient", expert_id:"bobtheexpert"}
      ]);
    });
};
