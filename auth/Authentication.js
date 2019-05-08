const user = require('../user/User');

class Authenticator {
    constructor(userProvider, hasher, session) {
        this.userProvider = userProvider;
        this.hasher       = hasher;
        this.session      = session;
    }

    async attempt(username, password) {
        let attemptingUser = await this.userProvider.findByUsername(username);

        if (!attemptingUser) {
            throw new Error('Wrong User Name');
        }

        if (!await this.hasher.check(password, attemptingUser.getPassword())) {
            throw new Error('wrong Password');
        }

        return attemptingUser;
    }

    login(user) {
        this.session.loggedInUserId = user.getId();
    }

    logout() {
        this.session.loggedInUserId = null;
    }

    check() {
        return !!this.session.loggedInUserId;
    }

    guest() {
        return ! this.check();
    }

    async user() {
        if (!this.session.loggedInUserId) {
            throw new Error('User has not logged in yet');
        }
        return await this.userProvider.getById(this.session.loggedInUserId);
    }
}

module.exports = Authenticator;