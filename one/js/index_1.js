var src_list = ['../static/1.jpg', '../static/2.jpg', '../static/3.jpg']
var index = 0;


function next(){
  showImg(index + 1);
}

function prev(){
  showImg(index - 1);
}

function showImg(n){
  if(n > 2) n = 0;
  if(n < 0) n = 2;
  document.getElementById('img').src = src_list[n];
  index = n;
}
