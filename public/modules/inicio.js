'use strict';
/*
angular.module('myApp')
	.controller('inicioController', function($scope, $http) {
		$scope.currentPage = 1;
	    $scope.pageSize = 10;

	   
	    //http://www.motonet.com.ar/api/publications
	    //http://aclav.datachost.com/public/api/noticias
	    //http://aclav.datachost.com/public/api/noticias
	    $http.get("http://aclav.datachost.com/public/api/noticias")
	    .then(function(response) {
	        $scope.meals = response.data;
	        //console.log($scope.meals)
	    });


	    $scope.load = function() {
       // do your $() stuff here
		console.log('asd')
   		//document.write('<script src="assets/vendor/jquery/jquery.min.js"><\/script>');

		};

		   //don't forget to call the load function
		   $scope.load();
	});
*/

var scotchApp = angular.module('scotchApp', []);

    // create the controller and inject Angular's $scope
    scotchApp.controller('inicioController', function($scope, $http) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        console.log($scope.message);

        $http.get("http://aclav.datachost.com/public/api/homeNoticias")
	    .then(function(response) {
	        $scope.datos = response.data;
	        console.log($scope.datos[0].noticias['titulo'])
	    });
    });

