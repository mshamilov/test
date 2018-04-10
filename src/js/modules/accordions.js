const accordion = () => {
    $('.faq-title').on('click',function(e){
        e.preventDefault()
        $('.faq-desc').not($(this).next()).slideUp(500)
        $('.faq-title').not($(this)).removeClass('open')
        $(this).next().slideToggle(500)
        $(this).toggleClass('open')
    })
}

$(document).ready(() => {
    accordion();
})
