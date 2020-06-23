// Colapsar menu - despues de click en menu hamburguesa
$(document).ready(function(){
    $(".cerrarMenu").click(function () {
        $('.navbar-toggle').click();
    });
});

//MOSTRAR INFO CASAS
$(document).ready(function(){
    $("#tx_roboto_regular_20_azul_xs_01").click(function(){
        $("#contenido-casa-xs-01").css("display", "block");
        $("#contenido-casa-xs-02").css("display", "none");
        $("#contenido-casa-xs-03").css("display", "none");

        $("#tx_roboto_regular_20_azul_xs_01").css("display", "none");
        $("#tx_roboto_regular_20_azul_xs_02").css("display", "block");
        $("#tx_roboto_regular_20_azul_xs_03").css("display", "block");
    });
});

$(document).ready(function(){
    $("#tx_roboto_regular_20_azul_xs_02").click(function(){
        $("#contenido-casa-xs-02").css("display", "block");
        $("#contenido-casa-xs-01").css("display", "none");
        $("#contenido-casa-xs-03").css("display", "none");

        $("#tx_roboto_regular_20_azul_xs_02").css("display", "none");
        $("#tx_roboto_regular_20_azul_xs_01").css("display", "block");
        $("#tx_roboto_regular_20_azul_xs_03").css("display", "block");
    });
});

$(document).ready(function(){
    $("#tx_roboto_regular_20_azul_xs_03").click(function(){
        $("#contenido-casa-xs-03").css("display", "block");
        $("#contenido-casa-xs-01").css("display", "none");
        $("#contenido-casa-xs-02").css("display", "none");

        $("#tx_roboto_regular_20_azul_xs_03").css("display", "none");
        $("#tx_roboto_regular_20_azul_xs_01").css("display", "block");
        $("#tx_roboto_regular_20_azul_xs_02").css("display", "block");
    });
});


/*FUNCION COLAPSAR NAVEGACION CASAS MOVIl*/
$(document).ready(function(){
    $("#contenido-casa-xs-01").click(function(){
        $("#contenido-casa-xs-01").css("display", "none");
        $("#tx_roboto_regular_20_azul_xs_01").css("display", "block");
    });
});

$(document).ready(function(){
    $("#contenido-casa-xs-02").click(function(){
        $("#contenido-casa-xs-02").css("display", "none");
        $("#tx_roboto_regular_20_azul_xs_02").css("display", "block");
    });
});

$(document).ready(function(){
    $("#contenido-casa-xs-03").click(function(){
        $("#contenido-casa-xs-03").css("display", "none");
        $("#tx_roboto_regular_20_azul_xs_03").css("display", "block");
    });
});


/*BOTONES DE DESCARGA*/
$(document).ready(function(){
    $("#presentacion_xs").click(function(){
        $("#tipo_casa").attr("value", "");
        $("#tipo_casa").attr("value", "Presentacion Movil - Pantalla Inicial");
    });
});

$(document).ready(function(){
    $("#presentacion_general_PC").click(function(){
        $("#tipo_casa").attr("value", "");
        $("#tipo_casa").attr("value", "Presentacion PC - Pantalla Inicial");
    });
});

$(document).ready(function(){
    $("#presentacion_01_PC").click(function(){
        $("#tipo_casa").attr("value", "");
        $("#tipo_casa").attr("value", "Presentacion Casa 01 - 3 Habitaciones");
    });
});

$(document).ready(function(){
    $("#presentacion_02_PC").click(function(){
        $("#tipo_casa").attr("value", "");
        $("#tipo_casa").attr("value", "Presentacion Casa 02 - 4 Habitaciones");
    });
});

$(document).ready(function(){
    $("#presentacion_03_PC").click(function(){
        $("#tipo_casa").attr("value", "");
        $("#tipo_casa").attr("value", "Presentacion Casa 03 - 5 Habitaciones");
    });
});

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO PAGINA INICIO PC
$("#contactForm").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_check = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form = 1;
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones(true, "");
        valido_check = 1;
    }

    if ((valido_form)&&(valido_check) === 1) {
        submitForm();
        submitMSG(true, "");
    }

    else {
        event.preventDefault();
        submitMSG(false, "Complete los campos que faltan");
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var tipo_casa = $("#tipo_casa").val();
    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();

    $.ajax({
        type: "POST",
        url: "php/process_casas_campestres.php",
        data: "tipo_casa=" + tipo_casa + "&first_name=" + first_name + "&telephone=" + telephone + "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_popUp.html";
            } else {
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);
}
