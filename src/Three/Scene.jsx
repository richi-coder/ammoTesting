import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"
import Cube from "./Cube"

function Scene() {
  return (
    <>
      <OrbitControls />
      <Ground />
      <Cube />
      <PerspectiveCamera makeDefault position={[100,100,100]} />
    </>
  )
}

export default Scene