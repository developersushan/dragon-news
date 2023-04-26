import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FaRegBookmark ,FaShareAlt ,FaStarHalfAlt ,FaRegEye } from "react-icons/fa";
const NewsSummaryCard = ({ news }) => {
    const {_id, title,total_view,rating,image_url,details,author} = news;
   
    return (
        <div className='mt-5'>
            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image src={author?.img} style={{height:"50px"}} className='me-2' roundedCircle ></Image>
                        <div >
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <Link className='me-2' to='/'><FaRegBookmark></FaRegBookmark></Link>
                        <Link to='/'><FaShareAlt></FaShareAlt></Link>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details?.length >250 ? <span>{details.slice(0, 250)+ "..."} <Link to={`/news/${_id}`}>Read More</Link> </span>
                        : <span>{details}</span>
                        }
                    </Card.Text>
                   
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between ">
                    <div className='align-item-center'>
                        <span className='text-warning me-2'><FaStarHalfAlt></FaStarHalfAlt></span>
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <span className='me-2' ><FaRegEye></FaRegEye></span>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsSummaryCard;