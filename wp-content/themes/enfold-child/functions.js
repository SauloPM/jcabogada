jQuery(document).ready(function($) {

	// ────────────────────────── //
	//     ÁREAS DE ACTUACIÓN     //
	// ────────────────────────── //

	// Apertura de modal
	$("#areas .iconbox").click(function () {
		var clase = ".modal-" + $(this).find("h3").text().toLowerCase().replace(/ /g, "-");
		$("#header").fadeOut();
		$("#modales").fadeIn();
		$(clase).addClass("active").css({"opacity" : "1", "position" : "relative"});
		$("html, body").css("overflow", "hidden");
	});

	// Cierre de modal
	$("#modales .cerrar-modal").click(function () {
		$("#header").fadeIn();
		$("#modales").fadeOut();
		$("#modales .active").removeClass("active").css({"opacity" : "0", "position" : "absolute"});
		$("html, body").css("overflow", "visible");
	});

	// ──────────────── //
	//     CONTACTO     //
	// ──────────────── //

	$("#contacto .button").click(function () {
		if (!$("#contacto .lopd input").prop("checked"))
			alert("Debe aceptar la Política de Privacidad");
	});

	// Eliminación del asterisco del placeholder
	var placeholder;
	var inputs = jQuery("#contacto input:not([type='submit'])");

	jQuery.each(inputs, function () {
		try {
			placeholder = jQuery(this).attr("placeholder");
			placeholder = placeholder.substring(0, placeholder.length - 1);
			jQuery(this).attr("placeholder", placeholder);
		}
		catch(ex) {
			// No hacemos nada
		}
	});

	try {
		placeholder = jQuery("#contacto textarea").attr("placeholder");
		placeholder = placeholder.substring(0, placeholder.length - 1);
		jQuery("#contacto textarea").attr("placeholder", placeholder);
	}
	catch(ex) {
		// No hacemos nada
	}
});