import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar w-full bg-[#5b8dc8] text-white justify-between px-5 fixed top-0 z-50 shadow-xl">
      <a className="font-bold text-xl ">❤️ TOTE-ally Yours</a>
      <div className="navbar-center flex items-center h-full space-x-4">
        <Link to="/tote-gallery">
          <button className="btn btn-ghost rounded-none h-full px-3 py-2">Tote Bag Designs</button>
        </Link>
        
        <button className="btn mx-2">Event Photos</button>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default Navbar