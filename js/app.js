$(document).ready(function () {
  //Below is my API call for weather and I've commented it out, as it perhaps is not important
  // const url =
  //   'https://api.openweathermap.org/data/2.5/weather?lat=45.5152&lon=-122.6784&appid=0a8f59036af137c0dc466abd93781d1c&units=imperial';
  // // $('#main').append('<div>').attr('id', 'weather');
  // // $("#okay").append($("<p>").text('Portland, OR Weather:'));
  // const weatherCall = (weather) => {
  //   // let today = Date();
  //   // console.log(today)
  //   $('#weather').append(
  //     $('<div>')
  //       .css({
  //         fontWeight: '100',
  //         color: 'black',
  //         fontSize: '1.25em',
  //       })
  //       .text(
  //         weather.name +
  //           ' ' +
  //           parseInt(weather.main.temp) +
  //           '° ' +
  //           weather.weather[0].main
  //       )
  //   );
  // };
  // const fetchData = (url) => {
  //   $.ajax({
  //     type: 'GET',
  //     url: url,
  //     success: (data) => {
  //       console.log(data);
  //       weatherCall(data);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //       $('').append('<div>').text(`An error occurred. Please try again.`);
  //     },
  //     complete: () => {},
  //   });
  // };
  // fetchData(url);
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/12637886/baobev7/",
      type: "post",
      data: $("#contact-form").serialize(),
      success: function() {
        // Redirect to another success page
        window.location = "http://google.com";
      }
    });
  });
});
