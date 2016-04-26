export default class HomeController {
  constructor($http) {
    "ngInject";
    this.$http = $http;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('http://api.lvh.me:3000/v1/users')
      .then(response => this.users = response.data)
  }
}
