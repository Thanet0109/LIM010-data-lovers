/* Manejo del DOM */
/* Acá va tu código */
let screenLogin = document.getElementById('botonLogin');
let screenSelectCountry = document.getElementById('screenSelectCountry');
let screencountry = document.getElementById('screencountry');
/*let screenAllIndicatorsPeru = document.getElementById('screenAllIndicatorsPeru');
let screenOneIndicatorPeru = document.getElementById('screenOneIndicatorPeru');
let screenChile = document.getElementById('screenChile');
let screenAllIndicatorsChile = document.getElementById('screenAllIndicatorsChile');
let screenOneIndicatorChile = document.getElementById('screenOneIndicatorChile');
let screenBrasil = document.getElementById('screenBrasil');
let screenAllIndicatorsBrasil = document.getElementById('screenAllIndicatorsPeru');
let screenOneIndicatorBrasil = document.getElementById('screenOneIndicatorBrasil');
let screenMexico = document.getElementById('screenBrasil');
let screenAllIndicatorsMexico = document.getElementById('screenAllIndicatorsPeru');
let screenOneIndicatorMexico = document.getElementById('screenOneIndicatorBrasil');*/

const hideallscreens = () => {
    screenLogin.classList.remove('show');
    screenSelectCountry.classList.remove('show');
    screencountry.classList.remove('show');
    /*screenAllIndicatorsPeru.classList.remove('show');
    screenOneIndicatorPeru.classList.remove('show');
    screenChile.classList.remove('show');
    screenAllIndicatorsChile.classList.remove('show');
    screenOneIndicatorChile.classList.remove('show');
    screenBrasil.classList.remove('show');
    screenAllIndicatorsBrasil.classList.remove('show');
    screenOneIndicatorBrasil.classList.remove('show');
    screenMexico.classList.remove('show');
    screenAllIndicatorsMexico.classList.remove('show');
    screenOneIndicatorMexico.classList.remove('show');*/
    screenLogin.classList.add('hide');
    screenSelectCountry.classList.add('hide');
    screencountry.classList.add('hide');
   /* screenAllIndicatorsPeru.classList.add('hide');
    screenOneIndicatorPeru.classList.add('hide');
    screenChile.classList.add('hide');
    screenAllIndicatorsChile.classList.add('hide');
    screenOneIndicatorChile.classList.add('hide');
    screenBrasil.classList.add('hide');
    screenAllIndicatorsBrasil.classList.add('hide');
    screenOneIndicatorBrasil.classList.add('hide');
    screenMexico.classList.add('hide');
    screenAllIndicatorsMexico.classList.add('hide');
    screenOneIndicatorMexico.classList.add('hide');
*/}
const showscreenLogin = () => {
    hideallscreens();
    screenLogin.classList.add('show');
}

const showscreenSelectCountry = () => {
    hideallscreens();
    screenSelectCountry.classList.add('show');
}

const showscreencountry = () => {
    hideallscreens();
    screencountry.classList.add('show');
}
/*
const showscreenAllIndicatorsPeru = () => {   
    hideallscreens();
    screenAllIndicatorsPeru.classList.add('show');

}
const showscreenOneIndicatorPeru = () => {
    hideallscreens();
    screenOneIndicatorPeru.classList.add('show'); 
}
const showscreenChile = () => {
    hideallscreens();
    screenChile.classList.add('show');
}
const showscreenAllIndicatorsChile = () => {    
    hideallscreens();
    screenAllIndicatorsChile.classList.add('show');

}
const showscreenOneIndicatorChile = () => {
    hideallscreens();
    screenOneIndicatorChile.classList.add('show'); 
}

const showscreenBrasil = () => {
    hideallscreens();
    screenBrasil.classList.add('show');
}
const showscreenAllIndicatorsBrasil = () => {    
    hideallscreens();
    screenAllIndicatorsBrasil.classList.add('show');

}
const showscreenOneIndicatorBrasil = () => {
    hideallscreens();
    screenOneIndicatorBrasil.classList.add('show'); 
}

const showscreenMexico = () => {
    hideallscreens();
    screenMexico.classList.add('show');
}
const showscreenAllIndicatorsMexico = () => {    
    hideallscreens();
    screenAllIndicatorsMexico.classList.add('show');

}
const showscreenOneIndicatorMexico = () => {
    hideallscreens();
    screenOneIndicatorMexico.classList.add('show'); 
}*/

/*Login*/
let EnterLogin = document.getElementById('EnterLogin');
let user = document.getElementById('user');
let password = document.getElementById('password');
let enter = document.getElementById('password');

enter.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("EnterLogin").click();
    }
  });

EnterLogin.addEventListener('click', () => {
    let userresult = user.value;
    let passwordresult = password.value;
    if (userresult === "1" && passwordresult === "1") {
        document.getElementById('body').classList.add('bodySelectCountry');
        document.getElementById('body').classList.remove('bodyLogin');
        document.getElementById('Head').classList.remove('hide');  
        showscreenSelectCountry();
       
    }
    else {
        user.value=""; 
        password.value="";
        document.getElementById('mistakeLogin').innerHTML = "Usuario o contraseña incorrectos";
    }
});

let clickPerú = document.getElementById('peru');
const indicatorsPeru=WORLDBANK.PER.indicators;

clickPerú.addEventListener('click', () => {
    showscreencountry();
    screenSelectCountry.classList.add('show');
    addLiSL(); addLiSE(); addLiHD();addLiIC(); addLiMS();addLiSG();addLiSP();addLiSH();addLiper();
});

let clickindicator = document.getElementsByTagName('a');

clickindicator.addEventListener('click',() => {
 alert(clickindicator.id);
});


let addLiSL=()=>{
    arrSLcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrSLnameindic[ind];
        let indicatorcode=arrSLcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listSL').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
};  

let addLiSE=()=>{
    arrSEcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrSEnameindic[ind];
        let indicatorcode=arrSEcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listSE').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 

let addLiHD=()=>{
    arrHDcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrHDnameindic[ind];
        let indicatorcode=arrHDcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listHD').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 


let addLiSG=()=>{
    arrSGcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrSGnameindic[ind];
        let indicatorcode=arrSGcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listSG').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 

let addLiSP=()=>{
    arrSPcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrSPnameindic[ind];
        let indicatorcode=arrSPcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listSP').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 

let addLiIC=()=>{
    arrICcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrICnameindic[ind];
        let indicatorcode=arrICcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listIC').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 

let addLiper=()=>{
    arrpercodeindic.forEach(function(ele,ind) {
        let indicatorname=arrpernameindic[ind];
        let indicatorcode=arrpercodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listper').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 
let addLiMS=()=>{
    arrMScodeindic.forEach(function(ele,ind) {
        let indicatorname=arrMSnameindic[ind];
        let indicatorcode=arrMScodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listMS').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 

let addLiSH=()=>{
    arrSHcodeindic.forEach(function(ele,ind) {
        let indicatorname=arrSHnameindic[ind];
        let indicatorcode=arrSHcodeindic[ind];
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.innerHTML=indicatorname;
        li.id=indicatorname;
        a.id=indicatorcode;
        /*li.innerHTML=indicatorname;*/
        document.getElementById('listSH').appendChild(li);
        document.getElementById(indicatorname).appendChild(a);
      });
}; 

let arrSEcodeindic= new Array();
let indicatordataperu=WORLDBANK.PER.indicators;
let arrSEnameindic= new Array();
let arrSLcodeindic=new Array();
let arrSLnameindic=new Array();
let arrnameindic= new Array();
let indexSE=0;
let indexSL=0;
let arrHDnameindic= new Array();
let arrHDcodeindic= new Array();
let arrSPcodeindic=new Array();
let arrSPnameindic=new Array();
let arrICnameindic= new Array();
let arrICcodeindic= new Array();
let arrSHcodeindic=new Array();
let arrSHnameindic=new Array();
let arrSGnameindic= new Array();
let arrSGcodeindic= new Array();
let indexHD=0;
let indexSP=0;
let indexIC=0;
let indexSH=0;
let indexSG=0;
let arrpernameindic= new Array();
let arrpercodeindic= new Array();
let indexper=0;
let arrMSnameindic= new Array();
let arrMScodeindic= new Array();
let indexMS=0;


indicatordataperu.forEach((element,ind)=> {
  if(element.indicatorCode.startsWith('SE')){
    arrSEcodeindic[indexSE]=element.indicatorCode;
    arrSEnameindic[indexSE]=element.indicatorName;
    console.log(arrSEcodeindic[indexSE]),console.log(arrSEnameindic[indexSE]); indexSE++;
  }
  if(element.indicatorCode.startsWith('SL')){
    arrSLcodeindic[indexSL]=element.indicatorCode;
    arrSLnameindic[indexSL]=element.indicatorName;
    console.log(arrSLcodeindic[indexSL]),console.log(arrSLnameindic[indexSL]);indexSL++;
  }
  if(element.indicatorCode.startsWith('HD')){
    arrHDcodeindic[indexHD]=element.indicatorCode;
    arrHDnameindic[indexHD]=element.indicatorName;
    console.log(arrHDcodeindic[indexHD]),console.log(arrHDnameindic[indexHD]);indexHD++;
  }
  if(element.indicatorCode.startsWith('SP')){
    arrSPcodeindic[indexSP]=element.indicatorCode;
    arrSPnameindic[indexSP]=element.indicatorName;
    console.log(arrSPcodeindic[indexSP]),console.log(arrSPnameindic[indexSP]);indexSP++;
  }
  if(element.indicatorCode.startsWith('IC')){
    arrICcodeindic[indexIC]=element.indicatorCode;
    arrICnameindic[indexIC]=element.indicatorName;
    console.log(arrICcodeindic[indexIC]),console.log(arrICnameindic[indexIC]);indexIC++;
  }
  if(element.indicatorCode.startsWith('SH')){
    arrSHcodeindic[indexSH]=element.indicatorCode;
    arrSHnameindic[indexSH]=element.indicatorName;
    console.log(arrSHcodeindic[indexSH]),console.log(arrSHnameindic[indexSH]);indexSH++;
  }
  if(element.indicatorCode.startsWith('SG')){
    arrSGcodeindic[indexSG]=element.indicatorCode;
    arrSGnameindic[indexSG]=element.indicatorName;
    console.log(arrSGcodeindic[indexSG]),console.log(arrSGnameindic[indexSG]);indexSG++;
  }
  if(element.indicatorCode.startsWith('per')){
    arrpercodeindic[indexper]=element.indicatorCode;
    arrpernameindic[indexper]=element.indicatorName;
    console.log(arrpercodeindic[indexper]),console.log(arrpernameindic[indexper]);indexper++;
  }
  if(element.indicatorCode.startsWith('MS')){
    arrMScodeindic[indexMS]=element.indicatorCode;
    arrMSnameindic[indexMS]=element.indicatorName;
    console.log(arrMScodeindic[indexMS]),console.log(arrMSnameindic[indexMS]);indexMS++;
  }
});



