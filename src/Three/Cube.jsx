import { useEffect } from "react"
import { useContextAmmo } from "../AmmoContext/AmmoContext"
import { createCube } from "../Ammo/createCube";

function Cube({ mass, dimensions, position, quaternion, scale}) {
    const useAmmo = useContextAmmo();
    const setAmmo = useAmmo.updateAmmoState;
    const Ammo = useAmmo.AmmoState.Ammo;
    const Universe = useAmmo.AmmoState.physicsUniverse;
    const bodies = useAmmo.AmmoState.bodies;

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
            setAmmo({ physicsUniverse: Universe.addRigidBody(cubeCreated), bodies: [...bodies, cubeCreated] })
            console.log('DONE');
        }
    }, [useAmmo.AmmoState.Ammo])
    

  return (
    <mesh position={position} quaternion={quaternion}>
        <boxGeometry args={dimensions} />
        <meshBasicMaterial />
    </mesh>
  )
}

export default Cube