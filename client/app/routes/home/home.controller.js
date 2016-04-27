export default class HomeController {
  constructor($http,$translate) {
    this.$http = $http;
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('/users')
      .then(response => this.users = response.data);
  }
  changeLanguageaa(lang){
    $translate.use(lang);
  }
}
