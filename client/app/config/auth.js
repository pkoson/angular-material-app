import appConfig from './constants';

export default function authConfig($authProvider) {
  $authProvider.configure({
    apiUrl: appConfig.apiUrl
  });
}
