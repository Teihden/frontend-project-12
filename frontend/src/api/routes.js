const SERVER_PATH = '/api/v1';

const routes = {
  loginPath: () => [SERVER_PATH, 'login'].join('/'),
  anyPage: () => '*',
  rootPage: () => '/',
  loginPage: () => '/login',
  signupPage: () => '/signup',
};

export default routes;
