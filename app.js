(function(){
	var app = angular.module('GymStatistic', []);
	
	app.controller('TableContoller', ['$http', '$scope', function($http, $scope){
		var exercises = this;
		exercises.data = [];

		$http.get('/exercise.json').success(function(response){
			$scope.exercises.data = response;
			exercises.data = $scope.exercises.data;
		});


		this.getExStr = function(typeEx){
			switch(typeEx){
				case "1":
					return "Biceps";
				case "2":
					return "Triceps";
				case "3":
					return "Legs";
				default:
					return typeEx;
			}
		};
	}]);

	app.controller('FormController', ['$http', '$scope', function($http, $scope){
		this.ex = {};

		this.submit = function(ex){
			$scope.exercises.data.push({"exercise": ex.typeEx, "weight": ex.weight, "num": ex.count, "date": ex.date});
			this.ex = {};
		};

		this.getImgSrc = function(){
			switch(this.ex.typeEx){
				case "1":
					return "/imgs/biceps.jpg";
				case "2":
					return "/imgs/triceps.jpg";
				case "3":
					return "/imgs/legs.jpg";
				default:
				  	return "";
			}
		};

		this.getExStr = function(typeEx){
			switch(this.ex.typeEx){
				case "1":
					return "Biceps";
				case "2":
					return "Triceps";
				case "3":
					return "Legs";
				default:
					return typeEx;
			}
		};

		this.isImgChosen = function(exType){
			return exType > 0;
		};
	}]);

	app.controller('TabsController', ['$scope', function($scope){
		$scope.exercises = {};
		this.tab = 1;
		this.setTab = function(tabNum){
			this.tab = tabNum;
		};
		this.isTab = function(tabNum){
			return this.tab === tabNum;
		};
	}]);

	app.directive('tableElement', function(){
		return {
			restrict: 'E',
			templateUrl: 'table-element.html'
		};
	});

	app.directive('navbarElement', function(){
		return {
			restrict: 'E',
			templateUrl: 'navbar-element.html'
		};
	});

	app.directive('formElement', function(){
		return {
			restrict: 'E',
			templateUrl: 'form-element.html'
		};
	});

	app.directive('tabsElement', function(){
		return {
			restrict: 'E',
			templateUrl: 'tabs-element.html'
		};
	});
})();