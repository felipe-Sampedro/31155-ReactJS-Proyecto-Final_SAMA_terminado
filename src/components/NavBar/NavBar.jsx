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
        <div className="container-fluid">
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
                        <li className="dropdown-item nav-item"><Link to="marca/Athos">Athos</Link></li>
                        <Link to="marca/Atenea"><li className="dropdown-item nav-item">Atenea</li></Link>
                        <Link to="marca/Dolce Bella"><li className="dropdown-item">Dolce Bella</li></Link>
                        <Link to="marca/Igora Royal"><li className="dropdown-item">Igora Royal</li></Link>
                        <Link to="marca/Lubriderm"><li className="dropdown-item">Lubriderm</li></Link>
                        <Link to="marca/Nivea"><li className="dropdown-item">Nivea</li></Link>
                        <Link to="marca/Nouvelle"><li className="dropdown-item">Nouvelle</li></Link>
                        <Link to="marca/Samy"><li className="dropdown-item">Samy</li></Link>
                        <Link to="marca/Skala"><li className="dropdown-item">Skala</li></Link>
                        <Link to="marca/Vogue"><li className="dropdown-item">Vogue</li></Link>
                    </ul>
                    </li>
                </ul>
                <div className='p-2 d-flex align-items-center justify-items-center' style={{width:"auto", fontSize:"40px",backgroundColor:"rgb(211,211,211)"}}>
                    <FaShoppingCart />
                    <p className='p-2' style={{marginBottom:'0',fontSize:"25px"}}>{carrito.map((cw)=>cw.cantidad).reduce((prev, curr) => prev + curr, 0)}</p>
                </div>
            </div>
        </div>

    </nav>



  )
}

export default NavBar