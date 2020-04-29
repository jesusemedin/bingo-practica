var fichasBingo=createArray();
var numeroSorteo=0;

function createArray(){
    var numerosBingo = []
    
    for(i=0;i<75;i++){
     numerosBingo.push(i+1);
    }

    for(i=0;i<75;i++){
        var posicionCambiada= random(0,74);
        var temporal = numerosBingo[i];
        numerosBingo[i] = numerosBingo[posicionCambiada];
        numerosBingo[posicionCambiada]= temporal;
    }

    return numerosBingo;
}

function random (minimo,maximo)
{
var numerorandom = Math.floor(( Math.random() * (maximo - minimo ) + 1) + minimo)
return numerorandom
}

function sorteofichas ()
{
    if(numeroSorteo < 75){
    numeronuevo = fichasBingo[numeroSorteo];

    if (numeronuevo <= 15 ) 
    {
    letra = "B";
    }
    else if (numeronuevo >= 16 && numeronuevo <=30)
    {
    letra = "I" ;   
    }
    else if (numeronuevo >= 31 && numeronuevo <= 45)
    {
    letra = "N";
    }
    else if(numeronuevo >= 46 && numeronuevo <= 60)
    {
    letra = "G";
    }
    else if(numeronuevo >= 61 && numeronuevo <= 75)
    {
    letra = "O";
    }

    var resultadofinal = letra + "" + numeronuevo;
    document.getElementById('resultado').innerHTML = resultadofinal;
    numeroSorteo = numeroSorteo +1;
}else{
    alert("******** Fin del juego *************")
}
}





/* var numeronuevo = random (0,75);
var letra;

var numeronuevo = random(0,75)
    var usados = []
    usados.push(numero)
    var letra;
    var resultado = usados

    while(usados.length < 75)
    {
        var numero = random(0,75)
        usados.push(numero)
    }

    console.log(usados)


if (numeronuevo <= 15 ) 
    {
    letra = "B"
    }
    else if (numeronuevo >= 16 && numeronuevo <=30)
    {
    letra = "I"    
    }
    else if (numeronuevo >= 31 && numeronuevo <= 45)
    {
    letra = "N"
    }
    else if(numeronuevo >= 46 && numeronuevo <= 60)
    {
    letra = "G"
    }
    else if(numeronuevo >= 61 && numeronuevo <= 75)
    {
    letra = "O"
    }

    var resultadofinal = letra + "" + numeronuevo
    document.getElementById('resultado').innerHTML = resultadofinal;
} */