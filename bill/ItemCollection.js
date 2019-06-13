class ItemCollection {
    constructor(items) {
        this.items = items;
    }

    totalPrice() {
        return this.items.reduce((price, item) => price + item.price, 0);
    }

    toArray() {
        return this.items;
    }

    first() {
        return this.items[0] || null;
    }

    toJson() {
        return {
            items: this.items,
            totalPrice: this.totalPrice()
        }
    }
}

module.exports = ItemCollection;
