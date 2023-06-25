import { Fragment, useContext } from "react"
import { MARCAS , YEARS, PLANES} from "../constants"
import CotizadorContext from "../context/CotizadorProvider"


const Formulario = () => {
    const {hol} = useContext(CotizadorContext)
    console.log(hol)
  return (
    <>
        <form action="">
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select 
                name="marca"
                className="w-full p-3 bg-white border border-gray-200"
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
                name="marca"
                className="w-full p-3 bg-white border border-gray-200"
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