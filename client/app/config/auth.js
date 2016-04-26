export default function authConfig($authProvider) {
  "ngInject";
  $authProvider.configure({
    apiUrl: 'http://api.lvh.me:3000/v1'
  });
}
