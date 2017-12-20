import { Service } from 'egg';

export default class AppService extends Service {
  public packageInfo() {
    const pkg = require('../../package.json');
    return { name: pkg.name, version: pkg.version };
  }
}
