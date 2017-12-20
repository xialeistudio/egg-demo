import { Application } from 'egg';
import * as Sequelize from 'sequelize';

export interface AppAttributes {
  id: number;
  title: string;
  appid: string;
  secret: string;
}

export interface AppInstance extends Sequelize.Instance<AppAttributes>, AppAttributes {
}

export default (app: Application) => {
  return app.model.define<AppInstance, AppAttributes>('user', {
    id: { type: Sequelize.NUMERIC(5), autoIncrement: true, primaryKey: true },
    title: Sequelize.STRING(20),
    appid: Sequelize.CHAR(18),
    secret: Sequelize.CHAR(32),
  }, {
    timestamps: false,
    tableName: 'p_app',
  });
};
