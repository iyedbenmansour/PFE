import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Parking Time</span>
        <div className="navItems">
          <button className="navButton">contact us</button>
          <button className="navButton">Login</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar