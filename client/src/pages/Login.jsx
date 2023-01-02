import axios from "axios"

import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const [state, setState] = useState('')
  const [data, setData] = useState('')
  const navigate = useNavigate()


  const handleClick = async(e) => {
    e.preventDefault()

    const api = await axios.post("http://localhost:5000/login", state).then((res) =>{

    
    setData(res.data)
 

    if (res.data == "Logged Successfully!"){
        navigate('/user')
    }

    })

  }

  const handleChange = (e) => {
    
    e.preventDefault()

    setState(prev => ({...prev, [e.target.name] : e.target.value}))

  }

  return(
    <div className='container'>

        <div className='signup-container'>
          <div className='content'>
          <input type="text" placeholder="Enter your mail" name="mail" onChange={handleChange}/><br></br>
          <input type="text" placeholder="Enter your password" name="password" onChange={handleChange}/><br></br>
          

          <div className='button'>
            <button onClick={handleClick}>Login</button><br></br>
            <a href='/signup'>New user? Please Register</a>
          </div>
          </div>
          <p>{data}</p>
          
        </div>
        </div>
  )
}

export default Login