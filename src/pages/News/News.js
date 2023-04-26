import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const News = () => {
    const news = useLoaderData()
    const { title, image_url, details,category_id  } = news;
    return (
        <div className='mt-5'>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                   <Link to={`/category/${category_id}`}>
                   <Button variant="primary">All news in this category</Button>
                   </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;