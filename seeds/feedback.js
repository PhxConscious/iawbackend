
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedback').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedback').insert([
        {firebase_id: 'francoistheclient', comment: "I can't log in", parent_id: null, created_at: "2018-03-21T21:54:59.919Z"},
        {firebase_id: 'bobtheexpert', comment: "try entering your email", parent_id: 1, created_at: "2018-03-22T21:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "ok thats working TY", parent_id: 1, created_at: "2018-03-23T21:54:59.919Z"},
        {firebase_id: 'bobtheexpert', comment: "glad to help", parent_id: 1, created_at: "2018-03-26T21:54:59.919Z"},
        {firebase_id: 'joetheclient', comment: "Is this how to send a dm?", parent_id: null, created_at: "2018-03-28T01:54:59.919Z"},
        {firebase_id: 'kyletheadmin', comment: "nope. This is public", parent_id: 5, created_at: "2018-03-23T21:54:59.919Z"},
        {firebase_id: 'joetheclient', comment: "Really? how embarassing.", parent_id: 5, created_at: "2018-03-25T21:54:59.919Z"},
        {firebase_id: 'kyletheadmin', comment: "I know, right? and there's no deleting posts either.", parent_id: 5, created_at: "2018-03-28T16:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "3rd comment", parent_id: null, created_at: "2018-03-28T17:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "4th comment", parent_id: null, created_at: "2018-03-28T18:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "5th comment", parent_id: null, created_at: "2018-03-28T19:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "6th comment", parent_id: null, created_at: "2018-03-28T20:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "7th comment", parent_id: null, created_at: "2018-03-28T21:08:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "8th comment", parent_id: null, created_at: "2018-03-28T21:11:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "9th comment", parent_id: null, created_at: "2018-03-28T21:12:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "10th comment", parent_id: null, created_at: "2018-03-28T21:54:59.919Z"},
        {firebase_id: 'francoistheclient', comment: "11th comment", parent_id: null, created_at: "2018-03-28T21:54:01.919Z"},
        {firebase_id: 'francoistheclient', comment: "12th comment", parent_id: null, created_at: "2018-03-28T21:54:00.919Z"},

      ]);
    });
};
