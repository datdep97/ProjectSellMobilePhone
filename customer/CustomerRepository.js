const Customer = require('./Customer');

class CustomerRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let customerList = await this.knex.select('*').from('Customer');
        return customerList.map(allCustomer => this.factoryCustomer(allCustomer));
    }

    async add(data) {
        let addInfoCustomer = await this.knex('Customer').insert(data);

        return this.factoryCustomer({
            ...data,
            id: addInfoCustomer[0].id
        });
    }

    factoryCustomer(allCustomerData) {
        return new Customer(allCustomerData.id, allCustomerData.gender, allCustomerData.name, allCustomerData.email, allCustomerData.address, allCustomerData.phone, allCustomerData.note);
    }
}

module.exports = CustomerRepository;
