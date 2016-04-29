export default class HomeController {
  constructor($http) {
    "ngInject";
    this.$http = $http;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('/users')
      .then(response => this.users = response.data);
  }
}
