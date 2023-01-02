import axios from "axios"

import { useState } from "react"


const Signup = () => {

  const [state, setState] = useState('')
  const [data, setData] = useState('')


  const handleClick = async() => {

    const api = await axios.post("http://localhost:5000/register", state).then((res) =>{

    setData(res.data)

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
            <button onClick={handleClick}>Signup</button><br></br>
            <a href='/login'>Already a user? Please Login</a>
          </div>
          </div>
          <p>{data}</p>
          
        </div>
        </div>
  )
}

export default Signup
