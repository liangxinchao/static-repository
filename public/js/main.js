$(function(){
    /*轮播图切换设置*/
    jQuery('.tp-banner').revolution({
        delay:8000,
        startwidth:994,
        startheight:666,
        hideThumbs:10,
        fullWidth:"on",
        forceFullWidth:"on",
        navigationType:"bullet",
        soloArrowRightHOffset:10,
        soloArrowLeftHOffset:10,
        onHoverStop:"off",
        touchenabled:"on"
    });
    /*导航设置*/
    $('.navbar-nav li .active').parents('li').css("border-bottom","4px solid #f5ab35");
    $('.navbar-nav li').click(function(){
        $(this).parents('.collapse').removeClass('in');
    })

    /**服务效果**/
    var aa = $('.ser-box .work-post .old');
    aa.hover(function(){
        $('.ser-box .work-post .new').removeClass('active');
        $(this).next().addClass('active');
    })

    /**案例切换**/
        var city = $('.city-container li a'),
            text = $('.text-container .text-post');
        for(var i = 0, ilen = city.length; i < ilen; i++){
            city[i].index = i;
            city[i].onclick = function(){
                $('.text-post-1 ul li a').removeClass('on');
                $('.text-post-1 ul li:first').find('a').addClass('on');
                $('.text-post-1 section p').removeClass('show');
                $('.text-post-1 section p:first').addClass('show');
                city.removeClass('on');
                $(this).addClass('on');
                city.find('.icon').addClass('hide');
                $(this).find('.icon').removeClass('hide');
                text.removeClass('active');
                $(text[this.index]).addClass('active');
            }
        }
        /*杭州切换*/
        var park = $('.text-post-1 ul li a'),
            part = $('.text-post-1 section p');
        for(var i = 0, ilen = park.length; i < ilen; i++){
            park[i].index = i;
            park[i].onclick = function(){
                park.removeClass('on');
                $(this).addClass('on');
                part.removeClass('show');
                $(part[this.index]).addClass('show');
            }
        }

    /*视频切换*/
    var page = 1;
    var num = 3;
    $('.video-box .next').click(function(){
        var $parent = $(this).parents("div.video-box");
        var $v_show = $parent.find("ul");
        var $v_content = $parent.find("div.video-name");
        var v_height = $v_content.height();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / num) ;
        if(!$v_show.is(":animated")){
            if(page == page_count){
                // $v_show.animate({ top : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                // page = 1;
                return false;
            }else{
                $v_show.animate({ top : '-='+v_height }, "slow");
                page++;
            }
        }
    })

    $('.video-box .prev').click(function(){
        var $parent = $(this).parents("div.video-box");
        var $v_show = $parent.find("ul");
        var $v_content = $parent.find("div.video-name");
        var v_height = $v_content.height();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / num) ;
        if(!$v_show.is(":animated")){
            if( page == 1 ){
                // $v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
                // page = page_count;
                return false;
            }else{
                $v_show.animate({ top : '+='+v_height }, "slow");
                page--;
            }
        }
    })

    var item = $('.video-name .item'),
        video = $('.video-list video');
    for(var i = 0, ilen = item.length; i < ilen; i++){
        item[i].index = i;
        item[i].onclick = function(){
            item.find('img.post').removeClass('show').addClass('hide');
            $(this).find('img.post').addClass('show').removeClass('hide');
            for(var j = 0, jlen = video.length; j < jlen; j++){
                video[j].className="hide";
                video[j].pause();
            }
            video[this.index].className="show";
            video[this.index].play();
        }
    }
})