import angular from 'angular';

import mainNavbar from './mainNavbar';
import sideNav from './sideNav';
import loginForm from './loginForm';
import logout from './logout';
import translateSwitcher from './translateSwitcher';

export default angular.module('app.components', [
    mainNavbar,
    sideNav,
    translateSwitcher,
    loginForm,
    logout
  ]).name;
