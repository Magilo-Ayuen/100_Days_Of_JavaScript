let cnvas = document.querySelector('canvas').getContext('2d');
cnvas.strokeStyle = 'cyan'; //applies to both rects
cnvas.strokeRect(24,5,100,100); //first two values - x,y {last 2 - rect w & l}
cnvas.lineWidth = 5;
cnvas.strokeRect(200,5,100,100); //first two values - x,y {last 2 - rect w & l}