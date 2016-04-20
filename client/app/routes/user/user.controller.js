export default class UserController {
  constructor($http, $stateParams, appConfig) {
    this.$http = $http;
    this.usersId = $stateParams.id;
    this.appConfig = appConfig;
    this.getUser();
  }

  getUser(){
    this.$http
      .get(this.appConfig.apiUrl+'/users/'+this.usersId)
      .then((response) => {
        this.user = response.data.data.user
        return  this.user
      })
  }
}
