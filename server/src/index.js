import app from './server.js'
import CONFIG from './config/config.js'
import { connectDB } from './db/index.js'
import * as dotenv from 'dotenv' 
dotenv.config();



connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");

});

app.listen(CONFIG.development.app.PORT, () => {
  CONFIG.development.logger.info(
    `Server running at http://localhost:${CONFIG.development.app.PORT}`,
  )
  });