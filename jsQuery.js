//button event
$("#button").click(function(){
  
  //alert("button clicked!");
  $.ajax({
	url: 'http://192.168.1.4:5000/device',
	type: 'get',
	dataType: 'jsonp',
	success: function(result){
		alert(result);
	},
	error: function(result){
		alert(result);
	}
});
  
  



  //$("#button").attr("disabled", false).delay(800);
});
