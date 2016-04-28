export default function routes($stateProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      template: require('./components/loginForm/loginForm.html'),
      controller: 'LoginFormCtrl',
      controllerAs: 'LoginFormCtrl'
    })

    .state('home', {
      url: '/',
      template: require('./routes/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'HomeCtrl'
    });

  }
