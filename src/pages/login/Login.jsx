import "./stylesLogin.css";
import { useNavigate } from 'react-router-dom';
export default function Login() {

    const navigate = useNavigate();

    const onHandleButtonStart = () => {
        navigate('/level1');
    };

    return (
        <div className="container">
            <div className="imagen-gabriel">
                <img src="/assets/images/Fox2.png" alt="Fox Image"/>
            </div>
            <div className="content">
                <div className="Gabriel-text-primary">
                    Adventures of Gabriel<br/>
                </div>
                <div className="Gabriel-text-secondary">
                    Elena's Rescue<br/><br/>
                </div>
                <div onClick={onHandleButtonStart} className="button-start">
                    <button>Empezar</button>
                </div>
            </div>
        </div>
    );

}