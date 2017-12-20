"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.default = (app) => {
    return app.model.define('user', {
        id: { type: Sequelize.NUMERIC(5), autoIncrement: true, primaryKey: true },
        title: Sequelize.STRING(20),
        appid: Sequelize.CHAR(18),
        secret: Sequelize.CHAR(32),
    }, {
        timestamps: false,
        tableName: 'p_app',
    });
};
