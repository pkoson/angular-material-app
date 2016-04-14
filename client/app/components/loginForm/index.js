import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngtokenauth from '../../lib/ng-token-auth.min.js';
import authConfig from '../../config/auth';

import loginController from './loginForm.controller';

export default angular.module('app.login', [uirouter, ngtokenauth])
  .controller('loginController', loginController)
  .config(authConfig)
  .name;
