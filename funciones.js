$(document).ready(function() {
    $("#b1").click(function(){
        var etiqueta = $("#form").val();
        console.log(etiqueta);
        $(etiqueta).fadeToggle(5000);
    })
    $("#b2").click(function(){
        $("nav").fadeOut(3000);
        $("#rectangulo").slideUp(3000);
        $("#arreglo").animate({
            marginLeft : "100%"
        });
    })
    $("#b3").click(function(){
        $("nav").fadeIn(3000);
        $("#rectangulo").slideDown(3000);
        $("#arreglo").animate({
            marginLeft : "0%"
        });
    })
})