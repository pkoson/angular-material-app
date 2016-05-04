export default function translateResponseInterceptor($translate) {
  return {
    response (response) {
      /*check user language in profile*/
      if (response.config.headers.LanguageInProfile) {
        /*set language */
        $translate.use(response.config.headers.LanguageInProfile);
      }
       return response;
    }
  };
}
