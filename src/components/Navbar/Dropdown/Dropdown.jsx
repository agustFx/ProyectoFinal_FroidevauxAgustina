import { Link } from 'react-router-dom';
import './dropdown.css'

const Dropdown = () => {
    return (
      <>
         <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Menú
          </Link>

          <ul className="dropdown-menu">
            
              <Link className="dropdown-item" to="category/1">
              <li>
                Pizzas
              </li>
              </Link>

              <Link className="dropdown-item" to="category/2">
              <li>
                Pizzas veganas
              </li>
              </Link>
            
            
              <Link className="dropdown-item" to="category/3">
              <li>
                Hamburguesas
              </li>
              </Link>
            
            
              <Link className="dropdown-item" to="category/4">
              <li>
                 Minutas
              </li>
              </Link>
            
          </ul>
        </li>
    </>
    );
}

export default Dropdown;
