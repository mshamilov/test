// functions
const actionMenu = (list, item) => {
    $(list).css('transition', 'transform 1s');
    let getCountMenu =  $('.menu-item a').length
    if ($('.container').width() < 543) {
        $('body').toggleClass('hidden')
        if ($(list).hasClass('active')) {
            mathDelayAnimationMenuRevers(getCountMenu)
        }
        else {
            mathDelayAnimationMenu(getCountMenu)
        }
    }
    if (($('.container').width() >= 544) && ($('.container').width() < 720)) {
        $('.menu-list-wrap').slideToggle(1200)
        $('body').toggleClass('hidden')
    }
    $(list).toggleClass('active')
    $(item).toggleClass('active')
}

const mathTransform = () => {
    let widthActiveLink = $('.menu-item.current-menu-item').outerWidth();
    let widthMenuList = $('.menu-list').outerWidth();
    let checkTransform = widthMenuList - widthActiveLink;
    $('.menu-list').css('transform', 'translateX(' + checkTransform + 'px)');
}


const mathHeightMenuMobile = (count) => {
    let heightMenu, getCountMenu, getColMenu, heightElementMenu = 0
    heightMenu = $('.menu-list-wrap').outerHeight()
    getColMenu = Math.round(count / 2)
    heightElementMenu = heightMenu / getColMenu
    $('.menu-item a').outerHeight(heightElementMenu)
}

const mathHeightMenuMobileHorisontal = (count) => {
    let heightMenu, getCountMenu, getColMenu, heightElementMenu = 0
    heightMenu = $('.menu-list-wrap').outerHeight()
    getColMenu = Math.round(count / 4)
    heightElementMenu = heightMenu / getColMenu
    $('.menu-item a').outerHeight(heightElementMenu)
}

const mathDelayAnimationMenu = (count) => {
    let delay = 0
    let arrElementMenu = []
    $('.menu-item').each((i, el) => {
        arrElementMenu.push($(el))
    });
    for (let i = 0; i < count; i+=2) {
        let j = i + 1;
        delay = delay + 0.2;
        arrElementMenu[i].css('transition-delay', delay + 's');
        arrElementMenu[j].css('transition-delay', delay + 's');
    };
}

const mathDelayAnimationMenuRevers = (count) => {
    let arrElementMenu = []
    let maxDelay = (count / 2) * 0.2
    console.log(maxDelay)
    $('.menu-item.active').each((i, el) => {
        arrElementMenu.push($(el))
    });
    
    for (let i = 0; i < count; i+=2) {
        let j = i + 1;
        maxDelay = maxDelay - 0.2;
        arrElementMenu[i].css('transition-delay', maxDelay + 's');
        arrElementMenu[j].css('transition-delay', maxDelay + 's');
    };
}

const addDisabled = (el) => {
    let getCountMenu =  $('.menu-item a').length
    let time = (getCountMenu / 2) * 200 + 400
    if ($('.container').width() < 543) {
        $(el).addClass('disabled')
        setTimeout(() => {
            $(el).removeClass('disabled')
        }, time);
    }

}

const addActive = (el, list) => {
    let getCountMenu =  $('.menu-item a').length
    let time = (getCountMenu / 2) * 200 + 400
    if ($(list).hasClass('active')) {
        setTimeout(() => {
            $(el).removeClass('active')
        }, time);
    }
    else {
        $(el).addClass('active')
    }
}


// init functions



$('.menu-box').on('click', () => {
    addActive('.menu-list-wrap', '.menu-list')
    actionMenu('.menu-list', '.menu-item');
    addDisabled('.menu-box');
})

$(document).ready(() => {
    mathTransform();
    if ($('.container').width() < 543) {
        let getCountMenu =  $('.menu-item a').length
        mathHeightMenuMobile(getCountMenu)
    }
    if (($('.container').width() >= 544) && ($('.container').width() < 720)) {
        let getCountMenu =  $('.menu-item a').length
        mathHeightMenuMobileHorisontal(getCountMenu)
    }
})


$(window).resize(() => {
    mathTransform();
    if ($('.container').width() < 543) {
        let getCountMenu =  $('.menu-item a').length
        mathHeightMenuMobile(getCountMenu)
    }
    if (($('.container').width() >= 544) && ($('.container').width() < 720)) {
        let getCountMenu =  $('.menu-item a').length
        mathHeightMenuMobileHorisontal(getCountMenu)
    }
})