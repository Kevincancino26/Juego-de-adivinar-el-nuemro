
let numeroSecreto = 0;
let numerointentos=0;
let numeroMAximo=10;
//console.log(numeroSecreto);

let listaNumerosSorteados=[];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function VerificaciondeValor() {
    let numeroUsuario=parseInt( document.getElementById('valorUsuario').value);
    
    //console.log(numerointentos);

    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el nuemro en ${numerointentos} ${(numerointentos===1)? 'vez' : 'veces'}`);
    
   document.getElementById('reiniciar').removeAttribute('disabled');

     //el usuario no acerto 
    }else{
        if (numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El nuemero secreto es meyor');
    }
   numerointentos++;
   limpiarCaja();
    return;
}}

//function limpiarCaja() {
   // let valorCaja= document.querySelector('#valorUsuario');
  //  valorCaja.value= '';

    
//} otra alternativa para limpiar la caja seria

function limpiarCaja() {
   document.querySelector('#valorUsuario').value= '';
   

    
}

function generarNumeroSecreto() {
    let numeroGenerado=  Math.floor(Math.random()*numeroMAximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si la lista se llena se debe parar el juego 
   if (listaNumerosSorteados.length==numeroMAximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros, reinicie el programa')
   }else{

        //si el nuemro generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
   }
}
function condicionesInicial() {
asignarTextoElemento('h1','Juego de adivinar el nuemero!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMAximo}` );
numeroSecreto = generarNumeroSecreto();
numerointentos=1;   
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    /*indicar mensaje de intervalo
    generar el numero aleatorio
    iniciar el numero intentos*/
    condicionesInicial();
    //desabilitar el boton
    document.getElementById('reiniciar').setAttribute('disabled','tru');
}


condicionesInicial(); 



