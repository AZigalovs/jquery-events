$(document).ready(function() {
 
    
    $("#button_effects1").click(function(){
        $("#par1").toggle(1000);
    });

    $("#button_effects2").click(function(){
        $("#par2").toggle(1000);
    });

    $("#button_effects3").click(function(){
        $("#par3").toggle(1000);
    });

    $("#button_effects4").click(function(){
        $("#par4").slideToggle(1000);
    });

    $("#button_effects5").click(function(){
        $("#par5").slideToggle(1000);
    });

    $("p").click(function(){
        $("p").css("color", "red");
    });

    $("h2").hover(function(){
        $("h2").css("color", "lightblue");
    });

 	$("#hr_html").hover(function() {
 		$("#hr_mysql").removeClass('h2_font_size');
		$("#hr_python").removeClass('h2_font_size');
        $("#hr_jquery").removeClass('h2_font_size');
        $("hr_django").removeClass('h2_font_size');
        $("#hr_css").removeClass('h2_font_size');
        $("#hr_mysql").removeClass('h2_font_size');
	  	$("#hr_html").addClass('h2_font_size');
    });
    
	$("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

     $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    $(".bottom_button").mouseleave(function(){
        $("body").css("background-color", "#eee");
    });


}); 