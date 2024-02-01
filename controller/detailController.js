window.detailController = function($scope,$http,$routeParams){
    let id = $routeParams.id;

    const apiUser = 'http://localhost:3000/users';

    $http.get(
        `${apiUser}/${id}`
    ).then(function(response){
        console.log(response.data)
        $scope.dulieu={
            id: id,
            ks: response.data.khachSan,
            nn: response.data.ngayNhan,
            nt: response.data.ngaytra,
            ten: response.data.hoTen,
            sp: response.data.soPhong,
            sdt: response.data.sdt,
            em: response.data.email
        }
    })
}