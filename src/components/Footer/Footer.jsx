import "../../css/footer.css"
import logo from '../../assets/footer_logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;
