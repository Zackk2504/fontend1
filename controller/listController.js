
window.listController = function($scope, $http){
    const apiUser = 'http://localhost:3000/users';
    function getData(){
        $http.get(apiUser).then(function(response){
            if(response.status==200){
                $scope.listController = response.data;
            }
        })
    }
getData();
 
$scope.delete = function(iddelete){
    if(iddelete){
        $http.delete(
            `${apiUser}/${iddelete}`
        )
        .then(function(response){
            if(response == 200){
                alert("ok")
            }
        })
    }
}
}