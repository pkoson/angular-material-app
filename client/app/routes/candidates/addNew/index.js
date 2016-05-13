import angular from 'angular';
import uirouter from 'angular-ui-router';

import AddNewCtrl from './AddNewCtrl';
import ngFileUpload from 'ng-File-Upload';

export default angular.module('app.candidates.addnew', [ngFileUpload, uirouter])
  .controller('AddNewCtrl', AddNewCtrl)
  .name;
