//button event
$("#button").click(function(){
  //alert("button clicked!");
  $.ajax({
    url:"device"
  })


  //$("#button").attr("disabled", false).delay(800);
});
