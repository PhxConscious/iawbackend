
module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: 'iaw',
            host: '127.0.0.1'
        }
    },

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
            database: 'd9h0ie6n92npam',
            host: 'postgres://jxjgvcatrgcmdp:10dba1d9748815412145c75b6d6be576548da8c54d81fed4644dc2b14ec33aea@ec2-174-129-225-9.compute-1.amazonaws.com:5432/d9h0ie6n92npam',
            user:     'jxjgvcatrgcmdp',
            password: '10dba1d9748815412145c75b6d6be576548da8c54d81fed4644dc2b14ec33aea'
        },
    }

};
