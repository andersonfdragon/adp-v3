// Colapsar menu - despues de click en menu hamburguesa
$(document).ready(function(){
    $(".cerrarMenu").click(function () {
        $('.navbar-toggle').click();
    });
});


$(document).ready(function(){
    $("#img_01_xs").click(function(){
     	$("#02_xs").removeClass("active");
     	$("#03_xs").removeClass("active");
     	$("#04_xs").removeClass("active");
        $("#01_xs").addClass("active");

     	$("#indicador_02").removeClass("active");
     	$("#indicador_03").removeClass("active");
     	$("#indicador_04").removeClass("active");
        $("#indicador_01").addClass("active");
    });
});


$(document).ready(function(){
    $("#img_02_xs").click(function(){
     	$("#01_xs").removeClass("active");
     	$("#03_xs").removeClass("active");
     	$("#04_xs").removeClass("active");
        $("#02_xs").addClass("active");

     	$("#indicador_01").removeClass("active");
     	$("#indicador_03").removeClass("active");
     	$("#indicador_04").removeClass("active");
        $("#indicador_02").addClass("active");
    });
});

$(document).ready(function(){
    $("#img_03_xs").click(function(){
     	$("#01_xs").removeClass("active");
     	$("#02_xs").removeClass("active");
     	$("#04_xs").removeClass("active");
        $("#03_xs").addClass("active");

     	$("#indicador_01").removeClass("active");
     	$("#indicador_02").removeClass("active");
     	$("#indicador_04").removeClass("active");
        $("#indicador_03").addClass("active");
    });
});

$(document).ready(function(){
    $("#img_04_xs").click(function(){
     	$("#01_xs").removeClass("active");
     	$("#02_xs").removeClass("active");
     	$("#03_xs").removeClass("active");
        $("#04_xs").addClass("active");

     	$("#indicador_01").removeClass("active");
     	$("#indicador_02").removeClass("active");
     	$("#indicador_03").removeClass("active");
        $("#indicador_04").addClass("active");
    });
});



//PC
$(document).ready(function(){
    $("#img_01_pc").click(function(){
        $("#02_pc").removeClass("active");
        $("#03_pc").removeClass("active");
        $("#04_pc").removeClass("active")
        $("#05_pc").removeClass("active")
        $("#06_pc").removeClass("active")
        $("#01_pc").addClass("active");

        $("#indicador_02_pc").removeClass("active");
        $("#indicador_03_pc").removeClass("active");
        $("#indicador_04_pc").removeClass("active");
        $("#indicador_05_pc").removeClass("active");
        $("#indicador_06_pc").removeClass("active");
        $("#indicador_01_pc").addClass("active");
    });
});


$(document).ready(function(){
    $("#img_02_pc").click(function(){
        $("#01_pc").removeClass("active");
        $("#03_pc").removeClass("active");
        $("#04_pc").removeClass("active");
        $("#05_pc").removeClass("active");
        $("#06_pc").removeClass("active");
        $("#02_pc").addClass("active");

        $("#indicador_01_pc").removeClass("active");
        $("#indicador_03_pc").removeClass("active");
        $("#indicador_04_pc").removeClass("active");
        $("#indicador_05_pc").removeClass("active");
        $("#indicador_06_pc").removeClass("active");
        $("#indicador_02_pc").addClass("active");
    });
});

$(document).ready(function(){
    $("#img_03_pc").click(function(){
        $("#01_pc").removeClass("active");
        $("#02_pc").removeClass("active");
        $("#04_pc").removeClass("active");
        $("#05_pc").removeClass("active");
        $("#06_pc").removeClass("active");
        $("#03_pc").addClass("active");

        $("#indicador_01_pc").removeClass("active");
        $("#indicador_02_pc").removeClass("active");
        $("#indicador_04_pc").removeClass("active");
        $("#indicador_05_pc").removeClass("active");
        $("#indicador_06_pc").removeClass("active");
        $("#indicador_03_pc").addClass("active");
    });
});

$(document).ready(function(){
    $("#img_04_pc").click(function(){
        $("#01_pc").removeClass("active");
        $("#02_pc").removeClass("active");
        $("#03_pc").removeClass("active");
        $("#05_pc").removeClass("active");
        $("#06_pc").removeClass("active");
        $("#04_pc").addClass("active");

        $("#indicador_01_pc").removeClass("active");
        $("#indicador_02_pc").removeClass("active");
        $("#indicador_03_pc").removeClass("active");
        $("#indicador_05_pc").removeClass("active");
        $("#indicador_06_pc").removeClass("active");
        $("#indicador_04_pc").addClass("active");
    });
});

$(document).ready(function(){
    $("#img_05_pc").click(function(){
        $("#01_pc").removeClass("active");
        $("#02_pc").removeClass("active");
        $("#03_pc").removeClass("active");
        $("#04_pc").removeClass("active");
        $("#06_pc").removeClass("active");
        $("#05_pc").addClass("active");

        $("#indicador_01_pc").removeClass("active");
        $("#indicador_02_pc").removeClass("active");
        $("#indicador_03_pc").removeClass("active");
        $("#indicador_04_pc").removeClass("active");
        $("#indicador_06_pc").removeClass("active");
        $("#indicador_05_pc").addClass("active");
    });
});

$(document).ready(function(){
    $("#img_06_pc").click(function(){
        $("#01_pc").removeClass("active");
        $("#02_pc").removeClass("active");
        $("#03_pc").removeClass("active");
        $("#04_pc").removeClass("active");
        $("#05_pc").removeClass("active");
        $("#06_pc").addClass("active");

        $("#indicador_01_pc").removeClass("active");
        $("#indicador_02_pc").removeClass("active");
        $("#indicador_03_pc").removeClass("active");
        $("#indicador_04_pc").removeClass("active");
        $("#indicador_05_pc").removeClass("active");
        $("#indicador_06_pc").addClass("active");
    });
});
