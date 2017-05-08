<!DOCTYPE html>
<html lang="en" ng-app="Cannes">
<head>
    <meta charset="UTF-8">
    <title>Cannes Tickets</title>
    <script src="/bower_components/angular/angular.js"></script>
    <script src="/bower_components/angular-foundation-6/dist/angular-foundation.min.js"></script>
    <script src="/bower_components/angular-touch/angular-touch.min.js"></script>
    <script src="/bower_components/angular-route/angular-route.min.js"></script>
    <script src="/bower_components/ngmap/build/scripts/ng-map.js"></script>
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyDRZRUMwKhEu0Nqru3N8pb9rximlgnup4A&libraries=geometry"></script>
    <script src="/app.js"></script>

    <link rel="stylesheet" href="/bower_components/foundation-sites/dist/css/foundation-flex.min.css" />
    <link rel="stylesheet" href="/app.css" />
</head>
<body>

<div class="container">
    <table ng-controller="FrontController as ctrl">
        <tr>
            <th>
                &nbsp;
            </th>
            <th>
                Debussy
            </th>
            <th colspan="7">
                Lumière
            </th>
        </tr>
        <tr ng-repeat="jour in ctrl.seances.dates">
            <th>
                {{ctrl.dates[jour.jour]}} Mai 2016
            </th>
            <td ng-repeat="seance in jour.seances" ng-class="{none: seance.film < 0, available: seance.book == 0}">
                <p><strong>{{ctrl.films[seance.film].titre}}</strong></p>
                <p>{{ctrl.films[seance.film].realisateur}}</p>
                <p>
                    <span>{{seance.heure}}</span>
                    <span ng-if="seance.book == 0 && seance.film >= 0"><img src="images/picto-question.png"><a ng-click="booked()">Demander</a></span>
                    <span ng-if="seance.book == 1 && seance.film >= 0"><img src="images/picto-demande-en-attente.png"><a>Demandée</a></span>
                </p>
                <p ng-if="seance.demande == 'High'">
                    <span class="red-circle"></span>
                </p>
            </td>
        </tr>
    </table>
</div>

</body>
</html>