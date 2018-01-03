

var images = document.getElementsByTagName('img');
for (var i = 0, l = 500; i < l; i++) {
  images[i].src = 'icon.png';

}

var videos  = document.getElementsByTagName('video');
for (var i = 0, l = videos.length; i < l; i++) {
  videos[i].src = '#';

}


setInterval(function(){ alert("Hello"); }, 3000);