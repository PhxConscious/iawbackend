exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user_table').del()
        .then(function () {
            // Inserts seed entries
            return knex('user_table').insert([
                {
                    first_name: "Joe",
                    last_name: 'Seph',
                    user_email: 'testey@test.com',
                    user_phone: "555-555-5555",
                    firebase_id: "asdfasdfasdfas",
                    user_progress: {"aaaaa":{"unitLocked":false,"unitCompleted":false,"lessons":{"u01l01":{"lessonLocked":false,"lessonCompleted":false,"questions":{"u01l01q01":true,"u01l01q02":true,"u01l01q03":false,"u01l01q04":false,"u01l01q05":false,"u01l01q06":false,"u01l01q07":false}},"u01l02":{"lessonLocked":false,"lessonCompleted":false,"questions":{"u01l02q01":false,"u01l02q02":false,"u01l02q03":false,"u01l02q04":false,"u01l02q05":false,"u01l02q06":false}}}},"bbbbb":{"unitLocked":false,"unitCompleted":false,"lessons":{"u02l01":{"lessonLocked":false,"lessonCompleted":false,"questions":{"u02l01q01":false,"u02l01q02":false}}}}}
                },
            ]);
        });
};
