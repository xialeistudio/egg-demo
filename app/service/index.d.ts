import App from './app';

declare module 'egg' {
  export interface IService {
    app: App;
  }
}
