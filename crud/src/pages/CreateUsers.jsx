import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUsers = () => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  Axios.defaults.withCredentials = true

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('https://first-crud-mern-frontend.vercel.app/create', { name, age, email})
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className='text-2xl font-bold text-slate-200 text-center'>Adicionar Usuário</h1>
      <div className="bg-gray-700 w-96 h-auto px-12 mt-4 rounded">
        
        <form action="#" className="flex flex-col gap-4 py-8" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name..." onChange={e => setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="EX: fdKp25@example.com" onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="age">Age</label>
          <input type="number" placeholder="Your Age..." onChange={e => setAge(e.target.value)} />
          <input type="submit" className="cursor-pointer bg-slate-500 rounded py-3" />
        </form>
      </div>
      
    </div>
  )
}

export default CreateUsers