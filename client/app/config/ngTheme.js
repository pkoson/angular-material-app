export default function ngConfig($mdThemingProvider) {
  "ngInject";
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
}
