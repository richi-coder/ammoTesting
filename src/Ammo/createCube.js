export const createCube = (Ammo, cubeData) => {
    // ------ Physics Universe - Ammo.js ------
    const { mass, position, quaternion, dimensions } = cubeData;
    let transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin( new Ammo.btVector3( position[0], position[1], position[2] ) );
    transform.setRotation( new Ammo.btQuaternion( quaternion[0], quaternion[1], quaternion[2], quaternion[3] ) );
    let defaultMotionState = new Ammo.btDefaultMotionState( transform );
    
    // Geometric structure of collision
    let structColShape = new Ammo.btBoxShape( new Ammo.btVector3( dimensions[0], dimensions[1], dimensions[2] ) );
    structColShape.setMargin( 0.05 );

    // Inertia
    let localInertia = new Ammo.btVector3( 0, 0, 0 );
    structColShape.calculateLocalInertia( mass, localInertia );

    // Create rigid body
    let RBody_Info = new Ammo.btRigidBodyConstructionInfo( mass, defaultMotionState, structColShape, localInertia );
    let RBody = new Ammo.btRigidBody( RBody_Info );
    
    return RBody;
}