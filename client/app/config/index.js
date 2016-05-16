import angular from 'angular';

import routingConfig from './routingConfig';
import ngTheme from './ngTheme';

import authConfig from './authConfig';
import translateConfig from './translateConfig';

import constants from './constants';

import authResponseInterceptor from './interceptors/authResponseInterceptor';
import translateRequestInterceptor from './interceptors/translateRequestInterceptor';
import translateResponseInterceptor from './interceptors/translateResponseInterceptor';


export default angular
  .module('app.config', [])
    .constant('appConfig', constants)
    .config(routingConfig)
    .config(ngTheme)
    .config(authConfig)
    .config(translateConfig)
    .service('authResponseInterceptor', authResponseInterceptor)
    .service('translateRequestInterceptor', translateRequestInterceptor)
    .service('translateResponseInterceptor', translateResponseInterceptor)
    .config(function($httpProvider) {
      "ngInject";
      $httpProvider.interceptors.push('authResponseInterceptor');
      $httpProvider.interceptors.push('translateRequestInterceptor');
      $httpProvider.interceptors.push('translateResponseInterceptor');
    })
    .name;
