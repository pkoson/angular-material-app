import angular from 'angular';

import routingConfig from './routingConfig';
import ngTheme from './ngTheme';

import authConfig from './authConfig';

import authInterceptor from './interceptors/authInterceptor';
import apiRequestInterceptor from './interceptors/apiRequestInterceptor';


export default angular
  .module('app.config', [])
    .config(routingConfig)
    .config(ngTheme)
    .config(authConfig)
    .service('authInterceptor', authInterceptor)
    .service('apiRequestInterceptor', apiRequestInterceptor)
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
      $httpProvider.interceptors.push('apiRequestInterceptor');
    })
    .name;
      
