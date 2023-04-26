import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category-news')
        .then(res =>res.json())
        .then(data =>setCategories(data))
        
    },[])
    
    
    return (
        <div className='sticky-top z-0 mt-5'>
            <h3>All Category </h3>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} >{category.name}</Link></p>)
                }
            </div>

        </div>
    );
};

export default LeftSideNav;