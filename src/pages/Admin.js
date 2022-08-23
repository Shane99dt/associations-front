import { useEffect, useState } from "react"
import moment from "moment"

const Admin = () => {
  const [ messages, setMessages ] = useState([])
  const [ filter, setFilter ] = useState("")

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const request = await fetch('http://localhost:5000/messages')
    const response = await request.json()
    setMessages(response)
  }

  const changeFilter = (status) => {
    if(status === ""){
      setFilter(status)
    }else{
      const filteredMessages = messages.filter(message => message.slug === status)
      setFilter(status)
      setMessages(filteredMessages)
    }
  }


  if(!messages){
    return <p>Loading</p>
  }

  return (
    <>
      <h1>All messages</h1>
      <section className="flex flex-row gap-2">
        <button className="border-2 border-gray-400 py-1 px-2 rounded-md" onClick={() => changeFilter('')}>All</button>
        <button className="border-2 border-gray-400 py-1 px-2 rounded-md" onClick={() => changeFilter('les-restos-du-coeur')}>les restos du coeur</button>
        <button className="border-2 border-gray-400 py-1 px-2 rounded-md" onClick={() => changeFilter('unicef')}>unicef</button>
        <button className="border-2 border-gray-400 py-1 px-2 rounded-md" onClick={() => changeFilter('konexio')}>konexio</button>
      </section>

      { filter === '' ? (
        <ul>
        {messages.map((msg, id) => {
          return(
            <li key={id} className="mb-3 border-2 border-gray-300">
              <p>association slug: {msg.slug}</p>
              <p>name: {msg.name}</p>
              <p>message: {msg.message}</p>
              <p>time: {moment(`${msg.time}`).format('LLL')}</p>
            </li>
          )
        })}
      </ul>
      ): (
        <ul>
        {messages.map((msg, id) => {
          return(
            <li key={id} className="mb-3 border-2 border-gray-300">
              <p>association slug: {msg.slug}</p>
              <p>name: {msg.name}</p>
              <p>message: {msg.message}</p>
              <p>time: {msg.time}</p>
            </li>
          )
        })}
      </ul>
      )}
    </>
  )
}

export default Admin