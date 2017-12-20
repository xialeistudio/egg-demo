import { Context } from 'egg';
import * as moment from 'moment';

export default (options: { format: string }) => {
  return async function time(ctx: Context, next: () => void) {
    ctx.set('time', moment().format(options.format));
    await next();
  };
};
