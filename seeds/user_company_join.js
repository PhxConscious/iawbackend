
exports.seed = function(knex, Promise) {
    return knex('user_company_join').del()
        .then(function () {
            return knex('user_company_join').insert([
                {
                    firebase_id: "rkMC3u3Yhjc90rLDj2Sim418qoC2",
                    company_id: '1234567890'
                }
            ]);
        });
};
