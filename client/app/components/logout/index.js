import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularMaterial from 'angular-material';

import logoutDirective from './logoutDirective';
import LogoutCtrl from './LogoutCtrl';

export default angular.module('app.components.logout', [uirouter, angularMaterial])
  .controller('LogoutCtrl', LogoutCtrl)
  .directive('logout', logoutDirective)
  .name;
