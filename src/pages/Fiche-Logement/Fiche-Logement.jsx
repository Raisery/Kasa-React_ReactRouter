import { useParams } from "react-router-dom"
import { useState } from 'react'
import Dropdown from "../../components/Dropdown/Dropdown";
import "../../css/fiche-logement.css"
import data from '../../data.json'
import Error from "../Error404/Error404";
import Rating from "../../components/Rating/Rating";
import slide_arrow from "../../assets/left_arrow.svg"

function FicheLogement() {
    const [currentSlide, setCurrentSlide] = useState(0)

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
        return <p key={equip+item.id}>{equip}</p>
    })

    const name = item.host.name.split(" ");
   
    const slides = item.pictures.map((pic, index) => {
        let className = "slider__content__picture active"
        if(index >= 1) className = "slider__content__picture"
        return <img className={className} src={pic} alt={item.title} id={item.id+"p"+index} key={item.id+"p"+index}/>
    })

    function slideShow(n) {
        let index = currentSlide + n;
        if(index > item.pictures.length-1) index = 0
        if(index < 0) index = item.pictures.length-1

        document.getElementById(item.id+"p"+currentSlide).classList.remove('active')
        document.getElementById(item.id+"p"+index).classList.add('active')

        setCurrentSlide(index)
    }

    let hidden = ""
    if(item.pictures.length === 1) {
        hidden="hidden"
    }

    return (
        <div className="fiche-logement">

            <div className="fiche-logement__header">
                <div className="slider">
                    <button className={"slider__arrow "+hidden} id="arrow_left" onClick={() => {slideShow(-1)}}><img src={slide_arrow} alt="Précédente"/></button>
                    <button className={"slider__arrow "+hidden} id="arrow_right" onClick={() => {slideShow((1))}}><img src={slide_arrow} alt="Suivante"/></button>
                    <div className="slider__content">
                        {slides}
                    </div>
                </div>                
            </div>
            
            <div className="fiche-logement__infos">
                <div className="fiche-logement__infos__left">
                    <h1>{item.title}</h1>
                    <h2>{item.location}</h2>
                    <div className="tags">{tags}</div>
                </div>
                <div className="fiche-logement__infos__right">
                    <div className="host">
                        <div className="host__name">
                            <p>{name[0]}</p>
                            <p>{name[1]}</p>
                        </div>
                    <img className="host__img" src={item.host.picture} alt={item.host.name} />
                    </div>
                    <Rating rate={item.rating} />
                </div>
            </div>
            
            <div className="fiche-logement__footer">
                <Dropdown title="Description"><p>{item.description}</p></Dropdown>
                <Dropdown title="Equipement">{equipments}</Dropdown>
            </div>
        </div>
    )
}


export default FicheLogement