const food = ["img/beef.png","img/corry.png","img/karaage.png","img/kushikatsu.png"];
let num = -1;


function slideshow_timer(){
  if (num === 3){
    num = 0;
  }
  else {
    num ++;
  }
  document.getElementById("foods").src = food[num];
}

setInterval(slideshow_timer, 3000);