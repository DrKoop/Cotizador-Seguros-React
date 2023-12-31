import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const { error } = useCotizador() 
  return (
    <div className="border p-3 text-center border-red-400 bg-red-100 text-red-700">
        <p>{error}</p>
    </div>
  )
}

export default Error