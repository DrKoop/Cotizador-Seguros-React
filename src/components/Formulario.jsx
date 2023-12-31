import { Fragment, useState } from "react"
import Error from "./Error"
import { MARCAS , YEARS, PLANES} from "../constants"
import useCotizador from "../hooks/useCotizador"


const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro , setCantidad , cantidad } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios.')
            return
        }

        setError('')
        cotizarSeguro()
    }

    //const [cantidad, setCantidad ] = useState(0)

    //console.log(cantidad)
    
  return (
    <>
        {error && <Error/>}
        <form 
            onSubmit={handleSubmit}
        >   
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Introduzca la Cantidad :</label>
            <input
                type="number"
                className="w-full p-3 bg-white border border-gray-200"
                value={ cantidad }
                onChange={ e => setCantidad( Number( e.target.value ) ) }
            />
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select 
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={ e => handleChangeDatos(e)}
                    value={datos.marca}
                >
                <option value="">-- Seleccione Marca --</option>
                    {MARCAS.map( marca => (
                        <option 
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                <select 
                name="year"
                className="w-full p-3 bg-white border border-gray-200"
                onChange={ e => handleChangeDatos(e)}
                value={datos.year}
                >
                <option value="">-- Selecciona Año --</option>
                    {YEARS.map( year => (
                        <option 
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Planes</label>
                <div className="flex gap-3 items-center">
                        { PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={ e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                </div>
            </div>

            <input 
                type="submit"
                value="Cotizar"
                className="w-full p-3 bg-indigo-500 hover:bg-indigo-600 text-white transition-colors cursor-pointer font-bold uppercase"
            />

        </form>
    </>
  )
}

export default Formulario
