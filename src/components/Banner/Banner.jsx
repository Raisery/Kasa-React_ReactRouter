import "../../css/banner.css"

function Banner({image, children}) {
  return (
    <div className="banner">
      <img src={image} alt="Banniére" />
      <h1>{children}</h1>
    </div>
  );
}

export default Banner;
