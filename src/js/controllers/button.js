function ButtonController ($scope) {
    console.log("Hello");
    $scope.counter = { count: 0, statusLikes: 'likes', status: 'add' };

    $scope.add = function (key) { key.count += 1; };

    $scope.sub = function (key) {
        if (key.count === 0) {
            key.count = 0
        } else {
            key.count -= 1
        }
    };

    $scope.text = function (key) {
        if (key.count === 1) {
            key.statusLikes = 'like'
        } else {
            key.statusLikes = 'likes'
        }
    };

    $scope.clicked = function (key) {
        console.log(key);
        if (key.status === 'add') {
            $scope.add(key);
        } else {
            $scope.sub(key);
        }
        $scope.text(key);
    };

    $scope.toggle = function (key) {
        if (key.status === 'add') {
            key.status = 'sub'
        } else {
            key.status = 'add'
        }
    };


ButtonController.$inject = ['$scope'];
}

export default ButtonController;