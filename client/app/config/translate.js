export default function translate($translateProvider) {
  $translateProvider.useUrlLoader('./test.json');
  $translateProvider.preferredLanguage('pl');
}
