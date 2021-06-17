import Routes from './user.js';

const useRoute = (app) => {
  app.use('/user', Routes);
};

export default useRoute;
