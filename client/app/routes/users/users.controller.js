export default class UsersController {
  constructor($http, $location, appConfig) {
    "ngInject";
    this.$http = $http;
    this.$location = $location;
    this.appConfig = appConfig;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('/users')
      .then((response) => {
        this.users = response.data;
        return  this.users;
      });
  }
  goToUrl(path) {
    this.$location.path(path);
  }
}
