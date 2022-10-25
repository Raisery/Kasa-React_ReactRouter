import "../../css/banner.css"
import background from '../../assets/banner.png'

function Banner() {
  return (
    <div className="banner">
      <img src={background} alt="Banniére" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
