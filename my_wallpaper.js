//your parameter variables go here!
let cell_size  = 200;
let n = 3;
let d = cell_size/n;
let elementWidth = 2.3*d;
let elementHeight = 1*d;
let e = 1; //element Modifier
let offset = 0;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = offset;
}

function wallpaper_background() {
  background('rgb(152, 80, 41)'); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
noFill();
stroke('rgba(183, 162, 222, 0.75)');
strokeWeight(1.5);
for (let i = 0; i < n+1; i++) {
  let r=i*d;
  
  for (let k = 0; k < n+1; k++) {
     //Custom Shape
     strokeWeight(0.1);
     stroke('rgb(255, 255, 255)');
     fill('rgba(134, 132, 157, 0.39)');
     beginShape();
     vertex(2/k*d,r);
     vertex(2*k*d,(r+elementHeight)*(e));
     vertex(k*d,(r-elementWidth)*(e));
     endShape(CLOSE);
    
    
    //Rect
    strokeWeight(0.8);
    stroke('rgba(34, 18, 49, 0.75)');
    fill('rgba(72, 8, 39, 0.38)');
    rect((k*d)-i,r, elementWidth*(e*0.75), elementHeight*(e*0.75))
    
    //Ellipse 1
    strokeWeight(0.2);
    stroke('rgba(208, 113, 82, 0.95)');
    fill('rgba(96, 100, 105, 0.1)');
    ellipse((k*d)*i,4*r, elementWidth*(e*3.75), elementHeight*(e*1.1))
  
    //Ellipse 2
   strokeWeight(0.8);
   stroke('rgba(161, 188, 165, 0.75)');
   fill('rgba(240, 220, 197, 0.41)');
   ellipse(k*d,r, elementWidth*(e), elementHeight*(e))
   

   

  }
}
}
