var increment=0;
var color = "hsl(266,22%,19%)";
var light=parseInt(color.substring(12,14),10);

var color2=50406;
var color3="e29700";
var red;
var green;
var a =0;
var diff=0;

function colorScroll(){
  increment++;


  if(window.scrollY>(9400-(938-window.innerHeight)*(1920/window.innerWidth))/(1920/window.innerWidth)){

    red=Math.trunc(5+(window.scrollY-(9400-(938-window.innerHeight)*(1920/window.innerWidth))/(1920/window.innerWidth))/12*(1920/window.innerWidth));
    green=Math.trunc(4+(window.scrollY-(9400-(938-window.innerHeight)*(1920/window.innerWidth))/(1920/window.innerWidth))/36*(1920/window.innerWidth));

    if(red>194){
      red=194;
    }
    if(green>63) green=63;
    red=red.toString();
    green=green.toString();

    document.body.style.backgroundColor ="rgb("+red+","+green+",6)";
  }
  else if(window.scrollY>(4500-(938-window.innerHeight))/(1920/window.innerWidth))
  {

    light= 9-((window.scrollY-4500/(1920/window.innerWidth))/200*(1920/window.innerWidth));
    if (light<2)light=2;
    else if(light>9)light=9;

    color=color.substring(0,12)+light.toString()+"%"+")";
    document.body.style.backgroundColor =color;



  }
  else if (window.scrollY>(1632-(938-window.innerHeight))/(1920/window.innerWidth)){
    light= 19-Math.trunc((window.scrollY-1632/(1920/window.innerWidth))/100*(1920/window.innerWidth));
    if (light<9)light=9;
    else if(light>19)light=19;

    color=color.substring(0,12)+light.toString()+"%"+")";
    document.body.style.backgroundColor =color;


  }
  else{
    document.body.style.backgroundColor ="#2e253a";


  }




}

window.addEventListener("scroll",function(){

colorScroll();


});



var largeur = document.getElementById("pacman").getElementsByTagName("img")[0].width;


var random;
var continuer=true;
var marginLeft=30;
var marginTop=0;
var increment1=29;
var direction=0;
function randomMove(){

  if(window.scrollY>1000)increment1++;

  if(window.scrollY>1000 && increment1%30==0){

    while(continuer){
      random=Math.floor(Math.random()*4);
      if (random==0 && (marginLeft+30)<=90){
        direction=0;
        continuer=false;
        marginLeft++;
          document.getElementById("pacman").getElementsByTagName("img")[0].style.transform="scaleX(1)";

      }
      else if (random==1 && (marginLeft-30)>=0){
        direction=1;
        continuer=false;
        marginLeft--;
            document.getElementById("pacman").getElementsByTagName("img")[0].style.transform="scaleX(-1)";
      }
      else if (random==2 &&  (marginTop+30)<=180)
      {
        direction=2;
        continuer=false;
        marginTop+=1;
              document.getElementById("pacman").getElementsByTagName("img")[0].style.transform="rotate("+90+"deg)";
      }

      else if (random==3 && (marginTop-30)>=0){
        direction=3;
        continuer=false;
        marginTop-=1;
          document.getElementById("pacman").getElementsByTagName("img")[0].style.transform="rotate("+270+"deg)";
      }
    }
    continuer=true;

}
else if (window.scrollY>window.innerWidth/1.92){

if (direction==0)marginLeft+=1;
else if (direction==1)marginLeft-=1;
else if (direction==2)marginTop+=0.6;
else marginTop-=0.6;

}

  document.getElementById("pacman").getElementsByTagName("img")[0].style.marginLeft=marginLeft.toString()+"%";
    document.getElementById("pacman").getElementsByTagName("img")[0].style.marginTop=marginTop.toString()+"%";

}
var temps=0;
function turnClock(){
  temps++;
  document.getElementById("clock2").style.transform="rotate("+temps+"deg)";
  document.getElementById("clock1").style.transform="rotate("+temps*-1.2+"deg)";
  document.getElementById("clock3").style.transform="rotate("+temps*1.5+"deg)";
}

setInterval(function(){

  randomMove();
  turnClock();
},10);

  document.getElementById("card2").style.transform="rotate("+-20+"deg)";
  document.getElementById("card3").style.transform="rotate("+20+"deg)";
  document.getElementById("bulle").style.transform="scaleY(-1)";


var position=null;
var interval=null;
var vitesse=0.1;

document.getElementById("bouton_accueil").onclick=function(){
  vitesse=0.05;
  position=window.scrollY;console.log(position);
  function remonter(){
    console.log(vitesse);

    if(window.scrollY>position/100*70 ){
      window.scrollTo(0,window.scrollY-position/100*vitesse);
      vitesse*=1.013;


  }
    else if( window.scrollY<position/100*20){
        window.scrollTo(0,window.scrollY-position/100*vitesse);
        vitesse/=1.032;
        if(vitesse<0.05)vitesse=0.05;
    }
    else  window.scrollTo(0,window.scrollY-position/100*1.5);
    if (window.scrollY==0) clearInterval(interval);
  }

 interval=setInterval(function(){

    remonter();},1)};
