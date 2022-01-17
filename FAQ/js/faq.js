$(document).ready(function () {
    $('.block-item').click(function (event) {
        $('.block-title, .block-social-icon, .block-text, .number').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.block-item-two').click(function (event) {
        $('.block-title-two, .block-social-icon-two, .block-text-two, .number-two').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.block-item-three').click(function (event) {
        $('.block-title-three, .block-social-icon-three, .block-text-three, .number-three').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.block-item-four').click(function (event) {
        $('.block-title-four, .block-social-icon-four, .block-text-four, .number-four').toggleClass('active');
        $('body').toggleClass('lock');
    });
});