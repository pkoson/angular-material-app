export default class CandidatesCtrl {
  constructor($http, $location, appConfig, $scope) {
    var vm = this;
    vm.$http = $http;
    vm.appConfig = appConfig;
    vm.$scope = $scope;
    vm.$scope.query = {
      order: vm.appConfig.orderBy,
      limit: vm.appConfig.pageLimit,
      page: 1,
      selected: []
    };
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
}
