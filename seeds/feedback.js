
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedback').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedback').insert([
        {firebase_id: 'francoistheclient', comment: "This forum is EMPTY", parent_id: null, created_at: "2018-03-21T21:54:59.919Z"},
        {firebase_id: 'bobtheexpert', comment: "Somebody has to be the first. You're the lucky one, Francois.", parent_id: 1, created_at: "2018-03-22T21:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "Lucky me, indeed! lol", parent_id: 1, created_at: "2018-03-23T21:54:59.919Z"},
        {firebase_id: 'bobtheexpert', comment: "Is there anything I can help you with?", parent_id: 1, created_at: "2018-03-24T21:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "I'm trying to get 1M followers... ", parent_id: 1, created_at: "2018-03-25T01:54:59.919Z"},
        {firebase_id: 'kyletheadmin', comment: "I can +1 you", parent_id: 1, created_at: "2018-03-25T21:54:59.919Z"},
        {firebase_id: 'joetheclient', comment: "Im about to kick this off!! Who's coming with me?", parent_id: null, created_at: "2018-03-22T17:54:59.919Z"},


      ]);
    });
};
