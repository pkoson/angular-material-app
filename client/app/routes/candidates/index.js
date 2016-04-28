import angular from 'angular';
import angularAnimate from 'angular-animate';

import uirouter from 'angular-ui-router';

import CandidatesCtrl from './CandidatesCtrl';

export default angular.module('app.candidates', [uirouter])
  .controller('CandidatesCtrl', CandidatesCtrl)
  .name;
