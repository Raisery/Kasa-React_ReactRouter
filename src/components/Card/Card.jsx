import { Link } from "react-router-dom";
import "../../css/card.css"

function Card({src, title, id}) {
  return (
    <Link to={`/Fiche-Logement/${id}`} className="card" id={id}>
      <p>{title}</p>
      <img src={src} alt={title} />
    </Link>
  );
}

export default Card;
