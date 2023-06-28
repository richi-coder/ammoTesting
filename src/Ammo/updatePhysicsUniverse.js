
export const updatePhysicsUniverse = (physicsUniverse, bodies, tmpTransformation, delta) => {

    // physicsUniverse.stepSimulation( delta, 10 );
    // for (let i = 0; i < bodies.length; i++) {
        const motionState = bodies.getMotionState();
        if ( motionState ) {
            motionState.getWorldTransform( tmpTransformation );
            let position = tmpTransformation.getOrigin();
            let quaternion = tmpTransformation.getRotation();
            return [position, quaternion];
        }
        return [null, null];
    // }

    
}