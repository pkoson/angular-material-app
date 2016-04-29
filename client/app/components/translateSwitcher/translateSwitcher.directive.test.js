import translateSwitcher  from './translateSwitcher.directive';

describe('translateSwitcher', () => {
  let fakerData = {};
  let mocks = {};
  let $compile, $rootScope;

  beforeEach(() => {
    angular
      .module('mock.app.components.translateSwitcher', [])
        .directive('translateSwitcher', translateSwitcher)
    angular.mock.module('mock.app.components.translateSwitcher');

    mocks.$translate = jasmine.createSpyObj('$translate', ['use']);

    window.module($provide => {
      $provide.value('$translate', mocks.$translate);
    });

    window.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('should render propere html', () => {
    let element = $compile("<translate-switcher></translate-switcher>")($rootScope);

    expect(element.html()).toContain('ng-click="$mdOpenMenu($event)"');
    expect(element.html()).toContain('{{ currentLanguage }}');
    expect(element.html()).toContain("changeLanguage('pl')");
    expect(element.html()).toContain('cn');
  });

});
