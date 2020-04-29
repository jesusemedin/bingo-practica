function sorteofichas ()
{
function random (minimo,maximo)
{
var numerorandom = Math.floor(( Math.random() * (maximo - minimo ) + 1) + minimo)
return numerorandom
}

var numero = random (0,75);
var usados = [];
usados.push(numero);
var letra;
var resultado = usados;

if (usados <= 15 ) 
    {
    letra = "B"
    }
    else if (usados >= 16 && usados <=30)
    {
    letra = "I"    
    }
    else if (usados >= 31 && usados <= 45)
    {
    letra = "N"
    }
    else if(usados >= 46 && usados <= 60)
    {
    letra = "G"
    }
    else if(usados >= 61 && usados <= 75)
    {
    letra = "O"
    }

    //var resultado = letra + "" + numero

    document.getElementById('resultado').innerHTML = letra + "" + resultado;
}