const BillDetail = require('./BillDetail');

class BillDetailRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let billDetailList = await this.knex.select('*').from('Bills_detail');
        return billDetailList.map(allBillDetail => this.factoryBillDetail(allBillDetail));
    }

    factoryBillDetail(allBillDetailData) {
        return new BillDetail(allBillDetailData.id, allBillDetailData.id_bill, allBillDetailData.id_product, allBillDetailData.quantity, allBillDetailData.unit);
    }
}

module.exports = BillDetailRepository;
