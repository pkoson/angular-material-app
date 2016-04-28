export default class LoginFormCtrl {
  constructor($auth, $state) {
    this.$state = $state;
    this.$auth = $auth;
    this.loginForm = {};
    this.validateError = false;
  }

  login() {
    this.$auth
      .submitLogin(this.loginForm)
        .then(this.handleSuccess.bind(this))
        .catch(this.handleError.bind(this));
  }

  handleSuccess(response) {
    this.$state.go('home');
  }

  handleError(response) {
    console.log("error", response);
    this.validateError = true;
  }
}
