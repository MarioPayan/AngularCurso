(function(){
	var app = angular.module('store-products',[]);

	
	app.directive('productTitle', function(){
		return {
			restrict:'E', //para crear un elemento totalmente nuevo
			//restrict:'A', //para efectuar un comportamiento sobre la etiqueta se usa como atributo. Para procesar contenido, no controlarlo
			templateUrl:'product-title.html'
		};
	});
	
	app.directive('productPanels', function(){
		return {
			restrict:'E', //para crear un elemento totalmente nuevo
			//restrict:'A', //para efectuar un comportamiento sobre la etiqueta se usa como atributo. Para procesar contenido, no controlarlo
			templateUrl:'product-panels.html',
			controller: function(){
				this.tab=1;
				this.selectTab= function(secTab){
					this.tab = secTab;
				}
				this.isSelected= function(tab){
					return tab===this.tab;
				}
			},
			controllerAs: 'panel',
		};
	});
	
	app.directive('productReviews', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-reviews.html',
			controller: function(){
				this.review={
					stars:2
				};
				this.addReview = function(product){

					product.reviews.push(this.review);
					this.review={
						stars:2
					};
				};
			},
			controllerAs: 'reviewCtrl',
		}
	});
})();

