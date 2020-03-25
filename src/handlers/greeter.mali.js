import { HelloResponse } from '../proto/greeter/greeter_pb';

function sayHello(ctx, next) {
  const res = new HelloResponse();

  res.setMessage(`Hello, ${ctx.req.getName()}`);

  ctx.res = res;

  next();
}

export default {
  sayHello,
};
