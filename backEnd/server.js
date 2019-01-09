import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './core/logger/app-logger';
import config from './core/config/config.dev';
import connectToDb from './db/connect';
import router from './router';
import jwt from './_helpers/jwt';


const port = config.serverPort;
logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: logger.stream }));
app.use(jwt());
app.use('/api/v1', router);

// Index route
app.get('/', (req, res) => {
  res.send('REFER TO API ENDPOINTS');
});

app.listen(port, () => {
  logger.info('server started - ', port);
});
