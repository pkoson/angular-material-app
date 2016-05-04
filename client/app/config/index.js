import angular from 'angular';

import routingConfig from './routingConfig';
import ngTheme from './ngTheme';

import authConfig from './authConfig';
import translateConfig from './translateConfig';

import authResponseInterceptor from './interceptors/authResponseInterceptor';
import apiRequestInterceptor from './interceptors/apiRequestInterceptor';
import translateRequestInterceptor from './interceptors/translateRequestInterceptor'


export default angular
  .module('app.config', [])
    .config(routingConfig)
    .config(ngTheme)
    .config(authConfig)
    .config(translateConfig)
    .service('authResponseInterceptor', authResponseInterceptor)
    .service('apiRequestInterceptor', apiRequestInterceptor)
    .service('translateRequestInterceptor', translateRequestInterceptor)
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('authResponseInterceptor');
      $httpProvider.interceptors.push('apiRequestInterceptor');
      $httpProvider.interceptors.push('translateRequestInterceptor');
    })
    .name;

