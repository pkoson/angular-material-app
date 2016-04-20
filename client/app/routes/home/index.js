import angular from 'angular';
import uirouter from 'angular-ui-router';



import HomeController from './home.controller';

export default angular.module('app.home', [uirouter])
  .controller('HomeController', HomeController)
  .name;
