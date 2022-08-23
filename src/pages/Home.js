import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <Link to={'/associations'} className='py-1 px-3 border-2 rounded-md text-3xl font-medium bg-gray-500 hover:bg-gray-400 text-gray-700'>Show associations</Link>
        </div>
      </div>
    </>
  )
}

export default Home