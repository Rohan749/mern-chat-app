import axios from 'axios'
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useLogin = () => {

   
    const [loading, setLoading] = useState(false)

    const login = async ({email, password}) => {
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email, password
            })

            if(response.status === 201) {
                console.log(response.data.message)
                toast.success(response.data.message)
            }

         
           
        } catch (error) {
            console.log('error while logging in:', error.response.data.error)
            toast.error(error.response.data.error)

        } finally {
            setLoading(false)
          }
    }

    return {loading, login}
}

export default useLogin