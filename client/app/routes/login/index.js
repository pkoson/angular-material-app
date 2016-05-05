import angular from 'angular';

import LoginCtrl from './loginCtrl';

export default angular.module('app.login', [])
  .controller('LoginCtrl', LoginCtrl)
  .name;
