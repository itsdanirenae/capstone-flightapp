"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, AuthFactory, UserFactory, $location){
  $scope.message = "AuthCtrl";
  $scope.loginContainer = true;
  $scope.registerContainer = false;
  $scope.login = {
    email: "d@d.com",
    password: "123456"
  };

  if($location.path() === "/logout"){
    AuthFactory.logout();
    $rootScope.user = {};
    $location.url("/auth");
  }

let logMeIn = function(loginStuff){
  AuthFactory.authenticate(loginStuff).then(function(didLogin){
    return UserFactory.getUser(didLogin.uid);
  }).then(function(userCreds){
      $rootScope.user = userCreds;
      $scope.login = {};
      $scope.register = {};
      $location.url("/home");
  });
};

$scope.setLoginContainer = function(){
  $scope.loginContainer = true;
  $scope.registerContainer = false;
};

$scope.setRegisterContainer = function (){
  $scope.loginContainer = false;
  $scope.registerContainer = true;
};

$scope.registerUser = function (registerNewUser){
  AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
    registerNewUser.uid = didRegister.uid;
    return UserFactory.addUser(registerNewUser);
  }).then(function(registerComplete){
    logMeIn(registerNewUser);
  });
};

$scope.loginUser = function (loginNewUser){
  logMeIn(loginNewUser);
  };
});