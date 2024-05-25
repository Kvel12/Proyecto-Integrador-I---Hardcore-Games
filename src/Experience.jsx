import { FoxProvider } from "./context/FoxContext";
import RoutesGabrielGame from "./routes/RoutesGabrielGame"

const Experience = () => {
    return (
        <FoxProvider>
            <RoutesGabrielGame /> 
        </FoxProvider>

    )
}

export default Experience;