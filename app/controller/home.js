"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        this.ctx.body = await this.ctx.model.App.findAll();
    }
}
exports.default = HomeController;
