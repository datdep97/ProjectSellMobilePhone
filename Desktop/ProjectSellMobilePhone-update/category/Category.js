class Category { 
    constructor(id, name, description, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getStatus() {
        return this.status;
    }

}

module.exports = Category;
