
import logger from 'loglevel'


// export const ENV = process.env.NODE_ENV || 'development';
console.log()
logger.enableAll();




const CONFIG = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      url: process.env.CLIENT_URL || 'http://localhost:3000',
    }, 
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
  },
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    }
  }
}


export default CONFIG;