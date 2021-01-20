//var winston = require('C:/Users/DELL/AppData/Roaming/npm/node_modules/winston');
var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
//winston.add(winston.transports.File, { filename: ${__dirname}/logs/appError.log });
winston.add(winston.transports.File, { filename: 'D:/ProtractorAngularJS/ProtractorDemo/winston-basic.log' });
module.exports = winston;
