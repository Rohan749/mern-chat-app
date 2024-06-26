import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useSignup = () => {
  const [loading, setLoading] = useState(false)

  const signup = async ({ username, email, password }) => {
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username: username, email: email, password: password
      })

      if (response.status === 201) {
        console.log('User successfully created!')
        toast.success('User successfully created!')
      }

    } catch (error) {
      console.log('error while logging in:', error.response.data.error)
      toast.error(error.response.data.error)

    } finally {
      setLoading(false)
    }
  }


  return { loading, signup }
}


export default useSignup