class Promotion {
    constructor(id, name, content) {
        this.id         = id;
        this.name       = name;
        this.content    = content;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getContent() {
        return this.content;
    }
}

module.exports = Promotion;
