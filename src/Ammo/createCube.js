export const createCube = (Ammo, cubeData) => {
    // ------ Physics Universe - Ammo.js ------
    const { mass, position, quaternion, dimensions, scale } = cubeData;
    let transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin( new Ammo.btVector3( position.x, position.y, position.z ) );
    transform.setRotation( new Ammo.btQuaternion( quaternion.x, quaternion.y, quaternion.z, quaternion.w ) );
    let defaultMotionState = new Ammo.btDefaultMotionState( transform );
    
    // Geometric structure of collision
    let structColShape = new Ammo.btBoxShape( new Ammo.btVector3( scale *0.5, scale*0.5, scale*0.5 ) );
    structColShape.setMargin( 0.05 );

    // Inertia
    let localInertia = new Ammo.btVector3( 0, 0, 0 );
    structColShape.calculateLocalInertia( mass, localInertia );

    // Create rigid body
    let RBody_Info = new Ammo.btRigidBodyConstructionInfo( mass, defaultMotionState, structColShape, localInertia );
    let RBody = new Ammo.btRigidBody( RBody_Info );

    return RBody;
}