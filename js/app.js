var securityApp = angular.module('secApp',['ngResource']);
securityApp.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 60; 
}]);
securityApp.controller('mainController',['$scope','$location','$anchorScroll','$resource',function($scope,$location,$anchorScroll,$resource){
    $scope.items = [];
    $scope.getBill = function(){
        console.log('call to get the bill');
        if($scope.billNo === '1234'){
            var billApi = $resource('http://35.165.202.49:8080/AR-Digirupt/GetBill');
            billApi.query({id:'584d32e6e4b0ce004281fd56',custom:'name,quantity'},function(response){
                console.log(response);
                response.forEach(function(res){
                    $scope.items.push({itmNm:res.name,qty:res.quantity,chkFlag:false})
            })
        })
        }
        
        
    }
    $scope.billChk = false;
    $scope.chkItemFlags = function(){
        var chks = true;
        $scope.items.forEach(function(item){if(item.chkFlag===false) chks=false});
        if(chks){
            $scope.billChk = true;
            $location.hash('verify');
        }
    }
    $scope.newCust = function(){
        $scope.billNo = '';
        $scope.items = [];
        $scope.billChk = false;
        $location.hash('next');
    }
}]);