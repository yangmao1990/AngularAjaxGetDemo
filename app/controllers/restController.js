function restController($scope, $http) {


    $scope.getWeather = function () {
        var webUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.query;

        $http.get(webUrl).success(function (data) {
            $scope.weather = data;
        });


    }
}

ajaxApp.controller('restController', restController);
