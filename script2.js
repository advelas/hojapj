let puntoAlma = 3

function stat(){
    let atributo = prompt("Indique su nivel de estadística (entre 0 a 3)")
        if (atributo <= puntoAlma){
        puntoAlma = puntoAlma - atributo;
        document.write("stat = "+ atributo);     
        return true;   
    }
    else{
        alert("No tienes tantos puntos de alma");
        return false;   
    }}


    do {
        result = stat()
    }
    while (!result)