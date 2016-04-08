var ctrl = angular.module("AllControllers", []);

ctrl.controller("chatCtrl", ["$scope", function($scope){
    $scope.hi = "Yo what's up";
    $scope.myid = "coolId";
    $scope.clickFunc = function(id){
        $.ajax({
            url:"controller/comment.php",
            type:"POST",
            dataType:"html",
            data:{
                method:"like",
                message_id: id,
                user_id:sessionStorage.id
            },
            success:function(resp){
                alert("INSERT!");
            }
        });
    }

    setInterval(function(){
        $.ajax({
            url:"controller/comment.php",
            dataType:"json",
            type:"POST",
            data:{
                method:"getall"
            },
            success:function(resp){
                console.log(resp);
                
                $scope.$apply(function(){
                    $scope.msgs = resp;
                })
            }
        })
    }, 1000)
    
    
    
}])

.controller("user", ["$scope",function($scope){
    
}])