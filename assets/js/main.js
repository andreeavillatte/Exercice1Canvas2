var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Cornet
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(150,220);
ctx.lineTo(250,220);
ctx.lineTo(200,380);
ctx.fillStyle = "#AA6522";
ctx.fill();            // Application du remplissage



// // Boule de glace
ctx.beginPath();            
ctx.fillStyle = "#8A0908";
ctx.moveTo(150,220);
ctx.quadraticCurveTo(200,60,250,220);
ctx.fill();