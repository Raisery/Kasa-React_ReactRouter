import "../../css/rating.css"
import star from "../../assets/star.svg"
import star_active from "../../assets/star-active.svg"

function Rating({rate}) {
    const stars = []
    for(let s = 1; s <= 5; s++) {
        if(s <= rate) {
            stars.push(<img className={"star-active"} src={star_active} alt='rating' key={`${s}+star`}/>)
        }
        else {
            stars.push(<img className={"star"} src={star} alt='rating' key={`${s}+star`}/>)
        }
        
    }
    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating