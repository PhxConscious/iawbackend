
module.exports = {

    development: {
        client: 'pg',
        connection: {
            database:  'iaw',
            host:  '127.0.0.1',
            user: '',
            password:  '',
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'df41vd5sndvmes' ,
            host: 'ec2-54-243-63-13.compute-1.amazonaws.com',
            user: 'fnpdqbdkrptkdx',
            password: '4ef3c75ab2537ea02d46f0db4dbcd9b887745e1a57e879c21d9af65d1c455344',
        },
    }

};
