export default class UsersController {
  constructor($http, $location) {
    this.$http = $http;
    this.$location = $location;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('http://api.lvh.me:3000/v1/users')
      .then((response) => {
        this.users = response.data.data.users
        return  this.users
      })
  }
  goToUrl(path) {
    this.$location.path(path);
  }
}
