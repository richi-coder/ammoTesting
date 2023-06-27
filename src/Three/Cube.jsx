import { useEffect } from "react"

function Cube() {
    const cubeDimensions = {
        x: 1,
        y: 1,
        z: 1
    }


    useEffect(() => {
        
    }, [])
    

  return (
    <mesh>
        <boxGeometry />
        <meshBasicMaterial />
    </mesh>
  )
}

export default Cube