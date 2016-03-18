(function(){
  var app = angular.module('ppal',['product-module']);
  
  app.controller('Controlador', function(){
    this.product = gem;
  });
  
  var gem = [
    {
      name: 'Nombresito',
      price: 9.99,
      description: 'Descripcionsita',
      canPurchase: false,
      soldOut: true,
      images: [
        {
          full: 'diamante.jpg',
          thumb: 'diamanteR.jpg'
        },
        {
          full: 'diamante2.jpg',
          thumb: 'diamante2R.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "Ai lob dis producteishon",
          author: "yo"
        }
      ]
    },
    {
      name: 'Nombresito22',
      price: 19.99,
      description: 'Descripcionsita22',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'diamante.jpg',
          thumb: 'diamanteR.jpg'
        },
        {
          full: 'diamante2.jpg',
          thumb: 'diamante2R.jpg'
        }
      ],
      reviews: [
        {
          stars: 4,
          body: "Ai lob dis producteishon x2",
          author: "yo otra vez"
        }
      ]
    },
    {
      name: 'Nombresito33',
      price: 29.99,
      description: 'Descripcionsita33',
      canPurchase: true,
      soldOut: true,
      images: [
        {
          full: 'diamante.jpg',
          thumb: 'diamanteR.jpg'
        },
        {
          full: 'diamante2.jpg',
          thumb: 'diamante2R.jpg'
        }
      ],
      reviews: [
        {
          stars: 3,
          body: "Ai lob dis producteishon x3",
          author: "yo nuevamente"
        }
      ]
    },
    {
      name: 'Nombresito44',
      price: 39.99,
      description: 'Descripcionsita44',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'diamante.jpg',
          thumb: 'diamanteR.jpg'
        },
        {
          full: 'diamante2.jpg',
          thumb: 'diamante2R.jpg'
        }
      ],
      reviews: [
        {
          stars: 2,
          body: "Ai lob dis producteishon x4",
          author: "adivina..."
        }
      ]
    },
    {
      name: 'Nombresito55',
      price: 49.99,
      description: 'Descripcionsita55',
      canPurchase: true,
      soldOut: true,
      images: [
        {
          full: 'diamante.jpg',
          thumb: 'diamanteR.jpg'
        },
        {
          full: 'diamante2.jpg',
          thumb: 'diamante2R.jpg'
        }
      ],
      reviews: [
        {
          stars: 1,
          body: "Ai lob dis producteishon... Oh gueit",
          author: "para k kieres saber eso jaja salu2"
        }
      ]
    }
  ];
  
    this.stars = function(gem){
      return gem.reviews.stars;
    }

  app.controller("reviewControl", function(){
    this.review = {stars: 5}

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {stars: 5};
    };

    this.validacion = function(bool){

    }

  });


  
})();