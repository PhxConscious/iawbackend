
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedback').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedback').insert([
        {firebase_id: 'asdfasdfasdfas', comment: "great job"},
      ]);
    });
};
