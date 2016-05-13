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
      controller: 'HomeController',
      controllerAs: 'HomeCtrl'
    })
      .state('home.candidates', {
        url: 'candidates',
        template: require('./routes/candidates/candidates.html'),
        controller: 'CandidatesCtrl',
        controllerAs: 'CandidatesCtrl'
      })
        .state('home.candidates.addnew', {
          url: '/addnew',
          template: require('./routes/candidates/addNew/addNewCandidate.html'),
          controller: 'AddNewCtrl',
          controllerAs: 'AddNewCtrl'
        })
        .state('home.candidates.showCandidate', {
          url: '/candidate/:id',
          template: require('./routes/candidates/showCandidate/showCandidate.html'),
          controller: 'ShowCandidateCtrl',
          controllerAs: 'ShowCandidateCtrl'
        });
    }
