function Ground() {
  return (
    <mesh rotation={[.5,0,0]}>
        <planeGeometry args={[50,50,50]} />
        <meshBasicMaterial color='gray' />
    </mesh>
  )
}

export default Ground