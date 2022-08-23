import { useEffect, useState } from "react"
import moment from "moment"
import ButtonAdminFilter from "../components/buttons/ButtonAdminFilter"

const Admin = () => {
  const [ messages, setMessages ] = useState([])
  const [ filter, setFilter ] = useState("")

  useEffect(() => {
    fetchMessages()
  }, [filter])


  const fetchMessages = async () => {
    const request = await fetch(`http://localhost:5000/messages/${filter}`)
    const response = await request.json()
    setMessages(response)
  }

  const changeFilter = (slug) => {
    setFilter(slug)
  }

  return (
    <>
      <h1 className="text-4xl text-center pt-5 text-gray-300 font-medium capitalize">All messages</h1>
      <section className="flex sm:flex-row flex-col gap-2 py-4 text-gray-400 text-lg">
        <ButtonAdminFilter btnOnClick={changeFilter} btnText='all' onClickText='' />
        <ButtonAdminFilter btnOnClick={changeFilter} btnText='les restos du coeur' onClickText='les-restos-du-coeur' />
        <ButtonAdminFilter btnOnClick={changeFilter} btnText='UNICEF' onClickText='unicef' />
        <ButtonAdminFilter btnOnClick={changeFilter} btnText='konexio' onClickText='konexio' />
      </section>
        <ul>
        {messages.map((msg, id) => {
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
    </>
  )
}

export default Admin