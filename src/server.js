import * as grpc from 'grpc';

import { PORT } from './config';
import * as greeterHandler from './handlers/greeter';

(() => {
  // create a new gRPC server
  const server = new grpc.Server();

  // register all the handler here...
  server.addService(greeterHandler.service, greeterHandler.handler);

  // define the host/port for server
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err != null) {
      console.error(err);
      return;
    }

    console.log(`gRPC listening on ${port}`);
  });

  // start the gRPC server
  server.start();
})();
