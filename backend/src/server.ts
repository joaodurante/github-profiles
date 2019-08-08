import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { routes } from './routes';
import { env  } from './common/env';
import errorHandler from './common/error.handler';

const server = express();

mongoose.connect(env.db.uri, env.db.options);

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errorHandler);

server.listen(env.server.port);