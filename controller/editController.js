window.editController = function ($scope, $http, $routeParams, $location) {
    
      // Lấy thông tin chi tiết
      let id = $routeParams.id;

      const apiUser = "http://localhost:3000/users";
  
      $http.get(
          `${apiUser}/${id}`
      ).then(function (response) {
          if (response.status == 200) {
              console.log(response.data);
              $scope.edit = {
                  editID: response.data.id,
                nameks: response.data.khachSan,
                nn: response.data.ngayNhan,
                nt: response.data.ngaytra,
                  name: response.data.hoTen,
                  sp: response.data.soPhong,
                  sdt: response.data.sdt,
                  em: response.data.email
              }
          }
      });
      $scope.editUser = function () {
       // Tạo 1 biến để kiểm tra
       let flag = true;
       // Kiểm tra từng trường dữ liệu
       $scope.kiemTra = {
           nameks: false,
           nn:false,
           nt: false,
           sp: false,
           name: false,
           sdt: false,
           em: false
       }
        // Kiểm tra dữ liệu
    //     if (!$scope.users || !$scope.users.name) {
    //        flag = false;
    //        $scope.kiemTra.name = true;
    //    }
    //    if (!$scope.users || !$scope.student.nn) {
    //        flag = false;
    //        $scope.kiemTra.nn = true;
    //    }
    //    if (!$scope.users || !$scope.student.nt) {
    //        flag = false;
    //        $scope.kiemTra.nameks = true;
    //    }
       if (flag) {


           // Dữ liệu nhập từ input
           let updateUser = {
               khachSan: $scope.edit.nameks,
               ngayNhan: $scope.edit.nn,
               ngaytra: $scope.edit.nt,
               hoTen: $scope.edit.name,
               soPhong: $scope.edit.sp,
               sdt: $scope.edit.sdt,
               email: $scope.edit.em
           }
     
           $http.put(
               `${apiUser}/${id}`,
               updateUser
           ).then(function (response){
               if (response.status = 201){
                   $location.path("Danhsachdat");
               }
           })
        // console.log(updateUser);
       } else{
        alert("nhập đầy đủ vào");
       }
    }
}