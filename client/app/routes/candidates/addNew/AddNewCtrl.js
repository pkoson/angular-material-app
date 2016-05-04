export default class AddNewCtrl {
  constructor($scope, $mdDialog, $mdMedia) {
    let vm = this;
    vm.$scope = $scope;
    vm.$mdDialog = $mdDialog;
    vm.languages = [];
    vm.$scope.cancel = ()=> {
      vm.$mdDialog.cancel();
    };
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return { name: vm.chip, type: 'new' };
    }
  }
}
