
$('.cards-carousel').slick();

function openMenu() {
  
  var btnOpen = document.getElementById("open-menu-button");
  var btnClose = document.getElementById("close-menu-button");
  
  var mobileMenuOverlay = document.getElementById("menu-mobile");
  var mobileMenu = document.getElementById("mobile-side");
  
  btnOpen.addEventListener("click", (e) => {
    
    e.preventDefault();
    mobileMenuOverlay.classList.add("active");
    mobileMenu.classList.add("active");
    
  });
  
  btnClose.addEventListener("click", (e) => {
    
    e.preventDefault();
    mobileMenuOverlay.classList.remove("active");
    mobileMenu.classList.remove("active");

  });
  
};

openMenu();

function openQuestion(evt, questionName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(questionName).style.display = "block";
  evt.currentTarget.className += " active";
  
}

$(document).ready(function(){
 
	$('.go-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
