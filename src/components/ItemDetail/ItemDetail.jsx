import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }



    return (
        <>
            <div className='row g-0'>
            <div className="col-md-4">
                <img src={`${producto.img}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Contenido: {producto.contenido}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <ItemCount stock={producto.stock} onAdd={onAdd} /> <br/>
                    <button className="btn btn-secondary"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
