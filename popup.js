$(document).ready(function(){
    $('#try').click(function(){
        $('#trial').css("display","block");
    });

    $('.popupclose').click(function(){
        $('#trial').css("display","none")
    });
});