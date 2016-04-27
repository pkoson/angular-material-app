import angular from 'angular';

import mainNavbar from './mainNavbar';
import sideNav from './sideNav';
import loginForm from './loginForm';

export default angular.module('app.components', [
    mainNavbar,
    sideNav,
    loginForm
  ]).name;
