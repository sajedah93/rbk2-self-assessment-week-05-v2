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
  .controller('fozzbazzCtrl',function($scope , counter){
  $scope.display = 0;
  $scope.count = 0;
  $scope.increment = function(){
    $scope.count++;
    $scope.display = counter.fizzz($scope.counter);
  }
}); 



   .factory('another', function(){
     var fozz = function (inc) {
    if(inc%4 ===0 && inc%6 ===0){
      return  'FOZZBAZZ'
    }else if(inc%4===0){
      return  'FOZZ'
    }else if(inc%6===0){
      return  'BAZZ'
    }else {
      return inc;
    }

  }
  return {
    fozz : fozz
  }
})

  
.controller('fizzbuzzCtrl',function($scope , counter){
  $scope.display = 0;
  $scope.count = 0;
  $scope.increment = function(){
    $scope.count++;
    $scope.display = counter.fizzz($scope.count);
  }
}); 





