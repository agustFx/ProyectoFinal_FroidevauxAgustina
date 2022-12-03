import { Link } from "react-router-dom";
import './item.css'

const Item = ({prod}) => {
    return (
        
<div className="card cardProducto" key={prod.id}>
<img src={`${prod.img}`} className="card-img-top card-img" alt="img" />
<div className="card-body">
<h5 className="card-title">{prod.nombre}</h5>
<p className="card-text">Contenido: {prod.contenido}</p>
<p className="card-text">Precio: ${prod.precio}</p>
<button className='btn btn-dark'><Link className='nav-link' to={`/product/${prod.id}`}>Ver producto</Link></button>
  </div>
  </div>
    );
}

export default Item;