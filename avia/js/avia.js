$(document).ready(function () {
    $('.block-item').click(function (event) {
        $('.block-title, .block-social-icon, .block-text').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.block-item-two').click(function (event) {
        $('.block-title-two, .block-social-icon-two, .block-text-two').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.block-item-three').click(function (event) {
        $('.block-title-three, .block-social-icon-three, .block-text-three').toggleClass('active');
        $('body').toggleClass('lock');
    });
});