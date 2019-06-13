require('dotenv').config();

module.exports = {
    database: require('./knexfile'),
    mail: {
        host: 'smtp.gmail.com',
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'champion.sphinx@gmail.com', // generated ethereal user
            pass: '1ccdd2cm' // generated ethereal password
        }
    }
};