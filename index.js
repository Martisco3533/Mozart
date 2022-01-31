function calcularPresupuesto1(personas) {
    return personas * 270;
}

function calcularPresupuesto2(personas) {
    return personas * 280;
}

function calcularPresupuesto3(personas) {
    return personas * 300;
}

function calcularPresupuesto4(personas) {
    return personas * 320;
}

function calcularPresupuesto5(personas) {
    return personas * 350;
}

function calcularMozo(personas) {
    return personas / 20;
}

function calcularMozoMonto(mozos) {
    return mozos * 1500;
}

function calcularPresupuestoMozart() {
    const inputPerson= document.getElementById("InputPerson");
    const valuePerson = inputPerson.value;
 
    const montoPresupuesto1 = parseInt(calcularPresupuesto1(valuePerson));
    const montoPresupuesto2 = parseInt(calcularPresupuesto2(valuePerson));
    const montoPresupuesto3 = parseInt(calcularPresupuesto3(valuePerson));
    const montoPresupuesto4 = parseInt(calcularPresupuesto4(valuePerson));
    const montoPresupuesto5 = parseInt(calcularPresupuesto5(valuePerson));
    const cantidadMozo = parseInt(calcularMozo(valuePerson));
    const montoMozo = calcularMozoMonto(cantidadMozo);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El presupuesto para " + valuePerson + " personas es el siguiente : \n" + "- Pizza $" + montoPresupuesto1 + "." + 
    "\n" + "- Pizza y fainá $" + montoPresupuesto2 + "." + 
    "\n" + "- Pizza y calzone $" + montoPresupuesto3 + "." + 
    "\n" + "- Pizza y chivito $" + montoPresupuesto4 + "." + 
    "\n" + "- Pizza, calzone y chivito $" + montoPresupuesto5 + "." + "\n" + "\n" + "Adicionalmente se les cobra $500 por la carga de leña." + "\n" + 
    "La cantidad de mozos extra es de " + cantidadMozo + " con un costo adicional de $1500 c/u, totalizando $" + montoMozo + 
    ". \n" + "\n" + "El costo de viático por traslado se debe consultar con Rodrigo o Martín. \n" + 
    "En caso de estar de acuerdo con el presupuesto, tomar captura de pantalla y enviarlo vía WhatsApp para confirmar disponibilidad de fecha.";

    }

  

    