import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPlus, FaUser } from "react-icons/fa";
import '../asstes/style/HeaderCss.css'
import LeftSideNav from './LeftSideNav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div className='fixed-top mb-0 z-3'>
      <Navbar className='navbarMe bg-white ' collapseOnSelect expand="lg"  >
        <Container>
          <Navbar.Brand ><Link to='/' className='bg-primary text-white p-2 rounded-2'>news</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav>portal</Nav>
            </Nav>
            <Nav className='align-items-center'>
              <>
                {
                  user?.uid ? <>
                    <Button onClick={handleLogout} className='me-2' variant="outline-danger">LogOut</Button>
                    <span>{user?.displayName}</span>
                  </>
                    : <>
                      <Link to='/login' className='me-3'>Login</Link>
                      <Link to='/registrar'>Registrar</Link>
                    </>

                }
              </>

              <Link to='/profile'>
                {user?.photoURL ? <Image src={user?.photoURL} style={{ height: "40px", width: "40px" }} className='me-2' roundedCircle ></Image>
                  : <FaUser></FaUser>}
              </Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;