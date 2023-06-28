function initPhysicsUniverse(Ammo) {
    const collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    const dispatcher             = new Ammo.btCollisionDispatcher(collisionConfiguration);
    const overlappingPairCache    = new Ammo.btDbvtBroadphase();
    const solver                  = new Ammo.btSequentialImpulseConstraintSolver();
    const physicsUniverse               = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
    physicsUniverse.setGravity(new Ammo.btVector3(0, -75, 0));
    // physicsUniverse.stepSimulation(1/60,10)
    return physicsUniverse;
}

export default initPhysicsUniverse;