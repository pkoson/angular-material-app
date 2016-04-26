export default class HomeController {
  constructor($http) {
    this.$http = $http;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('this.appConfig.apiUrl+'/users/'+this.usersId')
      .then(response => this.users = response.data);
  }
}
