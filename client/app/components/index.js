import angular from 'angular';

import mainNavbar from './mainNavbar';
import loginForm from './loginForm';

export default angular.module('app.components', [
    mainNavbar,
    loginForm
  ]).name;
