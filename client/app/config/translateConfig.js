export default function translateConfig($translateProvider) {
  $translateProvider.useUrlLoader('/locales');
  $translateProvider.preferredLanguage('pl');
}
