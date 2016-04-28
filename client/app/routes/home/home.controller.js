export default class HomeController {
  constructor($http, $mdSidenav, appConfig) {
    this.$http = $http;
    this.$mdSidenav = $mdSidenav;
    this.appConfig = appConfig;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get(this.appConfig.apiUrl+'/users/')
      .then(response => this.users = response.data);
  }
  openLeftMenu() {
      console.log('test open left');
      this.$mdSidenav('left').toggle();
  }
}
