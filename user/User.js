class User {
    constructor(id, username, password) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.username;
    }

    getId() {
        return this.id;
    }
}

module.exports = User;
