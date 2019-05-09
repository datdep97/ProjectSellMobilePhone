const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async findByUsername(username) {
        let rawUser = await this.knex.select('*').from('Admin').where('username', username);

        if(rawUser.length) {
            return new User(rawUser[0].id, rawUser[0].username, rawUser[0].passworld);
        } 

        return null;
    }

    async getById(id) {
        let rawUser = await this.knex.select('*').from('Admin').where('id', id);

        if(rawUser.length) {
            return new User(rawUser[0].id, rawUser[0].username, rawUser[0].passworld);
        } 

        return null;
    }
}

module.exports = UserRepository;
