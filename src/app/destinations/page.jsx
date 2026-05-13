import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch("http://localhost:5000/destination");
    const destinations = await res.json();

    console.log(destinations)
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-lg font-bold my-8'>All Destinations</h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;