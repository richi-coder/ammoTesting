import { Canvas } from '@react-three/fiber'
import Scene from './Three/Scene'
import Ammo from "ammojs3";
import { useEffect } from 'react';
import { useContextAmmo } from './AmmoContext/AmmoContext';
import { AmmoBegin } from './Ammo/completeAmmo';

function App() {
  const useAmmo = useContextAmmo();

  useEffect(() => {
    Ammo().then(Ammo => {
      AmmoBegin(Ammo)
      // const physicsUniverse = initPhysicsUniverse(Ammo)
      // useAmmo.updateAmmoState({ Ammo, physicsUniverse, tmpTransformation: new Ammo.btTransform() })
    })
  }, [])
  

  
  return (
    <Canvas frameloop='demand'>
      <Scene />
    </Canvas>
  )
}

export default App
