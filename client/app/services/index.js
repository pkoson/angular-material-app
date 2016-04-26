import angular from 'angular';

import authInterceptor from './authInterceptor';

export default angular.module('app.services', [])
  .service('authInterceptor', authInterceptor)
  // .config(function($httpProvider) {
  //   $httpProvider.interceptors.push('authInterceptor');
  // })
  .name;
