import { createContext, useContext, useState } from "react"


export const ContextAmmo = createContext();

export const useContextAmmo = () => {
    return useContext(ContextAmmo)
}

function AmmoContext({ children }) {
    const [AmmoState, setAmmoState] = useState({
        Ammo: null,
        physicsUniverse: null,
        solids: {}
    })

    const updateAmmoState = (props) => {
        setAmmoState({
            ...AmmoState,
            ...props
        })
    }

    const useAmmoData = {
        AmmoState,
        updateAmmoState
    }


  return (
    <ContextAmmo.Provider value={useAmmoData}>
        {children}
    </ContextAmmo.Provider>
  )
}

export default AmmoContext