import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from 'moment'

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
    const request = await fetch(`http://localhost:5000/associations/${slug}`)
    const response = await request.json()
    setAssociation(response)
  }

  const fetchMessages = async () => {
    const request = await fetch(`http://localhost:5000/messages/${slug}`)
    const response = await request.json()
    setMessages(response)
  }


  if(!messages){
    return <p>Loading</p>
  }


  return(
    <>
      <h1 className="md:text-4xl text-3xl text-center pt-5 text-gray-300 font-medium capitalize">{association.name}</h1>
      <p className="font-medium md:text-xl text-lg text-gray-600 text-center pt-2">"{association.slogan}"</p>
      <div className="flex justify-center py-4">
        <img src={association.image} alt="association image" className="md:h-80 sm:h-60 h-50"/>
      </div>
      <p className="text-gray-400">{association.description}</p>
      <section className="mt-4">
        <h2 className="capitalize text-3xl text-gray-300 font-medium">messages</h2>
        <ul className="py-4">
          {messages.map((msg, id) => {
            return(
              <li key={id} className="border border-gray-500 p-3 rounded-md border-collapse mb-2">
                <p className="font-medium text-lg text-slate-400">{msg.name}</p>
                <p className="text-gray-400">{msg.message}</p>
                <small className="text-gray-600">{moment(`${msg.time}`).format('LLL')}</small>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Association