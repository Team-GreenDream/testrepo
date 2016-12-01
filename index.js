//this is a js file
var runThis = ()=>{
  for(var i = 0 ; i < 1000; i++){
    $('body').append(`<button class = "alert">${i}</button>`);

  }
  addEvent();
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
