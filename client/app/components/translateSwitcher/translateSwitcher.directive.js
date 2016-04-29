export default function translateSwitcher($translate, $rootScope) {
  let translateSwitchCtrl = (scope) => {
    let setCurrentLanguage;

    scope.changeLanguage = (lang) => {
      $translate.use(lang);
    }

    $rootScope.$on('$translateChangeEnd', (event, data) => {
      scope.currentLanguage = data.language;
    })
  }

  return {
    restrict: 'E',
    scope: {},
    template: require('./translateSwitcher.html'),
    link:  translateSwitchCtrl
  }
}
