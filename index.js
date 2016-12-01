//this is a js file
var runThis = ()=>{
  for(var i = 0 ; i < 10000000; i++){
    console.log("breaking");
  }
}
/* DO WE NEED THIS FEATURE? */
for (var i = 1; i > 0; i ++) {
	console.log("Ethan Broke the App!")
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
