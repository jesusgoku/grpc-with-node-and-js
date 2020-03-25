/* eslint-disable class-methods-use-this */
import { HelloResponse } from '../proto/greeter/greeter_pb';
import { GreeterService as service } from '../proto/greeter/greeter_grpc_pb';

class GreeterHandler {
  /**
   * Greet the user nicely
   * @param call
   * @param callback
   */
  sayHello(call, callback) {
    const reply = new HelloResponse();

    reply.setMessage(`Hello, ${call.request.getName()}`);

    callback(null, reply);
  }
}

const handler = new GreeterHandler();

export { service, handler };
