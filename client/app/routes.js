export default function routes($stateProvider) {
  "ngInject";
  $stateProvider

    .state('login', {
      url: '/login',
      template: require('./routes/login/login.html'),
      controller: 'LoginCtrl',
      controllerAs: 'LoginCtrl'
    })

    .state('home', {
      url: '/',
      template: require('./routes/home/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'HomeCtrl'
    })
      .state('home.users', {
        url: 'users',
        template: require('./routes/users/users.html'),
        controller: 'UsersController',
        controllerAs: 'UsersCtr'
      })

        .state('home.users.show', {
          url: '/user/:id',
          template: require('./routes/user/user.html'),
          controller: 'UserController',
          controllerAs: 'UserCtr'
        })
      .state('home.candidates', {
        url: 'candidates',
        template: require('./routes/candidates/candidates.html'),
        controller: 'CandidatesCtrl',
        controllerAs: 'CandidatesCtrl'
      });
    }
