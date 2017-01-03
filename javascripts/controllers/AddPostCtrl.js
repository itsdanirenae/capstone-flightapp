"use strict";

app.controller("AddPostCtrl", function($scope, PostFactory, SearchFactory, $rootScope, $location) {

$scope.airportCodeContainer = true;
$scope.airportCityContainer = false;
$scope.airportCode = {};

$scope.setAirportCodeContainer = function(){
  $scope.airportCodeContainer = true;
  $scope.airportCityContainer = false;
};

$scope.setAirportCityContainer = function(fire){
  $scope.airportCodeContainer = false;
  $scope.airportCityContainer = true;
};

$scope.addPostSearchAirportCode = (searchAirportCode)=>{
    SearchFactory.getAirportSearchCode(searchAirportCode).then((searchAirportCodes)=>{
      $scope.searchedAirportCode = searchAirportCodes;
    });
  };

$scope.addPostSearchAirportCity = (searchAirportCity)=>{
    SearchFactory.getAirportSearch(searchAirportCity).then((searchAirportCities)=>{
      $scope.searchedAirportCity = searchAirportCities;
    });
  };

$scope.newPost = {};

$scope.submitAddNewPost = (submit)=>{
  $scope.newPost.uid = $rootScope.user.uid;
      $scope.newPost.airportCode = $scope.searchedAirportCode.code;
      $scope.newPost.airportCity = $scope.searchedAirportCode.city;
      $scope.newPost.username = $rootScope.user.username;
      $scope.newPost.timeStamp = new Date();
  PostFactory.postNewPost($scope.newPost).then(function(postId){
    $scope.newPost = {};
    $location.url("/home");
  });
};
});