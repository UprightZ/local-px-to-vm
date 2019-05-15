/* global $ Swiper */
/* eslint semi: 0 */
$(() => {
    // 轮播图
    const swiperContainer = $('.swiper-container')
    const swiperViewerContainer = $('.swiper-viewer')
    const mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        speed: 10,
        loop: true,
        swipeToPrev: false,
        swipeToNext: false,
        onSlideChangeEnd: (swiper) => {
            if (swiper.activeIndex === swiper.slides.length - 1) {
                $('.thumb').eq(0).addClass('active').siblings()
                    .removeClass('active')
                swiperViewerContainer.children().eq(0).css('zIndex', 1).siblings()
                    .css('zIndex', 0)
                return
            }
            $('.thumb').eq(swiper.activeIndex - 1).addClass('active').siblings()
                .removeClass('active')
            swiperViewerContainer.children().eq(swiper.activeIndex - 1).css('zIndex', 1).siblings()
                .css('zIndex', 0)
        },
    })
})
