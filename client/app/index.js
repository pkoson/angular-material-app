import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-cookie';
import ngtokenauth from './lib/ng-token-auth.min.js';

import routing from './routing';
import config from './config/main';
import ngTheme from './config/ngTheme';

import components from './components';
import services from './services';

import home from './routes/home/';

import 'angular-material/angular-material.css';

import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';


const ngModule = angular
      .module('app', [
        uirouter,
        ngtokenauth,
        angularMaterial,
        angularAnimate,
        services,
        components,
        home
      ])
      .config(config)
      .config(routing)
      .config(ngTheme)
      
