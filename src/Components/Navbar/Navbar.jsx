import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className ='nav'>
        <div className="nav-logo">EV-carDrive</div>
        <ul className="nav-menu">
            <Link to="/Home"><li>Home</li></Link>
            <Link to="/Explore"><li>Explore</li></Link>
           <Link to="/About"> <li>About</li></Link>
           <Link to="/Contact"><li className='nav-contact'>Contact</li></Link>
        </ul>
      
    </div>
  )
}

export default Navbar
