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
      controllerAs: 'home'
    })
      .state('home.users', {
        url: 'users',
        template: require('./routes/users/users.html'),
        controller: 'UsersController',
        controllerAs: 'usersCtr'
      })

        .state('home.users.show', {
          url: '/user/:id',
          template: require('./routes/user/user.html'),
          controller: 'UserController',
          controllerAs: 'userCtr'
        })
      .state('home.candidates', {
        url: 'candidates',
        template: require('./routes/candidates/candidates.html'),
        controller: 'CandidatesController',
        controllerAs: 'CandidatesCtrl'
      });
    }
