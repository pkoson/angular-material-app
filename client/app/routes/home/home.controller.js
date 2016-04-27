export default class HomeController {
  constructor($http, $mdSidenav) {
    this.$http = $http;
    this.$mdSidenav = $mdSidenav;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('http://api.lvh.me:3000/v1/users')
      .then(response => this.users = response.data);
  }
  openLeftMenu() {
      console.log('test open left');
      this.$mdSidenav('left').toggle();
  }
}
