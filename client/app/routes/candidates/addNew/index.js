import angular from 'angular';

import AddNewCtrl from './AddNewCtrl';
import addNewUserDirective from './addNewUserDirective';
import ngFileUpload from 'ng-File-Upload';

export default angular.module('app.candidates.addnew', [ngFileUpload])
  .controller('AddNewCtrl', AddNewCtrl)
  .directive('addNewUserDirective', addNewUserDirective)
  .name;
