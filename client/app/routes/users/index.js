import angular from 'angular';
import angularAnimate from 'angular-animate';

import uirouter from 'angular-ui-router';

import UsersController from './users.controller';

export default angular.module('app.users', [uirouter])
  .controller('UsersController', UsersController)
  .name;
