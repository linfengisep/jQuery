$(function(){
        var title = $('h1');
        $("ul li").hide();
    
        title.on("click",function(e){
            $("h1.title #click-indice").hide();
            $("li").first().show();
            $("ul").on('click','li',function(e){
                console.log($(this).index());
                var indexItem = $(this).index();
                if(indexItem < $("li").length){
                    $("li").eq(indexItem+1).show();
                }
                if(indexItem+1 === $("li").length){
                    $('body').css("background-image","url('https://anniversaire-en-or.com/app/uploads/2019/08/jeu-anniversaire-pirate-fee-chasse-au-tresor.jpg')");
                }
            })
        });
})
