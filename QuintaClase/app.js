(function(){
	var app = angular.module('store',['store-products']); // se crea la dependencia con el módulo de los productos porque para funcionar necesita productos

	app.controller('StoreController',function(){ //el "StoreController" seria la clase
		this.products=gems; //se declara la variable product que apunta a la variable gem
	});
	
	app.controller('SomeController',['$http', function($http){
		var store = this;

		store.products = [];

		$http.get('/data.json').succes(function(data){
			store.products = data;
		});
	}]);


})();
