import './navbar.css'
import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import NameBrand from './NameBrand/NameBrand';
import CartWidge from './CartWidge/CartWidge';
import { Link } from 'react-router-dom';

const Navbar = React.memo(() => {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NameBrand/>
    <Link className='nav-link' to="/">
      <button className='btn btn-secondary'>🏠</button>
    </Link>
    <Link className='nav-link' to={'category/5'}>
      <button className='btn btn-secondary'>Promos</button>
    </Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Dropdown/>
      </ul>
      <CartWidge/>
    </div>
  </div>
</nav>

</>
  )
})

export default Navbar;
