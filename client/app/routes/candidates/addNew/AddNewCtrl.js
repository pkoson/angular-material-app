export default class AddNewCtrl {
  constructor($scope, $mdDialog, $mdMedia, appConfig) {
    let vm = this;
    vm.$scope = $scope;
    vm.$mdDialog = $mdDialog;
    vm.languages = [];
    vm.currencies = appConfig.currencies;
    vm.contract = appConfig.contract;
    vm.$scope.cancel = ()=> {
      vm.$mdDialog.cancel();
    };
    function transformChip(chip) {
      if (angular.isObject(chip)) {
        return chip;
      }
      return { name: vm.chip, type: 'new' };
    }
  }
}
