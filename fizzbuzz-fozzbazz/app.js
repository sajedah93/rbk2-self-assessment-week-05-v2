angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function(){
     var fizzz = function (count) {
    if(count%3 ===0 && count%5 ===0){
      return  'FizzBuzz'
    }else if(count%3===0){
      return  'Fizz'
    }else if(count%5===0){
      return  'Buzz'
    }else {
      return count;
    }

  }

  return {
    fizzz : fizzz
  }
})

   .factory('another', function(){
     var fozz = function (count) {
    if(count%3 ===0 && count%5 ===0){
      return  'FOZZBAZZ'
    }else if(count%4===0){
      return  'FOZZ'
    }else if(count%6===0){
      return  'BAZZ'
    }else {
      return count;
    }

  }

  return {
    fozz : fozz
  }
})

  
.controller('fizzbuzzCtrl',function($scope , counter){
  $scope.display = 0;
  $scope.count = 0;
  
  $scope.increment1 = function(){
    $scope.count++;
    $scope.display = counter.fizzz($scope.counter);
  }
}); 


.controller('fozzbazzCtrl', function($scope,another){
  $scope.display = 0;
  $scope.count = 0;
  
  $scope.increment2 = function(){
    $scope.count++;
    $scope.display = another.fizzz($scope.count);
  }
}); 

// });




