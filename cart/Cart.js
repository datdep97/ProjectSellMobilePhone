class Cart {
    constructor(id, id_type, id_promotion, name, price, warranty, image, description) {
        this.id          = id;
        this.id_type     = id_type;
        this.id_promotion= id_promotion;
        this.name        = name;
        this.price       = price;
        this.warranty    = warranty;
        this.image       = image;
        this.description = description;
    }

    getId() {
        return this.id;
    }

    getIdType() {
        return this.id_type;
    }

    getIdPromotion() {
        return this.id_promotion;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getWarranty() {
        return this.warranty;
    }

    getImage() {
        return this.image;
    }

    getDescription() {
        return this.description;
    }
}

module.exports = Cart;
