import expressJwt from 'express-jwt';
import userModel from '../models/users.model';

function jwt() {
    const secret = 'secret'; // todo more random value here
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/api/v1/register',
            '/api/v1/authenticate'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userModel.findById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
}

export default jwt;
