
exports.seed = function(knex, Promise) {
  return knex('company_table').del()
    .then(function () {
      return knex('company_table').insert([
        {
          company_name: 'test company_name',
          company_email: "test company_email",
          company_phone: "5555555555",
          brand_id: "test_brand_id",
          company_goals: "test company_goals",
          company_content_creator: "test company_content_creator",
          company_username: "test company_username",
          company_password: "test company_password"
        }
      ]);
    });
};
