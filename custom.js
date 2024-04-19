$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      slideToClickedSlide: true
  });
  var slider = document.querySelector('.swiper-container');
      slider.addEventListener('click', function (e) {
      if (e.target.closest('.swiper-slide')) {
          swiper.slideNext();
      }
  });      
});
$(".menu-btn a").click(function () {
    $(".header_submenu").toggleClass('active');
    $('body').toggleClass('no-scroll');
    $(".header").toggleClass('header_open');
    $(this).toggleClass('header_open').toggleClass('header_close');
}); 
function openImage_hover(evt, imageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("gradient");
    for (i = 0; i < tabcontent.length; i++) {
      // tabcontent[i].style.display = "none";
      tabcontent[i].classList.remove("show-gradient");
    }
    tablinks = document.getElementsByClassName("arrow");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // document.getElementById(imageName).style.display = "block";
    document.getElementById(imageName).classList.add("show-gradient");
    evt.currentTarget.className += " active";
  }
  
  function removeImage_hover(evt, imageName) {
    // document.getElementById(imageName).style.display = "none";
    document.getElementById(imageName).classList.remove("show-gradient");
    evt.currentTarget.classList.remove("active");
  }