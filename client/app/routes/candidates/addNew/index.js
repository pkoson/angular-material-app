import angular from 'angular';

import AddNewCtrl from './AddNewCtrl';

export default angular.module('app.candidates.addnew', [])
  .controller('AddNewCtrl', AddNewCtrl)
  .name;
