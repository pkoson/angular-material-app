export default class HomeController {
  constructor($http,$translate) {
    "ngInject";
    this.$http = $http;
    this.$translate = $translate;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('/users')
      .then(response => this.users = response.data);
  }
}
