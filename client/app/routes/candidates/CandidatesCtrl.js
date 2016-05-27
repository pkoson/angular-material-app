export default class CandidatesCtrl {
  constructor($http, $location, appConfig, $scope, $mdMedia, $mdSidenav, getFromApi, deleteCandidateApi) {
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
    vm.$mdSidenav = $mdSidenav;
    vm.deleteCandidateApi = deleteCandidateApi;
    vm.$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    getFromApi.getPromise('/users').then((response)=> {
        vm.candidates = response.data;
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

  deleteCandidate(id, ev, name) {
    this.deleteCandidateApi.del(id, ev, name);
  }
}
