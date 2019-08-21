const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = function(){

    mongoose.connect("mongodb+srv://root:root@vishal-v8jx2.mongodb.net/test?retryWrites=true&w=majority")
    .then(() => {
        logger.info("Connected ");
    })
}