// This file is an entry point for angular tests

import 'angular';
import 'angular-mocks/angular-mocks';

var testsContext = require.context("./app/", true, /.test$/);
testsContext.keys().forEach(testsContext);
