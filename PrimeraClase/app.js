(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){ //el "StoreController" seria la clase
		this.products=gems; //se declara la variable product que apunta a la variable gem
	});
	var gems = [ //arreglo
		{
			name: 'Dodecaedro', 
			price:2.5,
			description:'...',
			canPurchase: false, //si se puede comprar con la plata que tiene el cliente
			soldOut: false, //si esta en el stock
		},
		{
			name: 'Pentagono', 
			price:2.8,
			description:'...',
			canPurchase: true, //si se puede comprar con la plata que tiene el cliente
			soldOut: true, //si esta en el stock
		},		
		{
			name: 'Cuadrado', 
			price:4.8,
			description:'...',
			canPurchase: true, //si se puede comprar con la plata que tiene el cliente
			soldOut: false, //si esta en el stock
		},
		{
			name: 'Triangulo', 
			price:3,
			description:'...',
			canPurchase: true, //si se puede comprar con la plata que tiene el cliente
			soldOut: false, //si esta en el stock
		},
	];
})();
