
exports.seed = function(knex, Promise) {
    return knex('user_company_join').del()
        .then(function () {
            return knex('user_company_join').insert([
                {
                    firebase_id: "sarahtheclient",
                    company_id: '1234567890'
                }
            ]);
        });
};
