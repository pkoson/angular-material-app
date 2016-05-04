import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-cookie';
import ngtokenauth from './lib/ng-token-auth.min.js';

import routing from './routing';
import config from './config/main';
import ngTheme from './config/ngTheme';
import constants from './config/constants';

import components from './components';
import services from './services';

import home from './routes/home/';
import users from './routes/users/';
import user from './routes/user/';
import candidates from './routes/candidates';

import style from './assets/stylesheets/style.css';

import 'angular-material/angular-material.css';

import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import ngMessages from 'angular-messages';

const ngModule = angular
      .module('app', [
        uirouter,
        ngtokenauth,
        angularMaterial,
        angularAnimate,
        services,
        components,
        home,
        users,
        user,
        candidates,
        ngMessages
      ])
      .constant('appConfig', constants)
      .config(config)
      .config(routing)
      .config(ngTheme);
