import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const {signIn , setLoading} = useContext(AuthContext)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        setError('')
        signIn(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
            form.reset()
            
            if(user.emailVerified){
                navigate(from,{replace:true})
                toast.success('successfully done!')
            }
            else{
                toast.error('your email address not verified please verify your email !')
            }
        })
        .catch(error=>{
            console.error(error)
            setError("password didn't match")
        })
        .finally(()=>{
            setLoading(false)
        })
        
    }
    return (
        <div className='mt-5'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                    <Form.Text className='text-danger'>{error}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;