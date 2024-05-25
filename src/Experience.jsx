import { AuthProvider } from "./context/AuthContext";
import { FoxProvider } from "./context/FoxContext";
import RoutesGabrielGame from "./routes/RoutesGabrielGame"

const Experience = () => {
    return (
        <AuthProvider>
        <FoxProvider>
            <RoutesGabrielGame />
        
        </FoxProvider>
        </AuthProvider>
    )
}

export default Experience;