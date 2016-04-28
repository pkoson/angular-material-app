export default function translate($translateProvider) {
  $translateProvider.useUrlLoader('http://api.lvh.me:3000/v1/locales');
  $translateProvider.preferredLanguage('pl');
}
