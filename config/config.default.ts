import { EggAppConfig } from 'egg';

export default (appInfo: EggAppConfig) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513755864818_8007';

  // add your config here
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
