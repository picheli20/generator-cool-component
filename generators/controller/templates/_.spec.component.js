import angular from 'angular';
import 'angular-mocks';
import 'angular-ui-router';
import {<%= name %>} from './<%= nameDash %>.controller';

describe('<%= name %> component', () => {
  beforeEach(() => {
    angular
      .module('appcheck', ['ui.router', 'app/components/<%= nameDash %>/<%= nameDash %>.html'])
      .component('<%= nameDash %>', <%= name %>);
    angular.mock.module('app<%= name %>');
  });

  it('should be defined', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<<%= nameDash %>></<%= nameDash %>>')($rootScope);
    $rootScope.$digest();
    expect(element).toBeDefined();
  }));
});
