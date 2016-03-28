(function(){
	var app = angular.module('store',['store-products']); // se crea la dependencia con el módulo de los productos porque para funcionar necesita productos

	app.controller('StoreController',function(){ //el "StoreController" seria la clase
		this.products=gems; //se declara la variable product que apunta a la variable gem
	});
	var gems = [ //arreglo
		{
			name: 'Dodecaedro', 
			price:2.5,
			description:'...',
			canPurchase: true, //si se puede comprar con la plata que tiene el cliente
			soldOut: false, //si esta en el stock
			images: [
				{
					full: 'dodecahedron-full.jpg',
					thumb: 'dodecahedron.jpg',
					
				},
				{
					full: 'dodecahedron-full.jpg',
					thumb: 'dodecahedron.jpg',
					
				},
			],
			reviews: [
				{
					stars: 5,
					body: 'I love this product!',
					author: 'joe@thomas.com',
					
				},
				{
					stars: 1,
					body: 'I hate this product!',
					author: 'loe@thomas.com',
					
				},
			],
		},
		{
			name: 'Pentagono', 
			price:2.8,
			description:'...',
			canPurchase: true, //si se puede comprar con la plata que tiene el cliente
			soldOut: false, //si esta en el stock
			images: [
				{
					full: 'pentagon.jpg',
					thumb: 'pentagon-thumb.jpg',
					
				},
				{
					full: 'pentagon.jpg',
					thumb: 'pentagon-thumb.jpg',
					
				},
			],
			reviews: [
				{
					stars: 5,
					body: 'I love this product!',
					author: 'joe@thomas.com',
					
				},
				{
					stars: 1,
					body: 'I hate this product!',
					author: 'loe@thomas.com',
					
				},
			],
		},		
		{
			name: 'Cuadrado', 
			price:4.8,
			description:'...',
			canPurchase: true, //si se puede comprar con la plata que tiene el cliente
			soldOut: false, //si esta en el stock
			images: [
				{
					full: 'cuadrado.jpg',
					thumb: 'pentagon-thumb.jpg',
					
				},
				{
					full: 'cuadrado.jpg',
					thumb: 'pentagon-thumb.jpg',
					
				},
			],
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
