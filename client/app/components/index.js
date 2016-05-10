import angular from 'angular';

import mainNavbar from './mainNavbar';
import loginForm from './loginForm';
import translateSwitcher from './translateSwitcher';

export default angular.module('app.components', [
    mainNavbar,
    translateSwitcher,
    loginForm
  ]).name;
