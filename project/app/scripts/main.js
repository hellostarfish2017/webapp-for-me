


//轮播动画
jQuery (document).ready (function ($) {
    var next=$('.next'),
        prev=$('.prev'),
        pagination=$('#pagination li a');

    pagination.click(function(e){
        e.preventDefault();
        var mythis=$(this);
        var thisid=$(this).attr('data-id');
        pagination.removeClass();
        mythis.addClass('pag_active');
        $('.active').removeClass();
        $('#carousel li[data-id="'+thisid+'"]').addClass('active');
    })

    next.click(function(e){
        console.log('a');
        e.preventDefault();
        var thisid=$('.active').attr('data-id');

        if(thisid=='2'){
            $('.active').removeClass();
            $('#carousel').find('li:first-child').addClass('active');

            pagination.removeClass('pag_active');
            $('#pagination li a[data-id="1"]').addClass('pag_active');
        }else{
            $('.active').removeClass().next().addClass('active');
            $('.pag_active').removeClass('pag_active').parent().next().find('a').addClass('pag_active');
        }
    })

    prev.click(function(e){
        console.log('b');
        e.preventDefault();
        var thisid=$('.active').attr('data-id');

        if(thisid=='1'){
            $('.active').removeClass();
            $('#carousel').find('li:last-child').addClass('active');

            pagination.removeClass('pag_active');
            $('#pagination li a[data-id="2"]').addClass('pag_active');
        }else{
            $('.active').removeClass().prev().addClass('active');
            $('.pag_active').removeClass('pag_active').parent().prev().find('a').addClass('pag_active');
        }
    })


})
