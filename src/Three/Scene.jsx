import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"
import Cube from "./Cube"
import { useContextAmmo } from "../AmmoContext/AmmoContext"
import { updatePhysicsUniverse } from "../Ammo/updatePhysicsUniverse"
import { useEffect } from "react"

function Scene() {
  const useAmmo = useContextAmmo();
  const Ammo = useAmmo.AmmoState.Ammo;
  const physicsUniverse = useAmmo.AmmoState.physicsUniverse;
  const bodies = useAmmo.AmmoState.bodies;
  const tmpTransformation = useAmmo.AmmoState.tmpTransformation;


//   useEffect(() => {
    
//   if (Ammo) {
  
//   // useFrame((state) => {
//     const gameLoop = () => {
//     if (bodies.length > 0) {
//       // const delta = state.clock.getDelta()
//       const delta = 1 / 60
//       // console.log(bodies, 'test');
        
      
//         // const delta = 0.5;
//         const [ position, quaternion ] = updatePhysicsUniverse(physicsUniverse, bodies[0], tmpTransformation, delta)
//         // console.log(position.x(), position.y(), 'watch');
//       }
//       setTimeout(gameLoop, 16);
//     }
//     gameLoop()
//   // })
  
//   }
// }, [bodies[0]])

  return (
    <>
      <OrbitControls />
      <Ground />
      <Cube mass={1} position={[0,10,0]} dimensions={[10,10,10]} scale={1} quaternion={[0,0,0,1]} />
      <PerspectiveCamera makeDefault position={[100,100,100]} />
    </>
  )
}

export default Scene