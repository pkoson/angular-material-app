import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-cookie';
import ngtokenauth from './lib/ng-token-auth.min.js';

import components from './components';
import services from './services';

import routes from './routes';
import config from './config';

import home from './routes/home/';

import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

import angularTranslate from 'angular-translate';
import angularTranslateLoaderUrl from 'angular-translate-loader-url';
import angularTranslateStorageCookie from 'angular-translate-storage-cookie';
import ngCookies from 'angular-cookies';
import 'angular-material/angular-material.css';


const ngModule = angular
      .module('app', [
        // External modules
        uirouter,
        ngtokenauth,
        angularMaterial,
        angularAnimate,
        angularTranslate,
        angularTranslateLoaderUrl,
        angularTranslateStorageCookie,
        ngCookies,


        // Configs
        config,
        routes,

        // Internal modules
        services,
        components,
        home
    ]);
