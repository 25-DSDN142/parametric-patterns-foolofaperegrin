//your parameter variables go here!
let cell_size  = 200;
let n = 5
let d = cell_size/n;
let elementWidth = 1*d;
let elementHeight = 1*d;
let e = 1.3 //element Modifier
let offset = 0;
let color1 = 'rgb(255, 255, 255)'; //rect and custom shape stroke color
let color2 = 'rgba(103, 99, 147, 0.03)'; //rect color
let color3 = 'rgba(231, 168, 59, 0.04)'; //ellipse 2 color
let color4 = 'rgba(159, 82, 128, 0.04)'; //ellipse 1 color
let strokeColor1 = 'rgba(236, 238, 239, 0.1)'; //rect and custom shape stroke color
let strokeColor2 = 'rgba(158, 89, 170, 0.07)'; //ellipse 2 stroke color
let strokeColor3 = 'rgba(125, 87, 87, 0.15)'; //ellipse 1 stroke color
let strokeModifier = 1.2 //stroke modifier
let bgcolor = 'rgba(18, 236, 211, 0.16)'; //background color
let e2 = 30; //2nd ellipse modifier
let dev = false;
let p = 19; //custom shape modifier
let m = 5.11; //rect modifier



function setup_wallpaper(pWallpaper) {
 if(dev == false){
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.show_guide(false);
}
  
  if(dev == true){
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.show_guide(true);
 }
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = offset;
  
}

function wallpaper_background() {
  background(bgcolor); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//noFill();
//stroke('rgba(183, 162, 222, 0.75)');
//strokeWeight(1.5);



for (let i = 0; i < n+1; i++) {
  let r=i*d;
 
  
  for (let k = 0; k < n+1; k++) {
    


     //Custom Shape
     strokeWeight(1.2*strokeModifier);
     stroke(strokeColor1);
     fill(color1);
     beginShape();
     vertex((p*k)+(0.5*cell_size), (p*k)+(0.5*cell_size));
     vertex((p*k)+(0.25*cell_size), (p*k)+(0.25*cell_size));
     vertex((p*k)+(0.75*cell_size), (p*k)*(0.75*cell_size));
     
     endShape(CLOSE);
  
    
    //Rect
    strokeWeight(.3*strokeModifier);
    stroke(strokeColor1);
    fill(color2);
    rect(((m*r)/(d))*n,(2*d), elementWidth*(e*3.65), elementHeight*(e*9.55))
    

    //Ellipse 1
    strokeWeight(0.3*strokeModifier);
    stroke(strokeColor2);
    fill(color3);
    ellipse((k+d)*(d*i),(k*r), elementWidth*((e*0.3)*e2), elementHeight*(e*0.3)*e2)
  
    //Ellipse 2
   strokeWeight(1.3*strokeModifier);
   stroke(strokeColor3);
   fill(color4);
   ellipse(k*r, cell_size*d, 4*elementWidth*(e), 4*elementHeight*(e))
   
   
   

  }
}
}
