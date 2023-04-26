import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Registrar = () => {
    const {createUser ,updateProfileUser,verifyEmail} = useContext(AuthContext)

    const [accepted, setAccepted] = useState(false)
    const handleRegistrar =(event)=>{
        event.preventDefault()
        const form =event.target
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photoURL.value
        const password = form.password.value
        

        createUser(email,password)
        .then(result =>{
            const user = result.user
            console.log(user)
            form.reset()
            handleUpdateUserProfile(name,photoURL)
            handleVerifyEmail()
            toast.success('please verify your email address')
        })
        .catch(error=>console.error(error))

    }
    const handleUpdateUserProfile = (name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL,
        }
        updateProfileUser(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    const handleChecked=(event)=>{
        setAccepted(event.target.checked)
    }

    const handleVerifyEmail =()=>{
        verifyEmail()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div className='mt-5'>
            <Form onSubmit={handleRegistrar}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photo" name='photoURL' placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label={<>Accepted <Link to='/tams'> Tams and conditions </Link> </>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted} >
                    Registrar
                </Button>
            </Form>
        </div>
    );
};

export default Registrar;