var scrollTop = $(window).scrollTop();

$(window).scroll(function() {
   if( $('.container').width() > 940) {
        if ((scrollTop > 0) && (scrollTop < 700)) {
            let transformX = scrollTop * 0.12
            let transformY = scrollTop * 0.07
            $('.first-cube').css('transform', 'translate(-' + transformX + 'px,' + transformY +'px)')
        }
        if ((scrollTop > 400) && (scrollTop < 950)) {
            let transformX = scrollTop * 0.04
            $('.second-cube').css('transform', 'translate(' + transformX + 'px, 0px)')
        }
        if ((scrollTop > 1200) && (scrollTop < 1800)) {
            let transformX = scrollTop * 0.02
            let transformY = scrollTop * 0.01
            $('.third-cube').css('transform', 'translate(-' + transformX + 'px,' + transformY +'px)')
        }
   }
   else {
        if ((scrollTop > 0) && (scrollTop < 250)) {
            let transformX = scrollTop * 0.2
            let transformY = scrollTop * 0.15
            $('.first-cube').css('transform', 'translate(-' + transformX + 'px,' + transformY +'px)')
        }
        if ((scrollTop > 150) && (scrollTop < 450)) {
            let transformX = scrollTop * 0.1
            $('.second-cube').css('transform', 'translate(' + transformX + 'px, 0px)')
        }
        if ((scrollTop > 500) && (scrollTop < 900)) {
            let transformX = scrollTop * 0.07
            let transformY = scrollTop * 0.04
            $('.third-cube').css('transform', 'translate(-' + transformX + 'px,' + transformY +'px)')
        }
   }
    
    if($(window).scrollTop() > scrollTop){
        // console.log("Down");
        scrollTop = $(window).scrollTop();
    } else{
        // console.log("Up");
        scrollTop = $(window).scrollTop();
    }
});
