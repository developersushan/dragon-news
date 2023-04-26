import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Profile = () => {
    const{user} = useContext(AuthContext)
    const [name,setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)
    const handleProfile=(event)=>{
        event.preventDefault()
        console.log(photoURLRef.current.value)
    }
    const handleNameChange = (event)=>{
        setName(event.target.value)
    }
    return (
        <div className='mt-5'>
            <Form onSubmit={handleProfile}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="name" onChange={handleNameChange} name='name'  defaultValue={name} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' readOnly defaultValue={user?.email} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photo" ref={photoURLRef} name='photoURL' defaultValue={user?.photoURL} placeholder="Enter photoURL" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    update
                </Button>
            </Form>
        </div>
    );
};

export default Profile;