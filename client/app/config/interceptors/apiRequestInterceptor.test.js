import apiRequestInterceptor from './apiRequestInterceptor';

describe('apiRequestInterceptor', () => {

  let fakedData = {};
  let interceptor, $rootScope, $httpProvider;

  fakedData.config = {
    url: '/users'
  };

  beforeEach(() => {
    angular
      .module('mock.app.config', [])
        .service('apiRequestInterceptor', apiRequestInterceptor)
        .config(function($httpProvider) {
          $httpProvider.interceptors.push('apiRequestInterceptor');
        });
    
    angular.mock.module('mock.app.config', (_$httpProvider_) => {
      $httpProvider = _$httpProvider_;
    });
  
    window.inject((_apiRequestInterceptor_) => {
      interceptor = _apiRequestInterceptor_;
    }); 
  });



  it('should add correct prefix to request', () => {
    let config = angular.copy(fakedData.config);
    let request = interceptor.request(config);

    expect(request.url).toEqual('http://api.lvh.me:3000/v1' + fakedData.config.url);
  });

});