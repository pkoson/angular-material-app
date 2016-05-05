export default function addNewUserDirective() {
  return {
    template: require('./addNewUser.html'),
    restrict: 'E',
    controller: 'AddNewCtrl',
    controllerAs: 'AddNewCtrl'
  };
}
