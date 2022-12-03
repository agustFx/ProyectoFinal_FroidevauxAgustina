import { Link } from "react-router-dom";
import './namebrand.css'

const Logo = () => {
    return (
        <div>
          <Link to={'/'}>
            <img className="img-logo" src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-froidevaux.appspot.com/o/logo.jpg?alt=media&token=0cf87d35-577e-4abd-b742-c8adafcf205d"/>
          </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
        </div>
    );
}

export default Logo;
