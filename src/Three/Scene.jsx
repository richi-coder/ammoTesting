import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Ground from "./Ground"

function Scene() {
  return (
    <>
      <OrbitControls />
      <Ground />
      <PerspectiveCamera makeDefault position={[100,100,100]} />
    </>
  )
}

export default Scene