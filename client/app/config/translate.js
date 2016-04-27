export default function translate($translateProvider) {
  $translateProvider.translations('pl', {
    FOO: 'To jest tekst testowy.'
  });
  $translateProvider.translations('en', {
    FOO: 'This is a test text.'
  });
  $translateProvider.translations('cn', {
    FOO: '這是一個測試文本'
  });
  $translateProvider.preferredLanguage('pl');
}
