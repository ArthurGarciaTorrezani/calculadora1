function insert(num){ /* inserir o btn no resultado*/ 
   var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero+num
}

function limpar(){/* limpar tudo*/ 
    document.getElementById('resultado').innerHTML = ''
}

function back(){/* apagar o ultimo caractere digitado*/ 
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
     document.getElementById('resultado').innerHTML = eval(resultado)
        
    }
    else{
        document.getElementById('resultado').innerHTML = "Digite um valor"
    }
}