var box=document.getElementById('box');

var viewwidth= window.innerWidth;
var viewheight= window.innerHeight;

box.style.width= Math.floor(0.1*viewwidth) + 'px';
box.style.height= Math.floor(0.15*viewheight) + 'px';

var maxwidth= viewwidth- parseInt(box.style.width);
var maxheight= viewheight- parseInt(box.style.height);


// Initializing box location

box.style.left= Math.floor(0.5*maxwidth) + 'px';
box.style.top= Math.floor(0.5*maxheight) + 'px';

box.addEventListener('mouseover', function(){
    box.style.top= Math.floor(Math.random()*maxheight)+ 'px';
    box.style.left= Math.floor(Math.random()*maxwidth)+ 'px';
});