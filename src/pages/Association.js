import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Contact from "./Contact"

const Association = () => {
  const [ association, setAssociation ] = useState("")
  const [ messages, setMessages ] = useState([])
  const params = useParams()
  const { slug } = params

  useEffect(() => {
    fetchAssociation()
    fetchMessages()
  }, [])


  const fetchAssociation = async () => {
    const request = await fetch(`http://localhost:5000/associations/association/${slug}`)
    const response = await request.json()
    setAssociation(response)
  }

  const fetchMessages = async () => {
    const request = await fetch(`http://localhost:5000/associations/association/${slug}/messages`)
    const response = await request.json()
    setMessages(response)
  }


  if(!messages){
    return <p>Loading</p>
  }


  return(
    <>
      <h1 className="text-4xl text-center pt-5 text-gray-300 font-medium capitalize">{association.name}</h1>
      <p className="font-medium text-xl text-gray-600 text-center pt-2">"{association.slogan}"</p>
      <div className="flex justify-center py-4">
        <img src={association.image} alt="association image" className="h-80"/>
      </div>
      <p className="text-gray-400">{association.description}</p>
      <section className="mt-4">
        <h2 className="capitalize text-3xl text-gray-300 font-medium">messages</h2>
        <ul className="py-4">
          {messages.map(msg => {
            return(
              <li className="border border-gray-500 p-3 rounded-md border-collapse mb-2">
                <p className="font-medium text-lg text-slate-400">{msg.name}</p>
                <p className="text-gray-400">{msg.message}</p>
                <small className="text-gray-600">{msg.time}</small>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Association