export default class UsersController {
  constructor($http, $stateParams) {
    this.$http = $http;
    this.usersId = $stateParams.usersId;
    console.log(this.usersId)
    this.getUsers();
  }

  getUsers(){
    this.$http
      .get('http://api.lvh.me:3000/v1/users/'+this.usersId)
      .then((response) => {
        this.users = response.data.data.user
        console.log(this.users)
        return  this.users
      })
  }
}
