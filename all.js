$(function () {
    $('.menu').click(function () {
        $('.open').toggleClass('close');
        $('.closure').toggleClass('close');
        $('.header_list').toggleClass('active');
    });
});