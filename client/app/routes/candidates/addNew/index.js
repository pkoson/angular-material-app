import angular from 'angular';

import AddNewCtrl from './AddNewCtrl';
import addNewUserDirective from './addNewUserDirective';

export default angular.module('app.candidates.addnew', [])
  .controller('AddNewCtrl', AddNewCtrl)
  .directive('addNewUserDirective', addNewUserDirective)
  .name;
