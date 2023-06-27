import { createContext, useContext, useState } from "react"


export const ContextAmmo = createContext();

export const useContextAmmo = () => {
    return useContext(ContextAmmo)
}

function AmmoContext({ children }) {
    const [AmmoState, setAmmoState] = useState(null)

    const initAmmo = (Ammo) => {
        setAmmoState(Ammo)
    }

    const useAmmoData = {
        Ammo: AmmoState,
        initAmmo
    }


  return (
    <ContextAmmo.Provider value={useAmmoData}>
        {children}
    </ContextAmmo.Provider>
  )
}

export default AmmoContext