export default class ShowCandidateCtrl {
  constructor($http, $stateParams, appConfig) {
    "ngInject";
    var vm = this;
    vm.$http = $http;
    vm.usersId = $stateParams.id;
    vm.appConfig = appConfig;
    vm.getCandidate(vm);
  }

  getCandidate(vm){
    vm.$http
      .get(vm.appConfig.apiUrl+'/users/'+vm.usersId)
      .then((response) => {
        vm.candidate = response.data;
        return  vm.candidate;
      });
  }
  updateCandidate(data){
    this.$http
        .patch(this.appConfig.apiUrl+'/users/'+this.usersId, data)
        .then((response) => {
          console.log("response", response);
        });
  }
}
