export default class CandidatesCtrl {
  constructor($http, $location, appConfig, $scope, $mdDialog, $mdMedia, $mdSidenav) {
    let vm = this;
    vm.$http = $http;
    vm.appConfig = appConfig;
    vm.$scope = $scope;
    vm.$scope.query = {
      order: vm.appConfig.orderBy,
      limit: vm.appConfig.pageLimit,
      page: 1,
      selected: []
    };
    vm.$mdMedia = $mdMedia;
    vm.$mdDialog = $mdDialog;
    vm.$mdSidenav = $mdSidenav;
    vm.$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    vm.getCandidates(vm);
  }

  getCandidates(vm){
    vm.$http
      .get(vm.appConfig.apiUrl+'/users')
      .then((response) => {
        vm.candidates = response.data;
        return  vm.candidates;
      });
  }

  addNewUser(navID) {
        this.$mdSidenav(navID)
          .toggle();
    }
}
