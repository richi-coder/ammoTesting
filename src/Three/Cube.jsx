import { useEffect } from "react"
import { useContextAmmo } from "../AmmoContext/AmmoContext"
import { createCube } from "../Ammo/createCube";

function Cube({ mass, dimensions, position, quaternion, scale}) {
    const useAmmo = useContextAmmo();

    const cubeData = {
        mass,
        dimensions,
        position,
        quaternion,
        scale
    }

    useEffect(() => {
        createCube(useAmmo.AmmoState, cubeData)
    }, [])
    

  return (
    <mesh>
        <boxGeometry />
        <meshBasicMaterial />
    </mesh>
  )
}

export default Cube