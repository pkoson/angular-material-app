import angular from 'angular';

import routingConfig from './routingConfig';
import ngTheme from './ngTheme';

import authConfig from './authConfig';

import authResponseInterceptor from './interceptors/authResponseInterceptor';
import apiRequestInterceptor from './interceptors/apiRequestInterceptor';


export default angular
  .module('app.config', [])
    .config(routingConfig)
    .config(ngTheme)
    .config(authConfig)
    .service('authResponseInterceptor', authResponseInterceptor)
    .service('apiRequestInterceptor', apiRequestInterceptor)
    .config(function($httpProvider) {
      "ngInject";
      $httpProvider.interceptors.push('authResponseInterceptor');
      $httpProvider.interceptors.push('apiRequestInterceptor');
    })
    .name;
      
