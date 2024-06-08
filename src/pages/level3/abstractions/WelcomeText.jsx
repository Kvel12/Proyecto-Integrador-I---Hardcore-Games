import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
    const text = "Llega al Arbol, evita los enemigos";

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 2]}

        >
        <Center
            position={props.position}
            rotation={[0, Math.PI, 0]}  // Rotación de 180° en el eje Y
        >
            <Text3D
                font={"/assets/fonts/Triforce.json"}
                bevelEnabled
                bevelSize={0.005}
                bevelThickness={0.01}
                height={0.1}
                letterSpacing={0.05}
                size={0.2}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
        </Float>
    )
}
export default WelcomeText;