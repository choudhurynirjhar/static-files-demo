(function () {
    $(document).ready(function () {
        $.get('/WeatherForecast', function (data) {
            console.log(data);
        });
    });
})();