import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngtokenauth from '../../lib/ng-token-auth.min.js';

import LoginFormCtrl from './LoginFormCtrl';

export default angular.module('app.login', [uirouter, ngtokenauth])
  .controller('LoginFormCtrl', LoginFormCtrl)
  .name;
