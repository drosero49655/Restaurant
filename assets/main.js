


/*
function test(){
  alert("test");
}
Esta es una funcion de prueba. Funciona. El template y el contenido reconocen la hoja de js y ejecutan la funcion.
*/

/* Esta funcion comprueba la introduccion de nombre y mesa y se niega a pasar pagina si la informacion no esta completa */
function required(){

  var nombre=document.getElementById("nombre");
  var mesa=document.getElementById("mesa");
  if(nombre.value.length==0){
    alert("Por favor ingrese su nombre");
    return false;
      } else if (mesa.value.length==""){
    alert("Por favor ingrese su mesa")
    return false;
      }
    return true;
}

function required2(){

var pan=document.getElementsByName("pan");
var carne=document.getElementsByName("carne");
var verdura=document.getElementsByName("verdura");
var bebida=document.getElementsByName("bebida");
var acompañamiento=document.getElementsByName("acompañamiento");

var pancheck, carnecheck, verduracheck, bebidacheck, acompañamientocheck

for(var i=0; i<pan.length; i++){
  if(pan[i].checked){
    pancheck=true; 
  }
}
for(var i=0; i<carne.length; i++){
  if(carne[i].checked){
    carnecheck=true; 
  }
}
for(var i=0; i<verdura.length; i++){
  if(verdura[i].checked){
    verduracheck=true; 
  }
}
for(var i=0; i<bebida.length; i++){
  if(bebida[i].checked){
    bebidacheck=true; 
  }
}
for(var i=0; i<acompañamiento.length; i++){
  if(acompañamiento[i].checked){
    acompañamientocheck=true; 
  }
}

if(!pancheck){
alert("Porfavor elija un pan");
return false;
}else if(!carnecheck){
alert("Por favor elija una carne");
return false;
}else if(!verduracheck){
alert("Por favor elija una verdura");
return false;
}else if(!bebidacheck){
alert("Por favor elija una bebida");
return false;
}else if(!acompañamientocheck){
alert("Por favor elija un acompañamiento");
return false;
}else{
  return true;
}
}//required2 termina en este corchete

//funcion para API
/*fetch para clime de acuerdo a las coordinadas geograficas
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
dd218e08251bee45ac884d9ccd87878c
 */
// Geolocation
function getWeather() {
  var x = document.getElementById("demo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  var x = document.getElementById("demo");
  var lat= position.coords.latitude;
  var lon= position.coords.longitude;

  var cityInput=document.getElementById('cityInput')
  var ciudad=document.querySelector('.ciudad');
  var desc=document.querySelector('.desc');
  var hum=document.querySelector('.hum');
  var temp=document.querySelector('.temp');
  var tempMax=document.querySelector('.tempMax');
  var tempMin=document.querySelector('.tempMin');
  let url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=dd218e08251bee45ac884d9ccd87878c';
  fetch(url)
  .then(res=>res.json())
  .then(out=>{
  
  var valCiudad=out['name'];
  var valDesc=out['weather'][0]['description'];
  var valHum=out['main']['humidity'];
  var valTemp=out['main']['feels_like'];
  var valTempMax=out['main']['temp_max'];
  var valTempMin=out['main']['temp_min'];
  
  ciudad.innerHTML="Ciudad: "+valCiudad;
  desc.innerHTML="Descripción: "+valDesc;
  hum.innerHTML="Humedad: "+valHum+"%";
  temp.innerHTML="Temperatura: "+(valTemp-273.15).toFixed(2)+"°C";
  tempMax.innerHTML="Temperatura máxima: "+(valTempMax-273.15).toFixed(2)+"°C";
  tempMin.innerHTML="Temperatura mínima: "+(valTempMin-273.15).toFixed(2)+"°C";
  })
  .catch(err=>alert("Error! La búsqueda no se ha llevado a cabo. Error: "+err));

}





//getWeather funciona
// Funcion vieja en la que se introducía una cuidad manualmente
/*
function getWeather(){
var cityInput=document.getElementById('cityInput')
var ciudad=document.querySelector('.ciudad');
var desc=document.querySelector('.desc');
var hum=document.querySelector('.hum');
var temp=document.querySelector('.temp');
var tempMax=document.querySelector('.tempMax');
var tempMin=document.querySelector('.tempMin');
let url='https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid=dd218e08251bee45ac884d9ccd87878c';
fetch(url)
.then(res=>res.json())
.then(out=>{

var valCiudad=out['name'];
var valDesc=out['weather'][0]['description'];
var valHum=out['main']['humidity'];
var valTemp=out['main']['feels_like'];
var valTempMax=out['main']['temp_max'];
var valTempMin=out['main']['temp_min'];

ciudad.innerHTML="Cuidad: "+valCiudad;
desc.innerHTML="Descripción: "+valDesc;
hum.innerHTML="Humedad: "+valHum+"%";
temp.innerHTML="Temperatura: "+(valTemp-273.15).toFixed(2)+"°C";
tempMax.innerHTML="Temperatura máxima: "+(valTempMax-273.15).toFixed(2)+"°C";
tempMin.innerHTML="Temperatura mínima: "+(valTempMin-273.15).toFixed(2)+"°C";
})
.catch(err=>alert("Error! La búsqueda no se ha llevado a cabo. Error: "+err));
}//getWeather
*/

/* 
button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=dd218e08251bee45ac884d9ccd87878c')
  .then(response=>response.json())
  .then(data=> console.log(data))
  .catch(err=>alert("Error"))
})
*/



/*
Estas funciones sirven para tomar los datos de la página hamburgueseria, guardaros en almacenamiento local y reproducirlos en 
la página de salida. 
*/

/*
function getMesa(){
    var mesa, nombre;
    nombre=document.getElementById("nombre");
    localStorage.NOMBRE=nombre.value;
    mesa=document.getElementById("mesa");
    localStorage.MESA=mesa.value;
  }
  
  function getDatos(){
    var pan, carne, verdura=[], verduraARR, bebida, acompañamiento;
    //Crea variable pan, almacena value y mete variable en storage bajo PAN
    pan=document.getElementsByName("pan");
    for(var i=0; i<pan.length; i++){
      if(pan[i].checked){
        pan=pan[i].value;
        localStorage.PAN=pan;
      }//for if pan
    }//for pan
    //Crea variable carne, almacena value y mete variable en storage bajo CARNE
    carne=document.getElementsByName("carne");
    for(var i=0; i<carne.length; i++){
      if(carne[i].checked){
        carne=carne[i].value;
        localStorage.CARNE=carne;
      }//for if carne
    }//for carne
    //Crea variable verdura, almacena value y mete variable en storage bajo VERDURA
    verdura=document.getElementsByName("verdura");
    for(var i=0; i<verdura.length; i++){
      if(verdura[i].checked){
        verdura=verdura[i].value;
        localStorage.VERDURA=verdura;
      }//for if bebdida
    }//for bebdida
    
    //Crea variable bebida, almacena value y mete variable en storage bajo BEBIDA
    bebida=document.getElementsByName("bebida");
    for(var i=0; i<bebida.length; i++){
      if(bebida[i].checked){
        bebida=bebida[i].value;
        localStorage.BEBIDA=bebida;
      }//for if bebdida
    }//for bebdida
    //Crea variable acompañamiento, almacena value y mete variable en storage bajo ACOMPAÑAMIENTO
    acompañamiento=document.getElementsByName("acompañamiento");
    for(var i=0; i<acompañamiento.length; i++){
      if(acompañamiento[i].checked){
        acompañamiento=acompañamiento[i].value;
        localStorage.ACOMPAÑAMIENTO=acompañamiento;
      }//for if acompañamiento
    }//for acompañamiento
  
  } //tomaDatos
  
  function setDatos(){
    //Regresa el pan
    document.getElementById("setPan").innerHTML=localStorage.PAN ;
    //Regresa la carne
    document.getElementById("setCarne").innerHTML=localStorage.CARNE ;
    //Regresa el verdura
    document.getElementById("setVerdura").innerHTML=localStorage.VERDURA ;
    //Regresa la bebida
    document.getElementById("setBebida").innerHTML=localStorage.BEBIDA ;
    //Regresa el acompañamiento
    document.getElementById("setAcompañamiento").innerHTML=localStorage.ACOMPAÑAMIENTO ;
    //Regresa el nombre
    document.getElementById("setNombre").innerHTML=localStorage.NOMBRE;
    //Regresa la mesa
    document.getElementById("setMesa").innerHTML=localStorage.MESA;
    }
  */