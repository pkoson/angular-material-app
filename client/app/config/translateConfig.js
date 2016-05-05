export default function translateConfig($translateProvider) {
  "ngInject";
  $translateProvider.useUrlLoader('/locales');
  $translateProvider.preferredLanguage('pl');
  $translateProvider.useCookieStorage();
}
