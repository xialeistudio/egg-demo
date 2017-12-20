"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (appInfo) => {
    const config = exports = {};
    config.keys = appInfo.name + '_1513755864818_8007';
    config.middleware = [
        'time',
    ];
    config.time = {
        format: 'YYYY-MM-DD HH:mm:ss',
    };
    config.sequelize = {
        dialect: 'mysql',
        database: 'passport',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root',
        operatorsAliases: false,
        pool: {
            min: 0,
            max: 20,
        },
    };
    return config;
};
