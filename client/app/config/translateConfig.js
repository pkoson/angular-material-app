export default function translateConfig($translateProvider) {
  "ngInject";
  $translateProvider.useUrlLoader('/locales');
  $translateProvider.useCookieStorage();
  $translateProvider.registerAvailableLanguageKeys(['en', 'pl', 'cn'], {
    'en-*': 'en',
    'pl-*': 'pl',
    'cn-*': 'cn'
  });
  $translateProvider.preferredLanguage('pl');
}
