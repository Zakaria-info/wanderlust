import Image from 'next/image';
import React from 'react';

const DestinationDetailsPage = async ({params}) => {
    const { id } =await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    console.log(destination)


    const { imageUrl, destinationName, price, duration, country } = destination;

    console.log(id)
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <Image src={imageUrl} alt={destinationName} width={800} height={500} />

        </div>
    );
};

export default DestinationDetailsPage;