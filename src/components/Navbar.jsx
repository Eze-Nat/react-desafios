import "./navbar.css";





const Navbar = () => {
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">Urban Clothes</h1>
      <ul className="navbar-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
