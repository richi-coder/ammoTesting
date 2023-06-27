import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"
import Cube from "./Cube"

function Scene() {
  return (
    <>
      <OrbitControls />
      <Ground />
      <Cube mass={1} position={[10,0,0]} dimensions={[1,1,1]} scale={1} quaternion={[0,0,0,1]} />
      <PerspectiveCamera makeDefault position={[100,100,100]} />
    </>
  )
}

export default Scene