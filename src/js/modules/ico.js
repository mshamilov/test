let mathProgress = () => {
    let full, part, total
    $('.progress-data').each((i, el) => {
        full = $(el).attr('data-full')
        part = $(el).attr('data-part')
        total = (part * 100) / full
        $(el).find('.data-part').css('width', total + '%')
    })
}

$(document).ready(function() {
    mathProgress();
})