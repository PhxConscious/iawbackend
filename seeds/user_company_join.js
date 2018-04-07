
exports.seed = function(knex, Promise) {
    return knex('user_company_join').del()
        .then(function () {
            return knex('user_company_join').insert([
                {
                    firebase_id: "sarahtheclient",
                    company_id: 'sarahco'
                },
                {
                    firebase_id: "joetheclient",
                    company_id: 'joeco'
                },
                {
                    firebase_id: "sYW2qp9RKkPgSPPjmaEWo4SlgCn1",
                    company_id: 'hiroshico'
                },
                {
                    firebase_id: "francoistheclient",
                    company_id: 'francoisco'
                }
            ]);
        });
};
