var app= angular.module('userList',['ngRoute'
]);


app.
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['$http','$scope', function UserListController($http,$scope) {
      //var self = this;
      $scope.hideModal=true;
      // $scope.nome="ciao";
      var self=this;
      self.orderProp='';
      $http.get('https://reqres.in/api/users').then(function(response) {
        $scope.users = response.data.data;
       
        //alert('ok');
        //console.log=(self.users);
        //$scope.prop=true;
        
        
        //entro nel modale
        $scope.writeConsole= function(user){ 
        
       // $scope.user=JSON.parse(JSON.stringify(user));

$scope.userModal=user;
$scope.first_name_modal=user.first_name;
$scope.last_name_modal=user.last_name;

          console.log( user.first_name);
         
          $scope.hideModal=!$scope.hideModal;

          

        };

         $scope.confirm=function(){
$scope.userModal.first_name=$scope.first_name_modal;
$scope.userModal.last_name=$scope.last_name_modal;
$scope.hideModal=!$scope.hideModal;
          
        }

        $scope.annulla=function(){

          $scope.hideModal=!$scope.hideModal;
        }

        $scope.orderList=function(){
          self.orderProp= 'last_name';
          console.log(self.orderProp);
        }

      //console.log(self.users);

      }, function(response){
alert("errore");
console.log(response);

      });


    }]
  });

//   var app = angular.module("userCards",[]);

// app.controller("MyModalCtrl",function($scope){
//     // $scope.title = "AngualarJs Modal";
//     $scope.hideModal = true;
    

//     $scope.openModal = function(){
//         // $scope.hideModal = !$scope.hideModal;
//         console.log($scope.hideModal);
//     }

    
// })


// app.controller('secondCtrl', function SecondCtrl($scope){
  
//   $scope.hideModal=true;
  
//     $scope.openModal = function(){
      
//       $scope.hideModal=!$scope.hideModal;
//         console.log($scope.hideModal);
//         console.log($ctrl.users);
//     };
  
// });

// app.
//   component('userOrderedlist', {
//     templateUrl: 'user-list/user-orderedlist.template.html',
//     controller: ['$http','$scope', function UserListController($http,$scope) {
//       //var self = this;
//       $scope.hideModal=true;
//       this.query='last_name';

//       $http.get('https://reqres.in/api/users').then(function(response) {
//         $scope.users = response.data.data;
//         //console.log=(self.users);
//         //$scope.prop=true;

//         $scope.writeConsole= function(user){ 
//           $scope.user=user;


//           console.log( user.last_name);
//           console.log( $scope.query);
//           $scope.hideModal=!$scope.hideModal;

//         };

//       //console.log(self.users);

//       });


//     }]
//   });
