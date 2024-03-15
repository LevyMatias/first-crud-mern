import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Home = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get('http://localhost:5173/')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
      Axios.delete(`http://localhost:5173/delete/${id}`)
        .then(res => {
            console.log(res)
            setUsers(users.filter(user => user._id !== id))
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <>
    <h1 className='text-2xl font-bold text-slate-200 text-center'>Usuários</h1>
    <div className='flex justify-center h-screen'>
        <div className='flex flex-col items-end gap-3'>
          <Link to="/create" className=' text-slate-200 px-6 hover:bg-gray-900 text-center text-lg font-bold bg-gray-700 rounded'>+</Link>
          <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">Nome</th>
                <th scope="col" className="py-3 px-6">Email</th>
                <th scope="col" className="py-3 px-6">Idade</th>
                <th scope="col" className="py-3 px-6">Ações</th>
              </tr>
            </thead>

            <tbody >
              {
                users.map((user, key) => {
                  
                  return <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{user.name}</td>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6">{user.age}</td>
                    <td className="py-4 px-6">
                      <Link to={`/update/${user._id}`} className='hover:text-blue-400 mr-2'>Atualizar</Link>
                      <Link to="/delete" className='hover:text-red-400 ' onClick={() => handleDelete(user._id)}>Deletar</Link>
                        
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        
    </div>
    </>
  )
}

export default Home