function anioBisiesto(anio){
    if(anio % 4 == 0) {
        if(anio % 100 == 0) {
            if(anio % 400 == 0) {
                console.log("El año es bisiesto");
            }
        } else {
            console.log("El año es bisiesto");
        }
    } else {
        console.log("El año no es bisiesto");
    }
}

anioBisiesto(2024);
anioBisiesto(2025);