import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Contact = () => {
  const [ name, setName ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ slug, setSlug ] = useState("konexio")
  const navigate = useNavigate()


  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeMessage = e => {
    setMessage(e.target.value)
  }

  const handleChangeSelect = e => {
    setSlug(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const editedMessage = {
      name,
      message,
      slug
    }

    const request = await fetch(`http://localhost:5000/messages`, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(editedMessage)
    })

    console.log(editedMessage)
    if(request.status === 201){
      navigate(`/associations/${slug}`)
    }else{
      alert('Bad request')
    }
  }



  return (
    <>
      <h1 className="text-4xl text-center pt-5 text-gray-300 font-medium capitalize">Contact</h1>
      <form className="w-full max-w-lg m-auto py-5" onSubmit={handleSubmit}>
        <div className="w-full sm:w-1/2 md:w-2/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700" id="grid-first-name" type="text" placeholder="Name" value={name} onChange={handleChangeName} required/>
        </div>
        <div className="w-full sm:w-1/3 md:w-2/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-association">
            Association
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border dark:border-gray-600 dark:bg-gray-700 border-gray-200 py-3 px-4 pr-8 rounded leading-tight dark:text-gray-400 focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-association" onChange={handleChangeSelect} value={slug}>
              <option value="les-restos-du-coeur">les restos du coeur</option>
              <option value="unicef">UNICEF</option>
              <option value="konexio">Konexio</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-2/3 px-3">
          <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-message">
            Message
          </label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." value={message} onChange={handleChangeMessage} required/>
        </div>
        <div className="text-center my-2 px-3 sm:w-2/3 md:w-2/3">
          <button className="border-2 rounded-md px-2 py-1 hover:bg-gray-500 bg-gray-400 text-gray-800 text-lg w-full font-medium">Send</button>
        </div>
      </form>
    </>
  )
}

export default Contact