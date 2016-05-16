export default class ShowCandidateCtrl {
  constructor($http, $stateParams, appConfig, getFromApi) {
    "ngInject";
    let vm = this;
    let candidate;
    vm.$http = $http;
    vm.usersId = $stateParams.id;
    vm.appConfig = appConfig;
    let askForPromise = getFromApi.getPromise('/users/'+vm.usersId);
    askForPromise.then(
      (response)=> {
        vm.candidate = response.data;
        console.log("response", vm.candidate);
      }
    );
  }
  updateCandidate(data){
    this.$http
        .patch(this.appConfig.apiUrl+'/users/'+this.usersId, data)
        .then((response) => {
          console.log("response", response);
        });
  }
}
