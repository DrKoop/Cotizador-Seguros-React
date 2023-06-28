
//Obtiene la FECHA Actual, y la resta desde la data introducidad por el usuario
export function obtenerDiferenciaYear(dataFromUser){
    return new Date().getFullYear() - dataFromUser;
}

//Calulcar el porcentaje, dependiendo la marca
export function calcularPorcentajePorMarca(marca){
    let incremento;
    //Los id's provienen como STRING desde nuestro diccionario de constantes
    switch(marca){
        case '1':
            incremento = 1.3;
            break;
        case '2' :
            incremento = 1.15;
            break;
        case '3':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//Calula dependiendo el PLAN

export function calcularPlan(plan){
    return plan === '1' ? 1.2 : 1.5;
}


//Formates Cantidades

export function formatearDinero(cantidad){
    return cantidad.toLocaleString({
        style : 'currency',
        currency : 'USD'  
    })
}