class Bill {
    constructor(id, id_customer, date_order, total, payment_status, note) {
        this.id = id;
        this.id_customer = id_customer;
        this.date_order = date_order;
        this.total = total;
        this.payment_status = payment_status;
        this.note = note;
    }

    getId() {
        return this.id;
    }

    getIdCustomer() {
        return this.id_customer;
    }

    getDateOrder() {
        return this.date_order;
    }

    getTotal() {
        return this.total;
    }

    getNote() {
        return this.note;
    }
}

module.exports = Bill;
