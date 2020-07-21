
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
