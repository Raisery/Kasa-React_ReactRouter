import "../../css/error404.css"
import { Link } from "react-router-dom";

function Error() {
    return (
        <main>
            <div className="error_404">
                <h1>404</h1>
                <div>
                    <p>Oups! La page que</p>
                    <p> vous demandez n'existe pas</p>
                </div>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </div>
        </main>
        
    )
}
 
export default Error