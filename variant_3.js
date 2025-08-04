//SETUP
let cell_size  = 200; //Pattern Block (values < 200 create interesting offsets)
let n = 4 //Pattern Density
let d = (cell_size/n)*(n+1);
let offset = 0;
let dev = false; //show developer glyph when true
let glide = true; //glide wallpaper

//COLOURS
let bgcolor = 'rgba(0, 0, 0, 0.83)'; //background color
let color1 = 'rgb(213, 232, 237)'; //tri color
let color2 = 'rgba(130, 147, 149, 0)'; //rect color
let color3 = 'rgba(67, 201, 0, 0.86)'; //ellipse 2 color
let color4 = 'rgb(206, 100, 2)'; //ellipse 1 color

//STROKES
let strokeColor1 = 'rgba(32, 2, 33, 0.12)'; //tri stroke color
let strokeColor2 = 'rgba(251, 255, 251, 0.13)'; //circles stroke color
let strokeColor3 = 'rgba(4, 31, 40, 0.56)'; //ellipse 1 stroke color
let strokeColor4 = 'rgba(0, 0, 0, 0)'; //conditional rectangle color
let strokeModifier = 500 //stroke modifier

//MODIFIERS
let elementWidth = 3*d;
let elementHeight = 3*d;
let e = 0.09 //shape element scale modifier
let e2 = 1.575 //2nd ellipse sizemodifier
let m = .01; //rect modifier
let triangleSize = e*220.3; //controls vertex location of triangle
let rotateMod = 0; //rotation of triangle per loop
let lineSize = 1.0;




//CODE

function setup_wallpaper(pWallpaper) {
 if(dev == false){
  pWallpaper.output_mode(GRID_WALLPAPER);
  if(glide == true) {pWallpaper.output_mode(GLIDE_WALLPAPER);}
  pWallpaper.show_guide(false);
}
  
  if(dev == true){
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.show_guide(true);
 }
  
  pWallpaper.resolution(NINE_PORTRAIT);
  

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
    

if(strokeModifier > 100) {lineSize = strokeModifier/10000}
else {lineSize = strokeModifier/1000}
  
    
    //Rect
    strokeWeight(0.08*strokeModifier);
    stroke(strokeColor1);
    fill(color2);
    rect(((cell_size*0.25)-m/r)*k, elementWidth*(e*m), elementHeight*(e*1/m))
    

    //Ellipse 1
    let x = random(0, 1);
    
    
    strokeWeight(0.07*strokeModifier);
    stroke(strokeColor2);
    fill(color3);
    if (x < 0.5){ //draw an ellipse
      if (x < 0.1) {noFill();} //prevent fill on very large ellipses
    ellipse((k*r),((k*r)/n), (elementWidth*((e*0.4)*e2))*i*(0.09/x), (elementHeight*(e*0.4)*e2)*i*(0.09/x))
    } 
    else //draw a line instead of an ellipse
    {
      push();
      translate(k*r)+(d*k),((k*r)/n)+(d*k);
     rotate(k * rotateMod); 

      stroke(strokeColor4);
      strokeWeight(x*lineSize*strokeModifier);
      fill(strokeColor4);
      rect((k*r)+(d*k),((k*r)/n)+(d*k), ((elementWidth*((e*0.01)*e2))*i), ((elementHeight*(e*2.4)*e2)*i*(1/x)))
      
      pop();
    }
  
    //Ellipse 2
   strokeWeight(0.04*strokeModifier);
   stroke(strokeColor3);
   fill(color4);
  ellipse(cell_size*0.5*k, cell_size*0.5*k, (1*elementWidth*(e))*k, (1*elementHeight*(e))*k)
    

  //Triangle
     push();
     let t = k * triangleSize;
     strokeWeight(0.1*strokeModifier);
     stroke(strokeColor1);
     fill(color1);
     
     translate(d*k, d*k);
     rotate(k * rotateMod); 

     beginShape();
     vertex(0, -t); // Top 
     vertex(-t, t); // Bottom left
     vertex(t, t); // Bottom right 
     endShape(CLOSE);
    pop();

  }
}
}
