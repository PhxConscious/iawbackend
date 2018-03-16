
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedback').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedback').insert([
        {firebase_id: 'francoistheclient', comment: "great job"},
        {firebase_id: 'joetheclient', comment: "Keep up the good work."}
      ]);
    });
};
