const {expressjwt: jwt} = require("express-jwt");

authJWT = () => {
    const secret = process.env.secret;
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/orders(.*)/,methods: ['GET', 'OPTIONS', 'POST']},
            '/api/v1/users/login',
            '/api/v1/users/register'
        ]
    });
}

isRevoked = async (req, payload, done) => {
    if (!payload.isAdmin){
        done(null, true);
    }

    done();
}

module.exports = authJWT;