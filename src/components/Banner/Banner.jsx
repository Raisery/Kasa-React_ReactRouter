import "../../css/banner.css"

function Banner({image}) {
  return (
    <div className="banner">
      <img src={image} alt="Banniére" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
