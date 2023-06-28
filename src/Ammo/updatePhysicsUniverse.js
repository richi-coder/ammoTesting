
export const updatePhysicsUniverse = (physicsUniverse, bodies, tmpTransformation, delta) => {

    physicsUniverse.stepSimulation( delta, 10 );
    // for (let i = 0; i < bodies.length; i++) {
        const motionState = bodies.getMotionState();
        if ( motionState ) {
            motionState.getWorldTransform( tmpTransformation );
            let position = tmpTransformation.getOrigin();
            let quaternion = tmpTransformation.getRotation();
            // body.current.position = position;
            // body.current.quaternion = quaternion;
            // Graphics_Obj.position.set( new_pos.x(), new_pos.y(), new_pos.z() );
            // Graphics_Obj.quaternion.set( new_qua.x(), new_qua.y(), new_qua.z(), new_qua.w() );
            return [position, quaternion];
        }
        return [null, null];
    // }

    
}