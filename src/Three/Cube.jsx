import { useEffect } from "react"
import { useContextAmmo } from "../AmmoContext/AmmoContext"
import { createCube } from "../Ammo/createCube";

function Cube({ mass, dimensions, position, quaternion, scale}) {
    const useAmmo = useContextAmmo();
    const setAmmo = useAmmo.updateAmmoState;
    const Ammo = useAmmo.AmmoState.Ammo;
    const Universe = useAmmo.AmmoState.phyisicsUniverse;

    const cubeData = {
        mass,
        dimensions,
        position,
        quaternion,
        scale
    }

    useEffect(() => {
        if(useAmmo.AmmoState.Ammo) {
            const cubeCreated = createCube(Ammo, cubeData);
            setAmmo({ phyisicsUniverse: Universe.addRigidBody(cubeCreated) })
        }
    }, [useAmmo.AmmoState.Ammo])
    

  return (
    <mesh position={position}>
        <boxGeometry args={dimensions} />
        <meshBasicMaterial />
    </mesh>
  )
}

export default Cube