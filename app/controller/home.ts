import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    this.ctx.body = await this.ctx.model.App.findAll();
  }
}
