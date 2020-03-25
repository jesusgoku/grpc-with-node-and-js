import * as grpc from 'grpc';

import logger from './logger';
import { PORT } from './config';
import { HelloRequest } from './proto/greeter/greeter_pb';
import { GreeterClient } from './proto/greeter/greeter_grpc_pb';

const client = new GreeterClient(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());

const req = new HelloRequest(['JesusGoku']);

req.setName('Angelito');

client.sayHello(req, (err, res) => {
  if (err) {
    logger.error({ err });
    return;
  }

  logger.debug(res.getMessage());
});
