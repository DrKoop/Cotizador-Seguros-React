import { createContext } from "react";


const CotizadorContext = createContext()

//Lugar donde nacen o la fuente de los datos

const CotizadorProvider = ({children}) => {

    const hol = "test"

    return(
        <CotizadorContext.Provider
            value={{
                hol
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