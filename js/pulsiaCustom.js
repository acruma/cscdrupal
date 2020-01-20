jQuery(document).ready(function($){
		
	var maxHumedad = $('.ps-optimo-humedad-max').text();
	var maxHumedad = $.trim(maxHumedad);
	var maxHumedad = parseInt(maxHumedad);
	
	var minHumedad = $('.ps-optimo-humedad-min').text();
	var minHumedad = $.trim(minHumedad);
	var minHumedad = parseInt(minHumedad);
	
	var realHumedad = $('.ps-valor-humedad').text();
	var realHumedad = $.trim(realHumedad);
	var realHumedad = parseInt(realHumedad);
	
	
	if(realHumedad >= minHumedad && realHumedad <= maxHumedad){
		$('.ps-valor-humedad').after( "Correcto" );
	}else{
		$('.ps-valor-humedad').after( "Incorrecto" );
	}
	
});
