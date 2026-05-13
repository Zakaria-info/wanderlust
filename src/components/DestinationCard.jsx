import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const {_id, imageUrl, destinationName, price, duration, country } = destination;
  return (
    <div>
      <Image
        src={imageUrl}
        alt={destinationName}
        width={400}
        height={300}
        className="rounded-2xl"
      />

      <div className="border">
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
        <Link href={`/destinations/${_id}`} className="text-cyan-700 hover:underline">
          <FiExternalLink /> Book Now
        </Link>
      </div>
      
    </div>
  );
};

export default DestinationCard;
