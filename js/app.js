$(document).ready(function () {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=45.5152&lon=-122.6784&appid=0a8f59036af137c0dc466abd93781d1c&units=imperial';

  const weatherCall = (weather) => {
    $('#weather').append(
      $('<span>')
        .css({
          color: 'black',
        })
        .text(parseInt(weather.main.temp) + '° ' + weather.weather[0].main)
    );
  };
  const fetchData = (url) => {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        weatherCall(data);
      },
      error: (error) => {
        console.log(error);
        $('').append('<div>').text(`An error occurred. Please try again.`);
      },
      complete: () => {},
    });
  };
  fetchData(url);
});
