$(document).ready(function(){

/* For eye icon action */    
    $('#eye').click(function(){
        if ($("#eye").hasClass("fa fa-eye-slash")) {  //check the class
            $("#eye").removeClass( "fa fa-eye-slash" ).addClass( "fa fa-eye" );
        }else if($("#eye").hasClass("fa fa-eye")){
            $("#eye").removeClass( "fa fa-eye " ).addClass( "fa fa-eye-slash" );
        }

        var input =$("#password");
        if(input.attr("type") == "text"){
            input.attr("type","password");
        }else {
            input.attr("type","text");
        }
    });

/* For visible and hide eye icon */
    $('#pass').click(function(){
        $('#eye').css("display","inline-block");
    });
    $('#pass').click(function(event){
            $('html').one('click',function(){
                $('#eye').css("display","none");
            });
            event.stopPropagation();
    });

/* For action when login button was clicked */
    $('#login').click(function(){
        var username = $('#usename').val();
        var password =$('#password').val();
        var account = $('account').val();
// check 
$.post("login.php",{ email1: email, password1:password},function(data){
            if(data=='Email or Password is wrong...!!!!'){
            $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
            alert(data);
            } else if(data=='Successfully Logged in...'){
            $("form")[0].reset();
            $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
            alert(data);
            } else{
            alert(data);
        }
    });
    });

});