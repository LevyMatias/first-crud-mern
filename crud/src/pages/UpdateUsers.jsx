import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import Axios from 'axios'

const UpdateUsers = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  useEffect(() => {
      Axios.get('http://localhost:5173/getUser/'+id)
          .then(res => {
              console.log(res.data)
              setName(res.data.name)
              setEmail(res.data.email)
              setAge(res.data.age)
          })
          .catch(err => console.log(err))
  }, [id])


  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.put('http://localhost:5173/update/'+id, { name, age, email})
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className='text-2xl font-bold text-slate-200 text-center'>Atualizar Usuário</h1>
      <div className="bg-gray-700 w-96 h-auto px-12 mt-4 rounded">
        
        <form action="#" className="flex flex-col gap-4 py-8" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="EX: fdKp25@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="age">Age</label>
          <input type="number" placeholder="Your Age..." value={age} onChange={e => setAge(e.target.value)}/>
          <input type="submit" value={"Atualizar"} className="cursor-pointer bg-slate-500 rounded py-3"/>
        </form>
      </div>
      
    </div>
  )
}

export default UpdateUsers