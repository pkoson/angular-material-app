export default function routes($stateProvider) {
  "ngInject";
  $stateProvider

    .state('login', {
      url: '/login',
      template: require('./routes/login/login.html'),
      controller: 'LoginCtrl',
      controllerAs: 'LoginCtrl'
    })

    .state('app', {
      url:'/app',
      abstract: true,
      template: '<ui-view layout="row" layout-fill flex/>',
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })

    .state('app.home', {
      url: '/',
      template: require('./routes/home/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'HomeCtrl'
    })
    .state('app.home.candidates', {
      url: 'candidates',
      template: require('./routes/candidates/candidates.html'),
      controller: 'CandidatesCtrl',
      controllerAs: 'CandidatesCtrl'
    })
    .state('app.home.candidates.addnew', {
      url: '/addnew',
      template: require('./routes/candidates/addNew/addNewCandidate.html'),
      controller: 'AddNewCtrl',
      controllerAs: 'AddNewCtrl'
    })
    .state('app.home.candidates.showCandidate', {
      url: '/candidate/:id',
      template: require('./routes/candidates/showCandidate/showCandidate.html'),
      controller: 'ShowCandidateCtrl',
      controllerAs: 'ShowCandidateCtrl'
    });
  }
