import { OrbitControls } from "@react-three/drei"
import Ground from "./Ground"

function Scene() {
  return (
    <>
    <OrbitControls />
    <Ground />
    </>
  )
}

export default Scene