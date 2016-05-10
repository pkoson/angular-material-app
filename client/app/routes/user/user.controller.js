export default class UserController {
  constructor($http, $stateParams, appConfig) {
    "ngInject";
    this.$http = $http;
    this.usersId = $stateParams.id;
    this.appConfig = appConfig;
    this.getUser();
  }

  getUser(){
    this.$http
      .get('/users/'+this.usersId)
      .then((response) => {
        this.user = response.data;
        return  this.user;
      });
  }
}
