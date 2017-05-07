var app = angular.module("Cannes", ["ngTouch", "mm.foundation"]);

app.controller('FrontController',
    ['$scope', '$http',
        function($scope, $http){
            var ctrl = this;
            ctrl.films = null;
            ctrl.seances = null;
            ctrl.dates = [14, 15, 16, 17, 18, 19, 20];

            var promListing = $http.get("data/dates.json");
            promListing.then(function(response){
                ctrl.seances = response.data;
                console.log(ctrl.seances);
            });
            var promListingFilms = $http.get("data/films.json");
            promListingFilms.then(function(response){
                ctrl.films = response.data.films;
                console.log(ctrl.films);
            });
        }]);