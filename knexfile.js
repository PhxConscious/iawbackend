
module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: process.env.IAW_DB || 'iaw',
            host: process.env.IAW_DB_HOST || '127.0.0.1',
            user: process.env.IAW_DB_USER || '',
            password: process.env.IAW_DB_PASSWORD || '',
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: process.env.IAW_DB,
            host: process.env.IAW_DB_HOST,
            user: process.env.IAW_DB_USER,
            password: process.env.IAW_DB_PASSWORD,
        },
    }

};
