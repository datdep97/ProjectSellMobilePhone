class BillDetail {
    constructor(id, id_bill, id_product, quantity, unit) {
        this.id         = id;
        this.id_bill    = id_bill;
        this.id_product = id_product;
        this.quantity   = quantity;
        this.unit       = unit;
    }

    getId() {
        return this.id;
    }

    getIdBill() {
        return this.id_bill;
    }

    getIdProduct() {
        return this.id_product;
    }

    getQuantity() {
        return this.quantity;
    }

    getUnit() {
        return this.unit;
    }
}

module.exports = BillDetail;
