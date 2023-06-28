import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"


const AppSeguro = () => {
  
  const { resultado, cargando } = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario/>

            { cargando ? <Spinner/> : <Resultado/> }

            <div className="bg-gray-100 text-center mt-5 p-5 shadow">
              <p className="text-black font-bold">Manejamos las siguientes tasas:</p>
              <p>Autos Europeos con una tasa del 30%</p>
              <p>Autos Americanos con una tasa del 15%</p>
              <p>Autos Asiaticos con una tasa del 5% </p>
            </div>
        </main>
    </>
  )
}

export default AppSeguro