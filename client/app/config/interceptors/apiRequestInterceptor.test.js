import apiRequestInterceptor from './apiRequestInterceptor';

describe('apiRequestInterceptor', () => {

  let mocks = {};
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


    mocks.$location = {
      host: jasmine.createSpy()
    };

    window.module($provide => {
      $provide.value('$location', mocks.$location);
    });
  });


  describe('localhost server', () => {

    beforeEach(() => {
      mocks.$location.host.and.returnValue('localhost');
      window.inject((_apiRequestInterceptor_) => {
        interceptor = _apiRequestInterceptor_;
      });
    });

    it('should add correct prefix to request', () => {
      let config = angular.copy(fakedData.config);
      let request = interceptor.request(config);

      expect(request.url).toEqual('http://lvh.me:3000/api/v1' + fakedData.config.url);
    });
  });

  describe('sportmatrix.dev.akra.net server', () => {

    beforeEach(() => {
      mocks.$location.host.and.returnValue('sportmatrix');
      window.inject((_apiRequestInterceptor_) => {
        interceptor = _apiRequestInterceptor_;
      });
    });

    it('should add correct prefix to request', () => {
      let config = angular.copy(fakedData.config);
      let request = interceptor.request(config);

      expect(request.url).toEqual('http://sportmatrix.dev.akra.net/api/v1' + fakedData.config.url);
    });
  });
});
