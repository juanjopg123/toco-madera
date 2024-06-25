jQuery(document).ready(function($){
    window.vrcntlg = 0;
    $(".crearcuenta").click(function(){
        if(window.vrcntlg == 0){
            $("#login").slideUp();
            $("#registro").slideDown();
            $(".crearcuenta").html("Ya tienes una cuenta? Inicia sesión.");
            window.vrcntlg = 1;
        }else{
            $("#registro").slideUp();
            $("#login").slideDown();
            $(".crearcuenta").html("Aún no tienes una cuenta? Registrate.");
            window.vrcntlg = 0;
        }
    });
});