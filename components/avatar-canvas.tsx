"use client";
import {
    Html,
    OrbitControls,
    Preload,
    useAnimations,
    useGLTF,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";

const Avatar = () => {
    const [index, setIndex] = useState(0);
    const avatar = useGLTF("/avatar_animation.glb");
    const { actions, names } = useAnimations(avatar.animations, avatar.scene);

    useEffect(() => {
        const currentAction = actions[names[index]];
        if (currentAction) {
            currentAction.clampWhenFinished = true;
            currentAction.loop = THREE.LoopPingPong;
            currentAction.reset().fadeIn(0.5).play();

            // Set a timeout to change the loop mode after 5 seconds
            const timeoutId = setTimeout(() => {
                if (currentAction.isRunning()) {
                    currentAction.loop = THREE.LoopOnce;
                }
            }, 7000);

            return () => {
                clearTimeout(timeoutId);
                currentAction.fadeOut(0.5);
            };
        }
    }, [index, actions, names]);

    return (
        <group>
            <primitive
                object={avatar.scene}
                scale={1.8}
                position-y={-1.8}
                rotation-y={-0.3}
                position-x={0.4}
                position-z={1.7}
                rotation-x={Math.PI / 7}
            />
        </group>
    );
};

export const AvatarCanvas = () => {
    return (
        <Canvas dpr={[0, 2]} className="h-full">
            <ambientLight intensity={2.1} />
            <pointLight position={[1, 1, 1]} />
            <OrbitControls enabled={false} />
            <Suspense fallback={null}>
                <Avatar />
            </Suspense>
            <Avatar />
        </Canvas>
    );
};
