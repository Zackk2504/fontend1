window.addController = function ($scope ,$http,$location){
  
    $scope.addController = function(){

        //link api
        const apiUser = "http://localhost:3000/users";
       
            let newUser ={
                khachSan: $scope.nameKS,
                ngayNhan: $scope.nn,
                ngaytra: $scope.nt,
                hoTen: $scope.name,
                soPhong: $scope.sp,
                sdt: $scope.sodt,
                email: $scope.em
               
            }
            console.log(newUser )
    
            $http.post(
                apiUser,
                newUser
            ).then(function (response){
                if(response.status ==201){
                    $location.path("Danhsachdat");
                }
            })
      
    }
}