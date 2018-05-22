jQuery(document).ready(
    function() {

        $("#btnEnviar").click (
            function() {
                window.confirm("Enviado com sucesso");
            }
        );
        
        $("#btnLimpar").click(
            function(){
                $("#nome").html(" ");
                $("#email").html(" ");
                $("#mensagem").html(" ");
            }
        )

});
