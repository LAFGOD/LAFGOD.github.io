var xmlhttp = new XMLHttpRequest();
var url = "json/hey.json";
 
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Proyectos;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction (arr){
    
var contenedor = document.getElementById("contenedor");


for(i = 0; i < arr.length; i++) {

//Aqui elementos
var elhr = document.createElement("hr");
contenedor.appendChild(elhr);
var primerdiv = document.createElement("div");
var divinterior = document.createElement("div");
var elh2 = document.createElement("h2");
var elspan = document.createElement("span");
var elp = document.createElement("p");
var divinterior2 = document.createElement("div")
var ela = document.createElement("a");
var laimg = document.createElement("img");
var eltitu = document.createTextNode(arr[i].Título);
var elsub = document.createTextNode(arr[i].Pequeño);
var eldesc = document.createTextNode(arr[i].Descripción);

                                  

//Aqui atributos

elhr.setAttribute("class","featurette-divider");
primerdiv.setAttribute("class","row featurette");
elh2.setAttribute("class","featurette-heading");
elspan.setAttribute("class","text-muted");
elp.setAttribute("class","lead");
ela.setAttribute("href",arr[i].Link);
ela.setAttribute("target","_blank");
ela.setAttribute("id","Titulo");
laimg.setAttribute("class","featurette-image img-responsive center-block");
laimg.setAttribute("data-src","holder.js/500x500/auto");
laimg.setAttribute("alt","Titulo");
laimg.setAttribute("src",arr[i].Img);
laimg.setAttribute("data-holder-rendered","true");
    


//Aqui hijos

if (i%2 != 0){
    contenedor.appendChild(primerdiv);
primerdiv.appendChild(divinterior);
primerdiv.appendChild(divinterior2); 
    divinterior.setAttribute("class","col-md-7 col-md-push-5");
        divinterior2.setAttribute("class","col-md-5 col-md-pull-7");

    divinterior.appendChild(elh2);
    elh2.appendChild(eltitu);
    elh2.appendChild(elspan);
    divinterior.appendChild(elp);
    divinterior2.appendChild(ela);
    ela.appendChild(laimg);
    elspan.appendChild(elsub);
    elp.appendChild(eldesc);
    

} else{  
    divinterior.setAttribute("class","col-md-7");
    divinterior2.setAttribute("class","col-md-5");
    contenedor.appendChild(primerdiv);
    primerdiv.appendChild(divinterior);
    primerdiv.appendChild(divinterior2); 
    divinterior.appendChild(elh2);
    elh2.appendChild(eltitu);
    elh2.appendChild(elspan);
    divinterior.appendChild(elp);
    divinterior2.appendChild(ela);
    ela.appendChild(laimg);
    elspan.appendChild(elsub);
    elp.appendChild(eldesc);
}
   
}
}