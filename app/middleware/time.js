"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
exports.default = (options) => {
    return async function time(ctx, next) {
        ctx.set('time', moment().format(options.format));
        await next();
    };
};
