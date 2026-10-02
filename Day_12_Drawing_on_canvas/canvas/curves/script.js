let canv = document.querySelector('canvas').getContext('2d');
canv.beginPath();
canv.moveTo(10,180);
canv.quadraticCurveTo(60,10,190,90);
canv.lineTo(60,10);
canv.closePath();
canv.stroke();