const TemplateEmail = require('./../mailer/TemplateEmail');

class PromotionEmail extends TemplateEmail{
    constructor(products, emailAddress) {
        super();
        this.products = products;
        this.emailAddress = emailAddress;
    }

    subject() {
        return 'Các sản phẩm bạn có thể quan tâm';
    }

    from() {
        return 'promotion@vanh@gmail.com'
    }

    to() {
        return this.emailAddress;
    }

    getTemplate() {
        return 'Client/promotion-email.html';
    }

    getMailData() {
        return {
            products: this.products
        }
    }
}

module.exports = PromotionEmail;
