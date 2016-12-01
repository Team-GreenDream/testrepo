//this is a js file
var runThis = ()=>{
  for(var i = 0 ; i < 1000; i++){
    $('body').append(`<button class = "alert">${i}</button>`);

  }
  addEvent();
}

// check for Geolocation support
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
  }
else {
  console.log('Geolocation is not supported for this Browser/OS.');
}

// Get the user's location:
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#coordinates").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
      console.log("Success! latitude: ", position.coords.latitude, "longitude:", position.coords.longitude)
        .done(function(data) {
  		  $('body').append("#dummy-restaurant");
})
    });
  }



var addEvent = function(){
  $('.alert').on('click',function(ev){
    ev.preventDefault();
    alert($(this).text());

  })
}


$('.click').on('click',function(event){
  event.preventDefault();
  runThis();
})
