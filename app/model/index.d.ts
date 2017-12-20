import * as Sequelize from 'sequelize';
import { AppAttributes, AppInstance } from './app';

declare module 'egg' {

  export interface Application {
    model: Sequelize.Sequelize;
  }

  export interface Context {
    model: {
      App: Sequelize.Model<AppInstance, AppAttributes>,
    };
  }
}
