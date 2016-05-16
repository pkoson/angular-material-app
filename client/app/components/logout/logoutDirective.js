export default function logoutDirective() {
  "ngInject";
  return {
    template: require('./logout.html'),
    restrict: 'E',
    controller: 'LogoutCtrl',
    controllerAs: 'LogoutCtrl'
  };
}
