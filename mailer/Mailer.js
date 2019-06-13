class Mailer {
    constructor(transporter) {
        this.transporter = transporter;
    }

    async send(mail) {
        await this.transporter.sendMail({
            from    : mail.from(),
            to      : mail.to(),
            subject : mail.subject(),
            html    : await mail.content()
        })
    }
}

module.exports = Mailer;
