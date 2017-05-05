$(function () {
    $('nav a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


});

$(funtion() {
    寫入程式碼
})
$() 包住funtion - > 啟動
