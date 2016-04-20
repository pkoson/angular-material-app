export default class UserController {
  constructor($http, $stateParams) {
    this.$http = $http;
    this.usersId = $stateParams.id;
    this.getUser();
  }

  getUser(){
    this.$http
      .get('http://api.lvh.me:3000/v1/users/'+this.usersId)
      .then((response) => {
        this.user = response.data.data.user
        return  this.user
      })
  }
}
