const ttypes = require('../../gen-nodejs/hello_types');

const handler = {
    foo(result) {
        console.log("Received Hello call");
        result(null, "Hello from Node.js");
    },
    echo(msg, result) {
        console.log('echo got msg:', msg);
        result(null, "--hahaha");
    },
    saveUser(user, result) {
        console.log('save user', user);
        result(null, true);
    },
    loadUser(uid, result) {
        console.log('load uid', uid);
        result(null, new ttypes.User({
            name: 'max',
            gender: 1,
            uid: 1
        }))
    },
    loadUsers(result) {
        result(null, [{
            name: 'A',
            profile: {
                card: 1
            },
            ha: '_'
        }]);
    },
    testSet(result) {
        result(null, {
            'a': 1,
            'c': 2
        });
    }
};

export default handler;
