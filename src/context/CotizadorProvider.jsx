import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularPorcentajePorMarca, calcularPlan, formatearDinero } from "../helpers";
import Formulario from "../components/Formulario";


const CotizadorContext = createContext()

//Lugar donde nacen o la fuente de los datos

const CotizadorProvider = ({children}) => {

    const [ datos , setDatos] = useState({
        marca : '',
        year : '',
        plan : ''
    })



    const [ error, setError ] = useState('')
    const [cargando, setCargando] = useState(false)


    const handleChangeDatos = e => {
        setDatos({

            ...datos,
            [e.target.name] : e.target.value

        })
    }

    const [cantidad, setCantidad ] = useState(0)


    const [ resultado, setResultado ] = useState(0)

    const cotizarSeguro = () => {
        //Informacion Base 
        let resultado = cantidad

        //Obtener diferencia de años

        const diferencia = obtenerDiferenciaYear(datos.year)

        //Restando el 3% por cada año
        //x = x - y
        resultado = resultado - ( ( diferencia * 3 ) * resultado) / 100

        //Europeo 30%
        //Americano 15%
        //Asiatico 5 %
        resultado *= calcularPorcentajePorMarca(datos.marca)

        // Plan baisco aumenta 20%
        // Plan Completo aumenta un 50%
        resultado *= calcularPlan(datos.plan)

        //Formatear decimales de las cantidades
        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 1500);

    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando,
                cantidad,
                setCantidad
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext
