import Ammo from 'ammojs3'
import { Vector3 } from "three"

export const AmmoBegin = (Ammo) => {

    const scale = 1
    const mass = 10

    const position = new Vector3(0,50,0)
    const quaternion = {
        x:0,
        y:0,
        z:0,
        w:1
    }

    const collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    const dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    const overlappingPairCache = new Ammo.btDbvtBroadphase();
    const solver = new Ammo.btSequentialImpulseConstraintSolver();
    const physicsUniverse = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
    physicsUniverse.setGravity(new Ammo.btVector3(0, -10, 0));
    physicsUniverse.stepSimulation(1/60,10)

    // ------ Physics Universe - Ammo.js ------
    let transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(position.x, position.y, position.z));
    transform.setRotation(new Ammo.btQuaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w));
    let defaultMotionState = new Ammo.btDefaultMotionState(transform);

    let structColShape = new Ammo.btBoxShape(new Ammo.btVector3(scale * 0.5, scale * 0.5, scale * 0.5));
    structColShape.setMargin(0.05);

    let localInertia = new Ammo.btVector3(0, 0, 0);
    structColShape.calculateLocalInertia(mass, localInertia);

    let RBody_Info = new Ammo.btRigidBodyConstructionInfo( mass, defaultMotionState, structColShape, localInertia );
    let RBody = new Ammo.btRigidBody( RBody_Info );

    physicsUniverse.addRigidBody(RBody);

    let tmpTransformation = new Ammo.btTransform();
    const delta = 1 / 60;

    function render() {
    // const gameLoop = () => {

        let motionState = RBody.getMotionState();
        if (motionState) {
            motionState.getWorldTransform(tmpTransformation);
            let pos = tmpTransformation.getOrigin();
            let quat = tmpTransformation.getRotation();
            console.log(pos.x(), pos.y(), pos.z(), 'check');
        }
        // setTimeout(gameLoop, delta);

    // }
    // gameLoop(delta)

    
        
        // updatePhysicsUniverse( delta );
                
        // renderer.render( scene, camera );
        requestAnimationFrame( render );
}
    render()
}

Ammo().then(Ammo => AmmoBegin(Ammo))