import { Canvas } from '@react-three/fiber'
import Scene from './Three/Scene'
import Ammo from "ammojs3";
import { useEffect } from 'react';
import { useContextAmmo } from './AmmoContext/AmmoContext';
import initPhysicsUniverse from './Ammo/initPhysicsUniverse';

function App() {
  const useAmmo = useContextAmmo();

  useEffect(() => {
    Ammo().then(Ammo => {
      useAmmo.initAmmo(Ammo)
      initPhysicsUniverse(Ammo)
    })
  }, [])
  

  
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App
