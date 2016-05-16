export default class LogoutCtrl {
  constructor($auth, $state) {
    "ngInject";
    this.$auth = $auth;
    this.$state = $state;
  }
  logout() {
    this.$auth.signOut()
      .then(()=>{
        this.$state.go('login');
      });
  }
}
