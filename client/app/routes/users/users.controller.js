export default class UsersController {
  constructor($http, $location, appConfig) {
    this.$http = $http;
    this.$location = $location;
    this.appConfig = appConfig;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get(this.appConfig.apiUrl+'/users')
      .then((response) => {
        this.users = response.data;
        return  this.users;
      });
  }
  goToUrl(path) {
    this.$location.path(path);
  }
}
