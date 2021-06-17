const env = process.env.REACT_APP_STAGE;

const development = {
  REACT_APP_DB_URL: process.env.REACT_APP_DB_DEV
};

const production = {
  REACT_APP_DB_URL: process.env.REACT_APP_DB_PROD
};

const config = env === 'production' ? production : development;

export default config;
