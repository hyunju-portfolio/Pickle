
// 숫자 올라가는 효과
$(function () {
    var executed1 = false;
    var executed2 = false;

    $('.box1_right_text2').css("color","#CDD56D").waypoint (function () {
        var targetNumber = $('.animate1').attr('data-rate');
        if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') 
            $('.animate1').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );


    // 숫자 올라가는 효과
    $('.box1_right_text2').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate');
        if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') 
            $('.animate2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );


    // 숫자 올라가는 효과
    $('.box1_right_text2').waypoint(function () {
        var targetNumber = $('.animate3').attr('data-rate');
        if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') 
            $('.animate3').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );

});

// 콘텐츠 나타나는 효과
AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 글자 하나씩 나타나는 효과
new TypeIt("#simpleUsage1", {
    strings: "",
    speed: 50,
    waitUntilVisible: true,
}).go();


// 글자 하나씩 나타나는 효과
new TypeIt("#simpleUsage2", {
    strings: "",
    speed: 50,
    waitUntilVisible: true,
}).go();


// 글자 하나씩 나타나는 효과
new TypeIt("#simpleUsage3", {
    strings: "",
    speed: 50,
    waitUntilVisible: true,
}).go();