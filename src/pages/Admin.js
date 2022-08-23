import { useEffect, useState } from "react"
import moment from "moment"

const Admin = () => {
  const [ messages, setMessages ] = useState([])
  const [ filter, setFilter ] = useState("")
  const [ updatedMessages, setUpdatedMessages ] = useState([])

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const request = await fetch('http://localhost:5000/messages')
    const response = await request.json()
    setUpdatedMessages(response)
    setMessages(response)
  }

  const changeFilter = (status) => {
    if(status === ""){
      setFilter(status)
      setUpdatedMessages(messages)
    }else{
      const filteredMessages = messages.filter(message => message.slug === status)
      setFilter(status)
      setUpdatedMessages(filteredMessages)
    }
  }


  if(!messages || !updatedMessages){
    return <p>Loading</p>
  }

  return (
    <>
      <h1 className="text-4xl text-center pt-5 text-gray-300 font-medium capitalize">All messages</h1>
      <section className="flex sm:flex-row flex-col gap-2 py-4 text-gray-400 text-lg">
        <button className="capitalize border rounded-md px-2 py-1 hover:bg-gray-700 active:bg-gray-500 active:text-gray-900 focus:bg-gray-500 focus:text-gray-900" onClick={() => changeFilter('')}>All</button>
        <button className="capitalize border rounded-md px-2 py-1 hover:bg-gray-700 active:bg-gray-500 active:text-gray-900 focus:bg-gray-500 focus:text-gray-900" onClick={() => changeFilter('les-restos-du-coeur')}>les restos du coeur</button>
        <button className="capitalize border rounded-md px-2 py-1 hover:bg-gray-700 active:bg-gray-500 active:text-gray-900 focus:bg-gray-500 focus:text-gray-900" onClick={() => changeFilter('unicef')}>unicef</button>
        <button className="capitalize border rounded-md px-2 py-1 hover:bg-gray-700 active:bg-gray-500 active:text-gray-900 focus:bg-gray-500 focus:text-gray-900" onClick={() => changeFilter('konexio')}>konexio</button>
      </section>

      { filter === '' ? (
        <ul>
        {updatedMessages.map((msg, id) => {
          return(
            <li key={id} className="mb-3 border-2 border-gray-600 text-gray-400 px-4 py-2 rounded flex flex-col gap-2">
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">association slug :</span> {msg.slug}</p>
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">name :</span> {msg.name}</p>
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">message :</span> {msg.message}</p>
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">time :</span> {moment(`${msg.time}`).format('LLL')}</p>
            </li>
          )
        })}
      </ul>
      ): (
        <ul>
        {updatedMessages.map((msg, id) => {
          return(
            <li key={id} className="mb-3 border-2 border-gray-600 text-gray-400 px-4 py-2 rounded flex flex-col gap-2">
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">association slug :</span> {msg.slug}</p>
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">name :</span> {msg.name}</p>
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">message :</span> {msg.message}</p>
              <p className="capitalize"><span className="font-medium text-slate-500 pr-2">time :</span> {moment(`${msg.time}`).format('LLL')}</p>
            </li>
          )
        })}
      </ul>
      )}
    </>
  )
}

export default Admin