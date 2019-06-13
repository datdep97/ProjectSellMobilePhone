const TemplateEmail = require('./../mailer/TemplateEmail');

class BillingEmail extends TemplateEmail {
    constructor(customer, items) {
        super();
        this.customer = customer;
        this.items    = items;
    }

    from() {
        return 'noreply.champion@gmail.com';
    }

    to() {
        return this.customer.getEmail();
    }

    subject() {
        return 'Your billing invoice';
    }

    getTemplate() {
        return 'Client/mail.html'
    }

    getMailData() {
        return {
            customer: this.customer,
            items: this.items
        }
    }
}

module.exports =  BillingEmail;
