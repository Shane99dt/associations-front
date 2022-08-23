import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Associations = () => {
  const [ associations, setAssociations ] = useState([])

  useEffect(() => {
    fetchAssociations()
  }, [])

  const fetchAssociations = async () => {
    const request = await fetch('http://localhost:5000/associations')
    const response = await request.json()
    setAssociations(response)
  }



  if(!associations){
    return <p>Loading</p>
  }

  return (
    <>
      <h1 className="text-4xl text-center pt-5 text-gray-300 font-medium">Associations</h1>
      <ul className="font-medium text-xl text-gray-400 pt-5 flex flex-col gap-3">
        {associations.map(association => {
          return <Link className="capitalize" to={`/associations/association/${association.slug}`}>
            <li className="border rounded-md px-2 py-1 hover:bg-gray-700">
              {association.name}
            </li>
          </Link>
        })}
      </ul>
    </>
  )
}

export default Associations