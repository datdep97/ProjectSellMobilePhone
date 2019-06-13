const nunjucks = require('nunjucks');
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/../views'));

class TemplateEmail {

    getTemplate() {
        throw new Error('Sub class must implemented');
    }

    getMailData() {
        throw new Error('Sub class must implemented');
    }

    async content() {
        return await env.render(this.getTemplate(), this.getMailData());
    }
}

module.exports = TemplateEmail;
