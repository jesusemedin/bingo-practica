function sorteofichas()
    {
        //Creamos funcion que genere numeros aleatorios
        function random(minimo,maximo)
        {
            var numerorandom = Math.floor(( Math.random() * (maximo - minimo ) + 1) + minimo)
            return numerorandom
        }

        //Asignamos esos numeros aleatorios a la vaariables numeros estableciendo parametros entre 0 y 75
        var numero = random(0,75)
        var letra;

        //Aplicamos condiciones al programa de la siguiente manera:
        if (numero <= 15 ) 
        {
            letra = "B"
        }
        else if (numero >= 16 && numero <=30) 
        {
            letra = "I"    
        }
        else if (numero >= 31 && numero <= 45)
        {
            letra = "N"
        }
        else if(numero >= 46 && numero <= 60)
        {
            letra = "G"
        }
        else if(numero >= 61 && numero <= 75)
        {
            letra = "O"
        }

        //Creamos una variable letra para almacenar los datos que se hicieron atraves de las condiciones

        //Generamos una variable resultado para que sea llamada por la etiqueta
        //document.getElementById('resultado').innerHTML = resultado;
        // en HTML <p><div id="resultado">Aqui se mostrara el resultado</div></p>
        var resultado =letra + "" + numero


        document.getElementById('resultado').innerHTML = resultado;
    }