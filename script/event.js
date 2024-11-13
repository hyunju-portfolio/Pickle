$(function () {
    $('.tap li:nth-child(1) a').click(function () {
        $('.box1_in > dl').show();
        $('.tap li a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    $('.tap li:nth-child(2) a').click(function () {
        $('.box1_in > dl').hide();
        $('.ing').show();
        $('.tap li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.tap li:nth-child(3) a').click(function () {
        $('.box1_in > dl').hide();
        $('.ad').show();
        $('.tap li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.tap li:nth-child(4) a').click(function () {
        $('.box1_in > dl').hide();
        $('.end').show();
        $('.tap li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
});