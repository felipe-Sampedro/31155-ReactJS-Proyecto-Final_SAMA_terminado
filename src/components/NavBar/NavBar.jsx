import React, { useContext } from 'react'
import logo from '../../../src/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { GlobalContext } from '../CartContext/CartContext';


const NavBar = () => {

    const {itemCount,carrito} = useContext(GlobalContext)

  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid justify-content-between mx-3">
{/*             <a className="navbar-brand" href="#"> */}
                <Link to="/">
                    <img src={logo} alt="" width="250" height="75"/>
                </Link>
{/*             </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">FACIAL</a> */}
                        <Link className="nav-link" to="/category/facial">FACIAL</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">CAPILAR</a> */}
                        <Link className="nav-link" to="/category/capilar">CAPILAR</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">CORPORAL</a> */}
                        <Link className="nav-link" to="/category/corporal">CORPORAL</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">MAQUILLAJE</a> */}
                        <Link className="nav-link" to="/category/maquillaje">MAQUILLAJE</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            MARCAS
                        </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li className="dropdown-item"><Link to="marca/Athos" className='nav-link'>Athos</Link></li>
                        <li className="dropdown-item"><Link to="marca/Atenea" className='nav-link'>Atenea</Link></li>
                        <li className="dropdown-item"><Link to="marca/Dolce Bella" className='nav-link'>Dolce Bella</Link></li>
                        <li className="dropdown-item"><Link to="marca/Igora Royal" className='nav-link'>Igora Royal</Link></li>
                        <li className="dropdown-item"><Link to="marca/Lubriderm" className='nav-link'>Lubriderm</Link></li>
                        <li className="dropdown-item"><Link to="marca/Nivea" className='nav-link'>Nivea</Link></li>
                        <li className="dropdown-item"><Link to="marca/Nouvelle" className='nav-link'>Nouvelle</Link></li>
                        <li className="dropdown-item"><Link to="marca/Samy" className='nav-link'>Samy</Link></li>
                        <li className="dropdown-item"><Link to="marca/Skala" className='nav-link'>Skala</Link></li>
                        <li className="dropdown-item"><Link to="marca/Vogue" className='nav-link'>Vogue</Link></li>
                    </ul>
                    </li>
                </ul>
            </div>
            <div className='p-1  mb-0' style={{fontSize:"35px",backgroundColor:"rgb(211,211,211)"}}>
                <Link to='/cart' className='d-flex align-itmes-center text-center'>
                    <FaShoppingCart />
                    {/* <p className='p-2' style={{marginBottom:'0',fontSize:"25px"}}>{carrito.map((cw)=>cw.cantidad).reduce((prev, curr) => prev + curr, 0)}</p> */}
                    <CartWidget/>
                </Link>
            </div>
        </div>

    </nav>



  )
}

export default NavBar