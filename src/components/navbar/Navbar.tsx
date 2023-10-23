import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
<<<<<<< Updated upstream
      <img src="logo.svg" alt="Company logo" />
=======
        <img src="logo.svg" alt="" />
>>>>>>> Stashed changes
        <span>Connect-Ticketing</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
<<<<<<< Updated upstream
          <img src="" alt="" />
          <span>Wilhelmo</span>
=======
          <span>Wilhemo</span>
>>>>>>> Stashed changes
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
