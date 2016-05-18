import angular from 'angular';
import uirouter from 'angular-ui-router';

import ShowCandidateCtrl from './ShowCandidateCtrl';

export default angular.module('app.showCandidate', [uirouter])
  .controller('ShowCandidateCtrl', ShowCandidateCtrl)
  .name;
