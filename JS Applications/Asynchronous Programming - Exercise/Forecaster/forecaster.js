function attachEvents() {
    $('#submit').click(getWeather);

    let locationsUrl = 'https://judgetests.firebaseio.com/locations.json';

    function getWeather() {
        $.get(locationsUrl)
            .then(findForecastByLocation);

        function findForecastByLocation(locations) {
            let currentLocation = {};
            for (let location of locations) {
                if ($('#location').val() === location.name) {
                    currentLocation['name'] = location.name;
                    currentLocation['code'] = location.code;
                }
            }

            let todayForecastUrl = `https://judgetests.firebaseio.com/forecast/today/${currentLocation.code}.json`;
            let upcomingForecastUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${currentLocation.code}.json`;

            $.get(todayForecastUrl)
                .then(todayForecast)
                .catch(error);
            $.get(upcomingForecastUrl)
                .then(upcomingForecast)
                .catch(error);

            function todayForecast(forecast) {
                $('#forecast').css('display', 'block');
                let location = forecast.name;
                let lowTemp = forecast.forecast.low + '°';
                let highTemp = forecast.forecast.high + '°';
                let condition = forecast.forecast.condition;
                let symbol = getSymbol(condition);

                $('#current')
                    .append($('<span class="condition symbol">').text(symbol))
                    .append($('<span class="condition">')
                        .append($('<span class="forecast-data">').text(location))
                        .append($('<span class="forecast-data">').text(lowTemp + '/' + highTemp))
                        .append($('<span class="forecast-data">').text(condition)));
            }

            function upcomingForecast(forecast) {
                for (let current of forecast.forecast) {
                    let condition = current.condition;
                    let low = current.low + '°';
                    let high = current.high + '°';
                    let symbol = getSymbol(condition);

                    $('#upcoming').append($('<span class="upcoming">')
                        .append($('<span class="symbol">').text(symbol))
                        .append($('<span class="forecast-data">').text(low + '/' + high))
                        .append($('<span class="forecast-data">').text(condition)));
                }
            }

            function getSymbol(condition) {
                switch (condition) {
                    case 'Sunny':
                        return '☀';
                    case 'Partly sunny':
                        return '⛅';
                    case 'Overcast':
                        return '☁';
                    case 'Rain':
                        return '☂';
                    default:
                        return 'Error';
                }
            }

            function error(err) {
                $('#forecast').empty().text('Error');
            }
        }
    }
}