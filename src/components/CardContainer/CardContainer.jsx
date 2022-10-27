import "../../css/cardContainer.css"
import Card from "../Card/Card";

function CardContainer({data}) {
    const mappedCards = data.map((card) => {
        return <Card src={card.cover} title={card.title} id={card.id} key={card.id} />
    })

  return (
    <div className="card-container">
        {mappedCards}
    </div>
  );
}

export default CardContainer;
