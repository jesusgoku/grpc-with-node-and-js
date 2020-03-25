import * as grpc from 'grpc';

import * as greeterHandler from './handlers/greeter';

const PORT = process.env.PORT || 50051;

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
