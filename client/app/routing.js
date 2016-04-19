export default function routes($stateProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      template: require('./components/loginForm/loginForm.html'),
      controller: 'loginController',
      controllerAs: 'loginCtr'
    })

    .state('home', {
      url: '/',
      template: require('./routes/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })

    .state('users', {
      url: '/users/:usersId',
      template: require('./routes/users/users.html'),
      controller: 'UsersController',
      controllerAs: 'users'
    })
  };
