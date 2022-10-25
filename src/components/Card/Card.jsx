import "../../css/card.css"

function Card({src, title, id}) {
  return (
    <div className="card" id={id}>
      <p>{title}</p>
      <img src={src} alt={title} />
    </div>
  );
}

export default Card;
