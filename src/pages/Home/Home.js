import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../shared/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div className='mt-5'>
            
            {
                allNews.map(news => <NewsSummaryCard key={news._id} news={news} ></NewsSummaryCard>
                 )
            }
        </div>
    );
};

export default Home;