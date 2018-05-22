$(document).ready(
	function() {
        var produtos = [{   img:'ambula.png',   titulo:'Âmbula',    preco:'616.00',     texto:'Também chamada de cibório ou píxide; é utilizada para a conservação e distribuição das hóstias consagradas aos fiéis'},
                          { img:'calice.png',   titulo:'Cálice',    preco:'480.00',     texto:'Recipiente onde se consagra o vinho durante a missa'},
                          { img:'patena.png',   titulo:'Patena',    preco:'360.00',     texto:'Lâmina de metal um pouco convexa, onde é colocada a hóstia para a consagração'},
                          { img:'galheta.jpg',  titulo:'Galheta',   preco:'399.00',     texto:'Dois recipientes para a colocação da água e do vinho, para a celebração da missa'},
                          { img:'alfaias.jpg',  titulo:'Alfaias',   preco:'132.00',     texto:'Kit contendo Corporal, Sanguíneo e Pala. Usadas nas celebraçoes litúrgicas'},
                          { img:'turibulo.jpg', titulo:'Turibulo',  preco:'3599.00',    texto:'Vaso utilizado nas incensações durante a celebração. Nele se colocam brasas e o incenso.'},
                          { img:'naveta.png',   titulo:'Naveta',    preco:'209.00',     texto:'Pequeno vaso onde se transporta o incenso nas celebrações litúrgicas.'},
                          { img:'casula.jpg',   titulo:'Casula',    preco:'1699.00',    texto:'Veste própria do sacerdote que preside a celebração. Espécie de manto que se veste sobre a alva e a estola.'},
                          { img:'estola.jpg',   titulo:'Estola',    preco:'215.00',     texto:'Veste litúrgica dos ministros ordenados. O bispo e o presbítero a colocam sobre os ombros de modo que caia pela frente em'+                                                                       'forma de duas tiras, acompanham o comprimento da alva ou túnica.'},
                          { img:'alva.jpg',     titulo:'Alva',      preco:'399.00',     texto:'Veste longa, de cor branca ou neutra, comum aos ministros de qualquer grau.'},
                          { img:'batina.jpg',   titulo:'Batina',    preco:'620.00',     texto:'Hábito eclesiástico usado por sacerdotes no dia a dia. Também usado por Acólitos durante a Missa'},
                          { img:'cingulo.jpg',  titulo:'Cíngulo',   preco:'178.00',     texto:'Cordão com o qual se prende a alva ao redor ou acima da cintura.'}];
        
        console.log(produtos.length);
   
        
        var tbody = $('.marketing');
        for (var i = 0; i < produtos.length; i++) {
                
            var tr = $('.row').appendTo(tbody);
            tr.append('<div class="col-lg-3"> <img class="rounded-circle" src="../imagens/' +produtos[i].img+ '" alt="Generic placeholder image" width="140" height="140">'+
                        '<h2>' +produtos[i].titulo+ '</h2>'+
                        '<p>' +produtos[i].texto+ '</p>'+
                        '<p><a class="btn btn-secondary " data-toggle="modal"  href="#myModal" id="'+i+'" role="button">Ver detalhes &raquo </a></p>'+
                        '</div>');       
        }
            
    
        $(".btn").click (
            function(item) {
                var a;
                if(this.id != 'btnFechar' && this.id != 'btnComprar' && this.id != 'btnEnviar' && this.id != 'btnLimpar'){
                    $(".modal-title").html('<img class="rounded-circle" src="../imagens/'+produtos[this.id].img+'" image" width="240" height="240" >');
                    $(".modal-body").html('<strong>'+produtos[this.id].titulo+'</strong><br>'+produtos[this.id].texto+'<br><br> Preço R$: '+produtos[this.id].preco+'<br><br>'+
                                            '<div class="col-xs-offset-3 col-xs-offset-3">'+
                                                '<div class="btn-group number-spinner" >'+
                                                    '<span class="input-prepend data-dwn">'+
                                                        '<button class="btn btn-default" data-dir="dwn" id="'+this.id+'"><i class="fa fa-minus"></i></button>'+
                                                    '</span>'+
                                                    '<input type="text" id="texto" class="form-control input-box text-center" value="1" min="1" max="180" style="max-width:100px;">'+
                                                    '<span class="input-append data-up">'+
                                                        '<button class="btn btn-default" data-dir="up" id="'+this.id+'"><i class="fa fa-plus"></i></button>'+
                                                    '</span>'+
                                                '</div>'+
                                                '<br><br><label id="total" <strong>Total: R$ </strong>'+produtos[this.id].preco);  
                    


                    var action;
                    $(".number-spinner button").mousedown(function () {
                        var a = produtos[this.id].preco;
                        btn = $(this);
                        input = btn.closest('.number-spinner').find('input');
                        btn.closest('.number-spinner').find('button').prop("disabled", false);

                        if (btn.attr('data-dir') == 'up') {
                            action = setInterval(function(){
                            if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                                input.val(parseInt(input.val())+1);
                                calcula = input.val()*a;
                                console.log(a);
                                $("#total").html('<strong>Total: R$ '+calcula+'</strong>');
                            }else{
                                 btn.prop("disabled", true);
                                clearInterval(action);
                                }
                            }, 50);
                            
                            } else {
                                action = setInterval(function(){
                                    if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                                        input.val(parseInt(input.val())-1);
                                         a = input.val()*b;
                                        console.log(a);
                                        $("#total").html('<strong>Total: R$ '+calcula+'</strong>');
                                    }else{
                                        btn.prop("disabled", true);
                                        clearInterval(action);
                                    }
                                }, 50);
                            }
                        })
                        .mouseup(function(){
                            clearInterval(action);
                        });                                 
                }
            });
        
        $("#btnComprar").click(
            function(){
                window.confirm("Item comprado com sucesso !");
            }
        ); 
});