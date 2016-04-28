export default function translateSwitcher() {
  function translateSwitchCtrl($translate, $scope) {
    $scope.changeLanguage = (lang) => {
      $translate.use(lang);
    }
  }

  return {
    restrict: 'E',
    scope: {},
    template: require('./translateSwitcher.html'),
    controller:  translateSwitchCtrl
  }
}
