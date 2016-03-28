(function(){
  var app = angular.module('product-module',[]);

  app.directive("productTitle", function(){
    return{
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive("productPanels", function(){
    return{
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
        this.tab = 1;

        this.selecTab = function(tabSelect){
          this.tab= tabSelect;
        }

        this.isSelected = function(tabCheck){
          return this.tab === tabCheck;
        }
      },
      controllerAs: 'panel'
    };
  });

  
})();