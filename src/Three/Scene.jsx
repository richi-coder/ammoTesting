import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { useContextAmmo } from "../AmmoContext/AmmoContext"
import { updatePhysicsUniverse } from "../Ammo/updatePhysicsUniverse"
import { useEffect } from "react"

function Scene() {
  const useAmmo = useContextAmmo();
  const Ammo = useAmmo.AmmoState.Ammo;
  const physicsUniverse = useAmmo.AmmoState.physicsUniverse;
  const bodies = useAmmo.AmmoState.bodies;
  const tmpTransformation = useAmmo.AmmoState.tmpTransformation;


  // useEffect(() => {
    
  // if (Ammo) {
  
  useFrame((state) => {
    console.log(state, 'state');
    if (Ammo) {
      const delta = state.clock.getDelta()
      console.log(bodies, 'test');
        
      
        // const delta = 0.5;
        const result = updatePhysicsUniverse(physicsUniverse, bodies[0], tmpTransformation, delta)
        // console.log(position, quaternion, 'watch');
      }
  })
  
//   }
// }, [Ammo])

  return (
    <>
      <OrbitControls />
      <Ground />
      <Cube mass={1} position={[10,0,0]} dimensions={[10,10,10]} scale={1} quaternion={[0,0,0,1]} />
      <PerspectiveCamera makeDefault position={[100,100,100]} />
    </>
  )
}

export default Scene