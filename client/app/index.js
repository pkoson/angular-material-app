import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-cookie';
import ngtokenauth from './lib/ng-token-auth.min.js';

import components from './components';
import services from './services';

import routes from './routes';
import config from './config';

import home from './routes/home/';

import 'angular-material/angular-material.css';

import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';


const ngModule = angular
      .module('app', [
        // External modules
        uirouter,
        ngtokenauth,
        angularMaterial,
        angularAnimate,

        // Configs
        config,
        routes,

        // Internal modules
        services,
        components,
        home
      ]);
      
