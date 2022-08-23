import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClickBurger = () => {
    if(clicked){
      setClicked(false)
    }else{
      setClicked(true)
    }
  }

  return(
    <>
      <nav className="p-5 bg-gray-700 shadow md:flex md:items-center md:justify-between text-white font-medium">
        <div className="flex justify-between items-center ">
          <Link className="text-2xl font-[Poppins] cursor-pointer capitalize" to='/associations'>
            Associations
          </Link>

          <button className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={handleClickBurger}>
            <ion-icon name="menu"
            // onclick="Menu(this)"
            ></ion-icon>
          </button>
        </div>

        <ul className={`md:flex md:items-center md:z-auto md:static md:bg-transparent  w-full left-0 md:w-auto md:py-0 md:pl-0 md:opacity-100
        ${clicked ? ('z-30 pl-7 py-4 fixed bg-gray-800/80'):('opacity-0 top-[-400px] z-[-1] absolute')}
          transition-all ease-in duration-500 uppercase text-lg`}>
          <li className="mx-4 my-2 md:my-0">
            <Link to='/' className=" hover:text-cyan-500 duration-500" onClick={handleClickBurger}>HOME</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link to='/associations/contact' className=" hover:text-cyan-500 duration-500" onClick={handleClickBurger}>Contact</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link to='/associations/admin' className=" hover:text-cyan-500 duration-500" onClick={handleClickBurger}>Admin</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar