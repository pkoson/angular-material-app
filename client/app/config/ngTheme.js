export default function ngConfig($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
  $mdIconProvider
    .defaultIconSet('../assets/images/mdi.svg');
}
