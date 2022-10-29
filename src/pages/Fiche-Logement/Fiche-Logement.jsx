import { useParams } from "react-router-dom"
import Dropdown from "../../components/Dropdown/Dropdown";
import "../../css/fiche-logement.css"
import data from '../../data.json'
import Error from "../Error404/Error404";
import Rating from "../../components/Rating/Rating";

function FicheLogement() {
    const { id } = useParams();
    let item = undefined;
    for(let logement of data) {
        if(logement.id === id) item = logement
    }
    
    if(!item) return <Error />
    const tags = item.tags.map((tag) => {
        return (<p key={tag+item.id}>{tag}</p>)
    })

    const equipments = item.equipments.map((equip) => {
        return <p>{equip}</p>
    })

    const name = item.host.name.split(" ");

    return (
        <div className="fiche-logement">

            <div className="fiche-logement__header">
                <img src={item.cover} alt={item.title} />

                <div className="fiche-logement__header__info">
                    <h1>{item.title}</h1>
                    
                    <div className="fiche-logement__header__info__host">
                        <div className="name">
                            <p>{name[0]}</p>
                            <p>{name[1]}</p>
                        </div>
                        <img src={item.host.picture} alt={item.host.name} />
                    </div>
                </div>
                
            </div>
            
            <h2>{item.location}</h2>
            
            <div className="fiche-logement__infos">
                <div className="tags">{tags}</div>
                <Rating rate={item.rating} />
            </div>
            

            <div className="fiche-logement__footer">
                <Dropdown title="Description" content={item.description} />
                <Dropdown title="Equipement" content={equipments} />
            </div>
        </div>
    )
}
 
export default FicheLogement