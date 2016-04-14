export default function authConfig($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://api.lvh.me:3000/v1'
  });
}
