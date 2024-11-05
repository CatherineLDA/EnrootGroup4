const Navbar = () => {
  return (
    <div className="navbar bg-base-100 justify-between">
      <a className="font-bold text-xl">TOTE-ally Yours</a>
      <div className="navbar-center">
        <button className="btn mx-2">Button 1</button>
        <button className="btn mx-2">Button 2</button>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default Navbar