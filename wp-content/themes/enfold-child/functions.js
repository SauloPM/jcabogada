jQuery(document).ready(function($) {

	// ────────────────────────── //
	//     ÁREAS DE ACTUACIÓN     //
	// ────────────────────────── //

	// Apertura de modal
	$("#areas .iconbox").click(function () {
		
		var target = $(this).find("h3").text().toLowerCase().replace(/ /g, "-");
		
		$(".modal[data-tipo='" + target + "']").addClass("active").css({"opacity" : "1", "position" : "relative"});
		$("html, body").css("overflow", "hidden");

		$("#header").fadeOut(250);

		setTimeout(function() {
			$("#modales").fadeIn(250);
		}, 250);

	});

	// Cierre de modal
	$("#modales .cerrar-modal").click(function () {
		
		$("#header").fadeIn(250);
		
		setTimeout(function() {
			$("#modales").fadeOut(250);
		}, 250);
		
		setTimeout(function() {
			$("#modales .active").removeClass("active").css({"opacity" : "0", "position" : "absolute"});
			$("html, body").css("overflow", "visible");
		}, 500);

	});

	// ──────────────── //
    //     CONTACTO     //
    // ──────────────── //

    // Aceptar la política de privacidad
    $( document ).on( 'click', '#contacto .check', function() {

        var checkbox = $( this );
        var boton    = $( '#contacto .wpcf7-submit' );

        if ( checkbox.hasClass( 'checked' ) ) {
            boton.removeClass( 'checked' );
            checkbox.removeClass( 'checked' );
        } else {
            boton.addClass( 'checked' );
            checkbox.addClass( 'checked' );
        }
    });

    // Hacer clic en el botón sin haber aceptado la política de privacidad
    $( document ).on( 'click', '#contacto .wpcf7-submit', function( event ) {

        var boton    = $( this );
        var checkbox = $( '#contacto .check' );

        if ( !checkbox.hasClass( 'checked' ) ) {
            event.preventDefault();
        }
    });
});