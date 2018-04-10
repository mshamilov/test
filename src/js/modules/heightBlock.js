
let heightPricing, widthPricing, maxWidth = 0

$('.pricing-el').each(function(i, el){
    widthPricing = $(el).width()
    if (maxWidth < widthPricing) {
        maxWidth = widthPricing
    }
})

$('.pricing-el').height(maxWidth)

