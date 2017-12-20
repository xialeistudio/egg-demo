"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class AppService extends egg_1.Service {
    packageInfo() {
        const pkg = require('../../package.json');
        return { name: pkg.name, version: pkg.version };
    }
}
exports.default = AppService;
