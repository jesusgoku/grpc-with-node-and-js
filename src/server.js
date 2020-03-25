import * as grpc from 'grpc';

import { PORT } from './config';
import logger from './logger';
import * as greeterHandler from './handlers/greeter';

(() => {
  // create a new gRPC server
  const server = new grpc.Server();

  // register all the handler here...
  server.addService(greeterHandler.service, greeterHandler.handler);

  // define the host/port for server
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err != null) {
      logger.error(err);
      return;
    }

    logger.info(`gRPC listening on: 0.0.0.0:${port}`);
  });

  // start the gRPC server
  server.start();
})();
