export default function translateRequestInterceptor ($cookies) {
  "ngInclude";
  let languageInCookie = {};
  if($cookies.get('NG_TRANSLATE_LANG_KEY')) {
    languageInCookie = $cookies.get('NG_TRANSLATE_LANG_KEY').replace(/"/g, "");
  }

  return {
    request(config) {
      config.headers['LanguageInCookie'] = languageInCookie;

      /*Only for test*/
      config.headers['LanguageInProfile'] = 'en';

      return config;
    }
  };
}
