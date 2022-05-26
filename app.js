$(document).ready(function () {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=45.5152&lon=-122.6784&appid=0a8f59036af137c0dc466abd93781d1c&units=imperial";

  $("#main").append("<div>").attr("id", "okay");
  // $("#okay").append($("<p>").text('Portland, OR Weather:'));

  const weatherCall = (weather) => {
    // let today = new Date(weather.sys.sunrise);
    $("#okay")
      .append(
        $("<p>")
          .css({
            color: "white",
          })
          .text(weather.name + " Weather")
      )
      .append(
        $("<p>")
          .css({
            color: "white",
            fontSize: "2em",
          })
          .text(parseInt(weather.main.temp) + "°")
      )
      
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data);
        weatherCall(data);
      },
      error: (error) => {
        console.log(error);
        $("#main").append("<div>").text(`An error occurred. Please try again.`);
      },
      complete: () => {},
    });
  };
  fetchData(url);
});
