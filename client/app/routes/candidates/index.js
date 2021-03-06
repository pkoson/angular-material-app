import angular from 'angular';
import angularAnimate from 'angular-animate';

import uirouter from 'angular-ui-router';
import dataTable from 'angular-material-data-table';

import CandidatesCtrl from './CandidatesCtrl';
import addNew from './addNew';
import showCandidate from './showCandidate';

import styles from '../../assets/stylesheets/md-data-table.css';

export default angular.module('app.candidates', [uirouter, dataTable, addNew, showCandidate])
  .controller('CandidatesCtrl', CandidatesCtrl)
  .name;
