var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n){
  return showSlide(slideIndex += n);
}

function showSlide(n){
  var slides = document.getElementsByClassName("image");
  if(n > slides.length) slideIndex = 1;
  if(n < 1) slideIndex = slides.length;
  for(var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
