import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaYoutube, FaWhatsappSquare } from "react-icons/fa";
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {
    const {LoginProvider} = useContext(AuthContext)
    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()
    const handleGoogle=()=>{
        LoginProvider(GoogleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    const handleGithub =()=>{
        LoginProvider(GithubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='sticky-top mt-5 '>
            <h4>Right side news</h4>
            <div className="button-side">
                <ButtonGroup vertical >
                    <Button onClick={handleGoogle} variant="outline-success" className='mb-2'> <span><FaGoogle></FaGoogle></span> Login via Google</Button>
                    <Button onClick={handleGithub} variant="outline-secondary" ><span><FaGithub></FaGithub></span> Login via Github</Button>
                </ButtonGroup>
            </div>
            {/* find us on */}
            <div className="find-us mt-4">
                <h4>Find Us On</h4>
                <ListGroup>

                    <ListGroup.Item action variant="secondary">
                        <span className='me-2'><FaFacebookSquare></FaFacebookSquare></span> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                        <span className='me-2'><FaYoutube></FaYoutube></span> Youtube
                    </ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                        <span className='me-2'><FaTwitter></FaTwitter></span> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                        <span className='me-2'><FaWhatsappSquare></FaWhatsappSquare></span> Whatsapp
                    </ListGroup.Item>

                </ListGroup>
            </div>
            {/* carousel-design */}
            <div className="carousel-section mt-3">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://thumbs.dreamstime.com/b/live-breaking-news-television-broadcast-globe-gradient-blue-background-illustration-panorama-185818606.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.mca.gov.in/content/dam/mca/images/press_release_image.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/467163242/photo/challenges-coming.jpg?s=612x612&w=is&k=20&c=sIPs9fPKNcyIbL-Epd79YwKTTGHxT0Hh3jgnNDJTI1Q="
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default RightSideNav;