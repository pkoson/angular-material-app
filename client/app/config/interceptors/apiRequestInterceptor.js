export default function apiRequestInterceptor () {
  "ngInject";
  const BASE_API_PATH = 'http://lvh.me:3000/api/v1';
  
  return {
    request(config) {
      config.url = BASE_API_PATH + config.url;
      
      return config;
    }
  };
}