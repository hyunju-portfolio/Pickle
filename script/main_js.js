// 스몰배너 슬라이드
var swiper = new Swiper('.slide ', {
  speed: 3000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 2500,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },
  loop: true,//슬라이드 무한반복
  navigation: {//화살표 버튼
    nextEl: '.slide .swiper-button-next',
    prevEl: '.slide .swiper-button-prev',
  },
  pagination: {//블릿 버튼
    el: '.slide .swiper-pagination',
    clickable: true,
  },
});

// 슬라이드 메뉴 js 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".box4_text .swiper-button-next",
    prevEl: ".box4_text .swiper-button-prev",
  },
});

// var 슬라이드
(function ($) {
  $(function () { //on DOM ready 
    $("#scroller").simplyScroll({
      speed: 2.5,
    });
  });
})(jQuery);

// 텍스트 교체
$(document).ready(function () {
  setTimeout(function () {
    $('.text').text("collect.").css('color', '#499D22');
  }, 0);
  setTimeout(function () {
    $('.text').text("upcycle.").css('color', '#23A7E3');
  }, 1000);
  setTimeout(function () {
    $('.text').text("protect.").css('color', '##499D22');
  }, 2000);

  setInterval(function () {
    setTimeout(function () {
      $('.text').text("collect.").css('color', '#499D22');
    }, 0);
    setTimeout(function () {
      $('.text').text("upcycle.").css('color', '#23A7E3');
    }, 1000);
    setTimeout(function () {
      $('.text').text("protect.").css('color', '#499D22');
    }, 2000);

  }, 3000);

});

// 마우스 호버시 나타나고 따라다니는 이미지
const div_wraps = document.querySelectorAll('.box5_img1');
document.getElementById('list_ul1').addEventListener('mousemove', function(e){
  const x = e.offsetX;
  const y = e.offsetY;

  div_wraps.forEach(function(div){
    div.style.transform = `translate(${x - 50}px, ${y + 50}px)`;
  });
});

const list = document.querySelectorAll('.list_li1');
// forEach의 arrow function
list.forEach(li_img => {
  li_img.addEventListener('mouseover', function(){
    li_img.querySelector('.box5_img1').style.visibility = 'visible';
  });
  li_img.addEventListener('mouseleave', function(){
    li_img.querySelector('.box5_img1').style.visibility = 'hidden';
  });
});

// 마우스 호버시 나타나고 따라다니는 이미지
const div_wraps2 = document.querySelectorAll('.box5_img2');
document.getElementById('list_ul2').addEventListener('mousemove', function(e){
  const x = e.offsetX;
  const y = e.offsetY;

  div_wraps2.forEach(function(div){
    div.style.transform = `translate(${x - 50}px, ${y + 50}px)`;
  });
});

const list2 = document.querySelectorAll('.list_li2');
// forEach의 arrow function
list2.forEach(li_img => {
  li_img.addEventListener('mouseover', function(){
    li_img.querySelector('.box5_img2').style.visibility = 'visible';
  });
  li_img.addEventListener('mouseleave', function(){
    li_img.querySelector('.box5_img2').style.visibility = 'hidden';
  });
});

// 마우스 호버시 나타나고 따라다니는 이미지
const div_wraps3 = document.querySelectorAll('.box5_img3');
document.getElementById('list_ul3').addEventListener('mousemove', function(e){
  const x = e.offsetX;
  const y = e.offsetY;

  div_wraps3.forEach(function(div){
    div.style.transform = `translate(${x - 50}px, ${y + 50}px)`;
  });
});

const list3 = document.querySelectorAll('.list_li3');
// forEach의 arrow function
list3.forEach(li_img => {
  li_img.addEventListener('mouseover', function(){
    li_img.querySelector('.box5_img3').style.visibility = 'visible';
  });
  li_img.addEventListener('mouseleave', function(){
    li_img.querySelector('.box5_img3').style.visibility = 'hidden';
  });
});

// 마우스 호버시 나타나고 따라다니는 이미지
const div_wraps4 = document.querySelectorAll('.box5_img4');
document.getElementById('list_ul4').addEventListener('mousemove', function(e){
  const x = e.offsetX;
  const y = e.offsetY;

  div_wraps4.forEach(function(div){
    div.style.transform = `translate(${x - 50}px, ${y + 50}px)`;
  });
});

const list4 = document.querySelectorAll('.list_li4');
// forEach의 arrow function
list4.forEach(li_img => {
  li_img.addEventListener('mouseover', function(){
    li_img.querySelector('.box5_img4').style.visibility = 'visible';
  });
  li_img.addEventListener('mouseleave', function(){
    li_img.querySelector('.box5_img4').style.visibility = 'hidden';
  });
});

// 마우스 호버시 나타나고 따라다니는 이미지
const div_wraps5 = document.querySelectorAll('.box5_img5');
document.getElementById('list_ul5').addEventListener('mousemove', function(e){
  const x = e.offsetX;
  const y = e.offsetY;

  div_wraps5.forEach(function(div){
    div.style.transform = `translate(${x - 50}px, ${y + 50}px)`;
  });
});

const list5 = document.querySelectorAll('.list_li5');
// forEach의 arrow function
list5.forEach(li_img => {
  li_img.addEventListener('mouseover', function(){
    li_img.querySelector('.box5_img5').style.visibility = 'visible';
  });
  li_img.addEventListener('mouseleave', function(){
    li_img.querySelector('.box5_img5').style.visibility = 'hidden';
  });
});

// 마우스 호버시 나타나고 따라다니는 이미지
const div_wraps6 = document.querySelectorAll('.box5_img6');
document.getElementById('list_ul6').addEventListener('mousemove', function(e){
  const x = e.offsetX;
  const y = e.offsetY;

  div_wraps6.forEach(function(div){
    div.style.transform = `translate(${x - 50}px, ${y + 50}px)`;
  });
});

const list6 = document.querySelectorAll('.list_li6');
// forEach의 arrow function
list6.forEach(li_img => {
  li_img.addEventListener('mouseover', function(){
    li_img.querySelector('.box5_img6').style.visibility = 'visible';
  });
  li_img.addEventListener('mouseleave', function(){
    li_img.querySelector('.box5_img6').style.visibility = 'hidden';
  });
});