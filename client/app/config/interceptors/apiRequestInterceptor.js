export default function apiRequestInterceptor ($location) {
  "ngInject";
  let BASE_API_PATH;

  switch($location.host()){
    case 'localhost':
      BASE_API_PATH = 'http://lvh.me:3000/api/v1';
    break;
    default:
      BASE_API_PATH = 'http://sportmatrix.dev.akra.net/api/v1';
  }

  return {
    request(config) {
      config.url = BASE_API_PATH + config.url;

      return config;
    }
  };
}
