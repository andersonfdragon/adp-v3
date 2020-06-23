// Colapsar menu - despues de click en menu hamburguesa
$(document).ready(function(){
    $(".cerrarMenu").click(function () {
        $('.navbar-toggle').click();
    });
});


//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO XS
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
    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();

    $.ajax({
        type: "POST",
        url: "php/process_formulario_contacto_xs.php",
        data: "first_name=" + first_name + "&telephone=" + telephone + "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_contacto_xs.html";
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




//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC
$("#contactForm_02").validator().on("submit", function (event) {
    var valido_form_pc = 0;
    var valido_select_01_pc = 0;
    var valido_check_pc = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_02(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form_pc = 1;
    }

    //Opcion de visita
    if (!$('#visita_02').val() ){
        submitMSG_visita_02(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_visita_02(true, "");
        valido_select_01_pc = 1;
        //console.log(valido_select_01);
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones_02(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones_02(true, "");
        valido_check_pc = 1;
    }

    if ((valido_form_pc)&&(valido_select_01_pc)&&(valido_check_pc) === 1) {
        submitForm_02();
        submitMSG_02(true, "");
    }

    else {
        event.preventDefault();
        submitMSG_02(false, "Complete los campos que faltan");
    }
});

function submitForm_02(){
    // Initiate Variables With Form Content
    var first_name_02 = $("#first_name_02").val();
    var telephone_02 = $("#telephone_02").val();
    var email_02 = $("#email_02").val();
    var visita_02 = ($('select[id=visita_02]').val());

    $.ajax({
        type: "POST",
        url: "php/process_formulario_contacto_pc.php",
        data: "first_name_02=" + first_name_02 + "&telephone_02=" + telephone_02 + "&email_02=" + email_02 + "&visita_02=" + visita_02,
        success : function(text){
            if (text == "success"){
                formSuccess_02();
                window.location.href = "mensaje_enviado_contacto_pc.html";
            } else {
                submitMSG_02(false,text);
            }
        }
    });
}

function formSuccess_02(){
    $("#contactForm_02")[0].reset();
    submitMSG_02(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_02").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_02").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_visita_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_visita_02").removeClass().addClass(msgClasses).text(msg);
}
