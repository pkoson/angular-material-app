export default class CandidatesCtrl {
  constructor($http, $location, appConfig, $scope, $mdDialog, $mdMedia, $mdSidenav, getFromApi) {
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
    let askForPromise = getFromApi.getPromise('/users');
    askForPromise.then(
      (response)=> {
        vm.candidates = response.data;
        return vm.candidates;
      }
    );
  }

  addNewCandidate() {
    this.$mdSidenav('right').toggle();
    this.$location.path('/candidates/addnew');
  }

  editCandidate(id) {
    this.$mdSidenav('right').toggle();
    this.$location.path('/candidates/candidate/'+id);
  }
}
