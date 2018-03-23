
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

    // consider eliminating this section?  just use production?
    staging: {
        client: 'postgresql',
        connection: {
            database: 'de4fse0jv85blu',
            host: 'postgres://gnqsaqtswopemg:716876673327f8d575cf12aebda0b47864a475c432fbceecfc31103da4910190@ec2-107-20-233-240.compute-1.amazonaws.com:5432/de4fse0jv85blu',
            user:     'gnqsaqtswopemg',
            password: '716876673327f8d575cf12aebda0b47864a475c432fbceecfc31103da4910190'
        },
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
