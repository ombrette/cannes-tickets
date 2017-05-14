var app = angular.module("Cannes", ["ngTouch", "mm.foundation"]);

app.controller('FrontController',
    ['$scope', '$http', '$filter',
        function($scope, $http, $filter){
            var ctrl = this;
            ctrl.films = null;
            ctrl.seances = null;
            ctrl.dates = ['dimanche 14', 'lundi 15', 'mardi 16', 'mercredi 17', 'jeudi 18', 'vendredi 19', 'samedi 20'];
            ctrl.credit = 7;
            ctrl.msg = '';

            // var data = $.param({
            //     firstName: $scope.firstName
            // });

            var promListing = $http.get("data/dates.json");
            promListing.then(function(response){
                ctrl.seances = response.data;
            });
            var promListingFilms = $http.get("data/films.json");
            promListingFilms.then(function(response){
                ctrl.films = response.data.films;
            });

            ctrl.booked = function(id, date){
                var n_seance = id%8;
                var booked_film = ctrl.seances.dates[date].seances[n_seance].film;
                var list_films = findByIdFilm(ctrl.seances.dates[date], booked_film);
                bookById(id, ctrl.seances.dates[date], list_films);
            }

            function bookById(id, data, array) {
                var categoryArray = data.seances;
                for (var i = 0; i < categoryArray['length']; i++) {
                    if(categoryArray[i]['id'] == id){
                      categoryArray[i]['book'] = 1;
                    }
                    else if (array.includes(categoryArray[i]['id'])) {
                        categoryArray[i]['book'] = -1;
                    }
                }
            }

            function findByIdFilm(data, idToLookFor) {
                var categoryArray = data.seances;
                var list_seances = [];

                for (var i = 0; i < categoryArray['length']; i++) {
                    if (categoryArray[i]['film'] == idToLookFor) {
                        list_seances.push(categoryArray[i]['id']);
                    }
                }

                return list_seances;
            }
        }]);