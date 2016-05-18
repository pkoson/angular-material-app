import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-cookie';
import ngtokenauth from './lib/ng-token-auth.min.js';

import routes from './routes';
import config from './config';

import components from './components';

import home from './routes/home/';
import candidates from './routes/candidates';
import login from './routes/login';

import style from './assets/stylesheets/style.css';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import ngMessages from 'angular-messages';

import getFromApi from './services/getFromApi';

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
        ngMessages,

        // Configs
        config,
        routes,

        // Internal modules
        components,
        home,
        login,
        candidates
      ])
      .service('getFromApi', getFromApi);
