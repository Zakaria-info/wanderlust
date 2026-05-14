
import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { notFound } from 'next/navigation';

const DestinationDetailsPage = async ({params}) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    if (!res.ok) {
        return notFound();
    }

    const destination = await res.json();
    if (!destination) {
        return notFound();
    }

    const { imageUrl, destinationName, price, duration, country, description } = destination;

    console.log(id)
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className='flex justify-end gap-2 items-center'>
                <EditModal destination={destination} />
            <DeleteAlert destination={destination}/>
            </div>
            <Image className='w-full h-100 object-cover' src={imageUrl} alt={destinationName} width={800} height={500} />

            <div className="flex gap-2 items-center">
                      <LuMapPin /> <span>{country}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">{destinationName}</h2>
                        <p className="text-lg font-semibold text-green-500">${price}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaRegCalendar /> <span>{duration}</span>
                    </div>
                    <h1 className="text-2xl font-bold mt-6">Overview</h1>
                    <p className="text-gray-600 mt-2">{description}</p>
            
        </div>
    );
};

export default DestinationDetailsPage;