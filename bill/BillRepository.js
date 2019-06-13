const Bill = require('./Bill');

class BillRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let billList = await this.knex.select('*').from('Bills');
        return billList.map(allBill => this.factoryBill(allBill));
    }

    async getIdBill() {
        let id = await this.knex.select('id').from('Bills').orderBy('id', 'desc');
        if(id.length) {
            return this.factoryCustomer(id[0]);
        }
    }

    async add(bill) {
        let addBill = await this.knex('Bills').insert(bill);
        return addBill;
    }

    factoryBill(allBillData) {
        return new Bill(allBillData.id, allBillData.id_customer, allBillData.date_order, allBillData.total, allBillData.payment_status, allBillData.note);
    }
}

module.exports = BillRepository;
