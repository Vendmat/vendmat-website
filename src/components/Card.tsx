import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  image,
  imageAlt = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {image && (
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Card; 