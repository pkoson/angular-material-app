export default function apiRequestInterceptor () {
  const BASE_API_PATH = 'http://api.lvh.me:3000/v1';
  
  return {
    request(config) {
      config.url = BASE_API_PATH + config.url;
      
      return config;
    }
  };
}