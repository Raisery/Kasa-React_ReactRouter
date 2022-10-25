import logo from "../../assets/logo.svg"
import "../../css/header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt='Logo' />
        <div className="header__menu">
            <Link to='/'>Accueil</Link>
            <Link to='/About'>A Propos</Link>
        </div>
    </header>
  );
}

export default Header;
