const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let rawUsers = await this.knex.select('*').from('Admin');
        return rawUsers.map(rawUser => this.factoryUser(rawUser));
    }

    async findByUsername(username) {
        let [rawUser] = await this.knex.select('*').from('Admin').where('username', username);
        return !!rawUser ? this.factoryUser(rawUser) : null;
    }

    async getById(id) {
        let rawUser = await this.knex.select('*').from('Admin').where('id', id);

        if(rawUser.length) {
            return this.factoryUser(rawUser[0]);
        } 

        return null;
    }

    factoryUser(rawUserData) {
        return new User(rawUserData.id, rawUserData.username, rawUserData.password);
    }
}

module.exports = UserRepository;