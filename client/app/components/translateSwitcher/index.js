import angular from 'angular';

import translateSwitcher from './translateSwitcher.directive';

export default angular.module('app.components.translateSwitcher', [])
  .component('translateSwitcher', translateSwitcher)
  .name;
