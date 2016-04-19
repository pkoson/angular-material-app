import angular from 'angular';
import uirouter from 'angular-ui-router';

import UsersController from './users.controller';

export default angular.module('app.users', [uirouter])
  .controller('UsersController', UsersController)
  .name;
