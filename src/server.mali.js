import Mali from 'mali';

import logger from './logger';
import greeterHandlers from './handlers/greeter.mali';
import { PORT } from './config';
import { GreeterService } from './proto/greeter/greeter_grpc_pb';

const app = new Mali(GreeterService);

app.use(greeterHandlers);

app.start(`0.0.0.0:${PORT}`);
logger.info(`Listen on: 0.0.0.0:${PORT}`);
