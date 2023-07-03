import { Canvas } from '@react-three/fiber'
import Scene from './Three/Scene'
import Ammo from "ammojs3";
import { useEffect } from 'react';
import { useContextAmmo } from './AmmoContext/AmmoContext';
import { AmmoBegin } from './Ammo/completeAmmo';

function App() {
  const useAmmo = useContextAmmo();
  console.log('hey');

  useEffect(() => {
    Ammo().then(Ammo => {
      console.log('amoo loaded');
      AmmoBegin(Ammo)
   
    })
  }, [])
  

  
  return (
    <Canvas frameloop='demand'>
      <Scene />
    </Canvas>
  )
}

export default App
