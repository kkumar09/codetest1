$(document).ready(function(){
	function updateValue() {
       var val = $( "#slider" ).slider( "value" );
       var Maxval = 125;
       $("#slider .ui-slider-handle").html("<br/>$"+val);
       var reqAmt = Maxval-val;
       $(".requiredAmount").html("<span><img src='images/Info.png'/>You need $"+reqAmt+" more to reach your target</span>");
    }	
	$( "#slider" ).slider({
	      orientation: "horizontal",
	      range: "min",
	      min: 0,
	      max: 125,
	      value: 0,
	      slide: updateValue,
			  change: updateValue
	});	
	var animVal = 0;
	var myVar;
	myVar = setInterval(increaseVal, 10);
	function increaseVal(){
		if(animVal<57){
			$( "#slider" ).slider({
				value:animVal
			});
			var Maxval1 = 125;
			var reqAmt1 = Maxval1-animVal;
       		$(".requiredAmount").html("<span><img src='images/Info.png'/>You need $"+reqAmt1+" more to reach your target</span>");
			animVal++;
		}else{
			clearInterval(myVar);
		}
	}
});