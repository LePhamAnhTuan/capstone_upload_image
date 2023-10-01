import React from 'react'
import { Form, Link } from 'react-router-dom'
import { https } from '../api/configAxios'

type Props = {}

function Login({ }: Props) {
    const handleSubmit = (e: any) => { 
        e.preventDefault()
        https.post("upload",)
        
    }
    return (

        <div>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="userName"></label>
                <input type="text" name='userName'/>

                <label htmlFor="passWorld"></label>
                <input type="password" name='passWorld'/>

                <button type="submit">Login</button>
            </Form>

        </div>

    )
}

export default Login