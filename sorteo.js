function sorteofichas ()
{
function random (minimo,maximo)
{
var numerorandom = Math.floor(( Math.random() * (maximo - minimo ) + 1) + minimo)
return numerorandom
}

var numeronuevo = random (0,75);
var letra;


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
}