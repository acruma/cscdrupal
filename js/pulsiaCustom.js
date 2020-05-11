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
			//Pintar un label para decir que se requiere un cp?
		}
	}
});
