import LoginFormCtrl  from './LoginFormCtrl';

describe('Components/loginForm/LoginFormCtrl', () => {
  // Define all variables for inject
  let fakedData = {};
  let mocks = {};   
  let $controller, $q, $rootScope; 

  // Pupulate faked data
  fakedData.loginForm = {name: 'Bartek'};

  // Pupulate all mocks
  mocks.$auth = {
    submitLogin: () => {
      return $q.when({});
    }
  };

  mocks.$state = {
    go: () => {}
  };

  beforeEach(() => { // all this functions will be evaluate before each tests
    angular
      .module('mock.app.login', []) // create new angular fake module
      .controller('LoginFormCtrl', LoginFormCtrl); // add our controller to this module
    angular.mock.module('mock.app.login'); // create mock for new created fake module

    window.module($provide => { // window.module comes from angular-mock lib
      $provide.value('$auth', mocks.$auth); // mock $auth service as a empty object
      $provide.value('$state', mocks.$state);// mock $state service as a empty object
    });

    // inject our previously declared variable to module, just do like that, do not try to undarstand 
    window.inject((_$controller_, _$q_, _$rootScope_) => {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $controller = _$controller_('LoginFormCtrl');
    });
  });


  it('define loginForm as empty object', () => {
    expect($controller.loginForm).toEqual({});
  });

  describe('Method: login', () => {
    
    it('should call $auth.submitLogin service with this.loginForm params', () => {
      spyOn($controller.$auth, 'submitLogin').and.callThrough();
      $controller.loginForm = fakedData.loginForm;
      $controller.login();

      expect($controller.$auth.submitLogin).toHaveBeenCalledWith(fakedData.loginForm);
    });

    describe('Service $auth.submitLogin', () => {
      it('on success call $state.go with home as param', () => {
        spyOn($controller.$state, 'go');
        $controller.login();
        $rootScope.$digest();

        expect($controller.$state.go).toHaveBeenCalledWith('home');
      });

      it('on error call handleError', () => {
        spyOn($controller.$auth, 'submitLogin').and.returnValue($q.reject({}));
        spyOn($controller,'handleError');
        $controller.login();
        $rootScope.$digest();

        expect($controller.handleError).toHaveBeenCalled();
      });
    });
    
  });
});