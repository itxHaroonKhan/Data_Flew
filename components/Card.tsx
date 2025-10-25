import React from "react";
import Image from "next/image";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "./Buttan";

// 🔹 Props type define karte hain
interface CardProps {
  title: string;
  role: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, role, imageUrl }) => {
  return (
    <div className="w-80 h-[30rem] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* 🔹 Top Section */}
      <div className="w-full h-40 bg-blue-400 relative">
       
        <Image
          src={imageUrl}
          alt={title}
          width={140}
          height={140}
          className="rounded-full object-cover absolute top-20 left-1/2 -translate-x-1/2 border-4 border-blue-400 p-1 bg-amber-50 shadow-md"
        />
      </div>

      
      <div className="flex flex-col items-center mt-[4.5rem] text-center px-4">
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500 mb-3">{role}</p>

        {/* 🔹 Social Icons */}
        <div className="flex gap-4 text-2xl mb-4">
          <a href="#" className="text-red-500 transition-colors">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-800 transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="text-blue-700 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-pink-500 transition-colors">
            <FaInstagram />
          </a>
        </div>

        {/* 🔹 Buttons */}
        <div className="flex gap-3">
          <Button label="Subscribe" />
          <Button label="Message" />
        </div>
      </div>
    </div>
  );
};

export default Card;
