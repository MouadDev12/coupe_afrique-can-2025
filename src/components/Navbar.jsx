import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CAN 2025 🏆
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/teams" className={isActive('/teams')}>
              Équipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/matches" className={isActive('/matches')}>
              Matchs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className={isActive('/favorites')}>
              Favoris
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;