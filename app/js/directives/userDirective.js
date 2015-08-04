import User from '../components/user';

angular.module('app').directive('usuario', function(reactDirective) {
	return reactDirective( User );
});