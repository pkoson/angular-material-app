export default function ngConfig($mdThemingProvider) {
  "ngInject";
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
}
