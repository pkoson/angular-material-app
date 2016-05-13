export default class CandidatesCtrl {
  constructor($http, $location, appConfig, $scope, $mdDialog, $mdMedia, $mdSidenav) {
    "ngInject";
    let vm = this;
    vm.$http = $http;
    vm.$location = $location;
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

  addNewCandidate(navID) {
    this.$mdSidenav('right').toggle();
    this.$location.path('/candidates/addnew');
  }

  editCandidate(id) {
    this.$mdSidenav('right').toggle();
    this.$location.path('/candidates/candidate/'+id);
  }
}
