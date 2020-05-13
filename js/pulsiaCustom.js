jQuery(document).ready(function($){
		
	$("div#block-views-block-boton-burguer-svg-block-1").click(function () {
		$(".ps-sidebar-grid").toggleClass("ps-showsidebar");
	});
	
	$("div#block-views-block-boton-cerrar-o-cancel-svg-block-1").click(function () {
		$(".ps-sidebar-grid").toggleClass("ps-showsidebar");
	});
	
	/*OBETENEMOS EL VALOR DEL INPUT Y EJECUTAMOS EL BOTON VER MIS TARIFAS*/

	$("div#block-views-block-tarifas-y-promociones-a-tu-medida-block-2-block-1").find(".view-content .views-row:nth-child(4)").click(function () {
		openURLTarifas();
	});

	$("div#block-views-block-disponibilidad-y-ofertas-formulario-block-3").find(".view-content .views-row:nth-child(2)").click(function () {
		openURLTarifas();
	});	

	function openURLTarifas(){
		var codigopostal = $("input[name='cp']").val();

		if(codigopostal.length > 4){
			var urlopen = 'tarifas-por-poblacion?cp=' + codigopostal;
			window.open(urlopen, '_self');
			console.log(codigopostal);
		}else{
			//Pintar un label para decir que se requiere un cp? #todo
		}
	}

	/* OBTENGO EL DATO CP DE URL Y LO SE PASO A LA CLASE .csc-cp-tar */
	/*FUNCION GET PARAMETROS URL*/
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;
	
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
	
			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
	};

	if (window.location.href.indexOf("tarifas-por-poblacion") > -1) {
		var cp_tar = getUrlParameter('cp');
		$("div#block-views-block-promociones-radio-block-1").find(".csc-cp-tar").text(cp_tar);
		$("input#edit-codigo-postal").val(cp_tar);
	}

	
	/*Mandar por URL el valor dataTid obtenido del form */
	var urlopen = "contratar?";

	$(".csc-contratar").click(function () {
		$(this).parent().find(".csc-itemsExtras").each(function( index ) {
			if( $(this).find('.fifth-col:checked').length ){
				var termid = $(this).find('.fifth-col').attr("dataTid");
				urlopen = urlopen + 'tid=' + termid + '&';
			}
		});;

		window.open(urlopen, '_self');
	});

	// $("div#block-views-block-promociones-radio-block-1").find(".csc-itemsExtras").each(function( index ) {
	// 	$("input[dataTid]").val();
	// 	console.log( index + ": " + $( this ).text() );
	// });;


});
