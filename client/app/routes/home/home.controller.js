export default class HomeController {
  constructor($http) {
    this.$http = $http;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('/users')
      .then(response => this.users = response.data);
  }
}
