import angular from 'angular';

import authInterceptor from './authInterceptor';

export default angular.module('app.services', [])
  .service('authInterceptor', authInterceptor)
  .config(function($httpProvider) {
    "ngInject";
    $httpProvider.interceptors.push('authInterceptor');
  })
  .name;
