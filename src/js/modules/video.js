let getIdYoutube, addImg, getIdYoutubeModal, iframe

const mathVideoHeight = () => {
    let widthVideo, heightVideo, widthVideoMobile, heightVideoMobile
    widthVideo = $('.dd-video').width();
    heightVideo = (9 * widthVideo) / 16;
    $('.dd-video').height(heightVideo);
    widthVideoMobile = $('.video-mobile').width();
    heightVideoMobile = (9 * widthVideoMobile) / 16;
    $('.video-mobile').height(heightVideoMobile)
}

const createPoster = (posterYoutube, el) => {
    let addImg
    addImg = "<img src='https://img.youtube.com/vi/" + posterYoutube + "/mqdefault.jpg' alt='videoPoster'>";
    $(el).attr('href', 'https://www.youtube.com/watch?v=' + posterYoutube)
    $(el).find('.video-el_img').html(addImg);
}

const renderModal = (modalId) => {
    let iframe
    $('.ed-modal').addClass('active')
    iframe = "<iframe src='https://www.youtube.com/embed/" + modalId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>"
    $('#video').html(iframe)
}

const closeModal = () => {
    $('.ed-modal').removeClass('active')
    $('#video').html('')
}

const mobileVideo = () => {
    let desctopVideo = $('.dd-video').html()
    if ($('.container').width() <= 720) {
        $('.video-mobile').html(desctopVideo)
    }
}

$('.video-el').each((i, el) => {
    let getIdYoutube = $(el).find('.youtube-id').html();
    createPoster(getIdYoutube, el)
})


$('.video-el').on('click', function(e) {
    e.preventDefault();
    let getIdYoutubeModal = $(this).find('.youtube-id').text();
    renderModal(getIdYoutubeModal)
    $('body').addClass('hidden')
})

$('.modal-overlay, #closeModal').on('click', () => {
    closeModal();
    $('body').removeClass('hidden')
})

mathVideoHeight();
mobileVideo();

$(window).resize(() => {
    mathVideoHeight();
})