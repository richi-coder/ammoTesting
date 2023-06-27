function Ground() {
  return (
    <mesh rotation={[.5,0,0]}>
        <planeGeometry />
        <meshBasicMaterial color='gray' />
    </mesh>
  )
}

export default Ground