function burbuja(){

var arreglo1=[];
var arreglo2=[];
var arreglo3=[];
var a = document.getElementById("dato").value;
var ent = a % 1;
if(a>0 && ent == 0){

x=a;
for(t=0;t<a;t++){
  arreglo1.push(x);
  x=x-1;
}


f=a;
for(s=0;s<a;s++){
    arreglo2.push(f);
    f++;
  }

k=a;
  for(p=0;p<a;p++){
      arreglo3.push(k);
      k=k-1;
    }
r=arreglo3.sort(function() {return Math.random() - 0.5});



var c=0;
function burbupc(arreglo){
    //recorreremos todos los elementos hasta n-1

    c=1;
    for(i=0;i<a-1;i++){
    //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
    c=c+5;
    for(j=i+1;j<a;j++){
        //comparamos
        c=c+5;
        if(arreglo[i]>arreglo[j]){
              c=c+7;
             //guardamos el numero mayor en el auxiliar
             aux=arreglo[i];
             //guardamos el numero menor en el lugar correspondiente
             arreglo[i]=arreglo[j];
             //asignamos el auxiliar en el lugar correspondiente
             arreglo[j]=aux;

        }
    }
    c=c+1;
  }
  c=c+2;
    //return arreglo;

}
var h=0;
function selec(arreglo){


  h=1;
  for(i=0;i < a / 2.0;i++) { // N/2 ???
    h=h+6;
    y = i;
    for(j=i+1;j < a - i;j++) { // N-i ????
      h=h+5;
      if(arreglo[y] > arreglo[j]) {
        y=j;
        h=h+1;
      }
    }
    h=h+1;
    h=h+1;
    if(i!=y) {
      h=h+7;
      aux=arreglo[i];
      arreglo[i]=arreglo[y];
      arreglo[y]=aux;
    }
  }
  h=h+2;
}

var d=0;
function inser(arreglo){
  //a[0] = -32767;
  i = 2;
  while (i <= a) {
   j = i - 1;
   temp = arreglo[i];
   while (temp < arreglo[j]) {
    arreglo[j+1] = arreglo[j];
    j = j - 1;
   }
   arreglo[j+1] = temp;
   i = i + 1;
  }
  return arreglo;
}

function inser2(arreglo){
  for(i=1;i<a;i++){
    j=i-1;
    t=arreglo[j];
    while(j>=0 && t<arreglo[j]){
      arreglo[j+1]=arreglo[j];
      j=j-1;
    }
    arreglo[j+1]=t;
    //i=i+1;
  }
  return arreglo;
}

function inser3(arreglo){
  var temp;
  c=1;
  for (i = 1; i < a; i++) {
          var j = i - 1;
          temp = arreglo[i];
          c += 5;
          while (temp < arreglo[j]) {
            arreglo[j + 1] = arreglo[j];
            j = j - 1;
            c += 8;
          }
          c += 2;
          arreglo[j + 1] = temp;
        c += 5;
        }
        c += 3;
        //console.log(c);
        //console.log(g);
  //var h=new Array(g,c);
  return arreglo;
}

function inser4(arreglo){
  for(i=1;i<a;i++){
    j=i-1;
    t=arreglo[j];
    while(j>=0 && t<arreglo[j]){
      arreglo[j+1]=arreglo[j];
      j=j-1;
    }
    arreglo[j+1]=t;
    //i=i+1;
  }
  return arreglo;
}

if(document.getElementById("b").checked){//Eleccion burbuja

if(document.getElementById("peor").checked){
  document.getElementById('resultados').innerHTML=arreglo1;
  var m = (6*(a*a))-3;
  burbupc(arreglo1);
    document.getElementById('resultados2').innerHTML=c;
    document.getElementById('resultados3').innerHTML=m;
}else if(document.getElementById("mejor").checked){
    document.getElementById('resultados').innerHTML=arreglo2;
    var n = ((5*(a*a)+(7*a)-6)/2);
    var b = burbupc(arreglo2);
    document.getElementById('resultados2').innerHTML=c;
    document.getElementById('resultados3').innerHTML=n;

}else if(document.getElementById("pro").checked){
    document.getElementById('resultados').innerHTML=r;
    var y = ((17*(a*a)+(7*a)-12)/4);
    var u = burbupc(r);
    document.getElementById('resultados2').innerHTML=c;
    document.getElementById('resultados3').innerHTML=y;

}

}else if(document.getElementById("s").checked){//Eleccion seleccion

  if(document.getElementById("peor").checked){
    document.getElementById('resultados').innerHTML=arreglo1;
      var m = (7*(a*(a-1)-((a-2)*(a-1)/2)-(a-1))+(19*(a-1)+3));
    selec(arreglo1);
      document.getElementById('resultados2').innerHTML=h;
      document.getElementById('resultados3').innerHTML=h;
  }else if(document.getElementById("mejor").checked){
      document.getElementById('resultados').innerHTML=arreglo2;
      var n = (4*(a*(a-1)-((a-2)*(a-1)/2)-(a-1))+(19*(a-1)+3));
      n=h;
      var b = selec(arreglo2);
      document.getElementById('resultados2').innerHTML=h;
      document.getElementById('resultados3').innerHTML=h;

  }else if(document.getElementById("pro").checked){
      document.getElementById('resultados').innerHTML=r;
      var yaper = ((a-2)*(a-1)/2)-(a-1)+(19*(a-1)+3);
      yaper=h;
      var u = selec(r);

      document.getElementById('resultados2').innerHTML=h;
      document.getElementById('resultados3').innerHTML=h;

  }

}else if(document.getElementById("i").checked){//Eleccion insercion

  if(document.getElementById("peor").checked){
      document.getElementById('resultados').innerHTML=arreglo1;
      //int x=a+1;
      var m = 8*((a/2)*((a-1)+2)-a)+12*(a-1)+4;
      u=inser3(arreglo1);
      document.getElementById('resultados2').innerHTML=c;
      document.getElementById('resultados3').innerHTML=m;
  }else if(document.getElementById("mejor").checked){
      document.getElementById('resultados').innerHTML=arreglo2;
      var n = (12*(a-1))+4;
      var b = inser3(arreglo2);
      document.getElementById('resultados2').innerHTML=c;
      document.getElementById('resultados3').innerHTML=n;

  }else if(document.getElementById("pro").checked){
      document.getElementById('resultados').innerHTML=r;
      var y = ((8*((a/2)*((a-1)+2)-a))/2)+12*(a-1)+4;
      var u = inser3(r);
      document.getElementById('resultados2').innerHTML=c;
      document.getElementById('resultados3').innerHTML=y;

  }

}else{
  alert("Seleccione un tipo de caso.");
}

}else{
  alert("Ingrese un valor entero positivo")
}
}
