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

  toogleMenu(position) {
    this.$mdSidenav(position).toggle();
  }

  addNewCandidate() {
    this.toogleMenu('right');
    this.$location.path('/app/candidates/addnew');
  }

  editCandidate(id) {
    this.toogleMenu('right');
    this.$location.path('/app/candidates/candidate/'+id);
  }

  deleteCandidate(id, ev, name) {
    this.deleteCandidateApi.del(id, ev, name);
  }
}
