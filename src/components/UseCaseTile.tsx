import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface UseCaseTileProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  link?: string;
  className?: string;
}

const UseCaseTile: React.FC<UseCaseTileProps> = ({
  title,
  description,
  image,
  benefits,
  link,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-[#f8650c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-600 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        
        {link && (
          <Button href={link} variant="outline" size="sm" className="w-full">
            Learn More
          </Button>
        )}
      </div>
    </div>
  );
};

export default UseCaseTile; 