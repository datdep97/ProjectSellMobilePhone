class Customer {
    constructor(id, gender, name, email, address, phone, note) {
        this.id         = id;
        this.gender     = gender;
        this.name       = name;
        this.email      = email;
        this.address    = address;
        this.phone      = phone;
        this.note       = note;
    }

    getId() {
        return this.id;
    }

    getGender() {
        return this.gender;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getAddress() {
        return this.address;
    }

    getPhone() {
        return this.phone;
    }

    getNote() {
        return this.note;
    }
}

module.exports = Customer;
