import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  avatar,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-4">
        <svg className="w-8 h-8 text-[#f8650c] mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <blockquote className="text-gray-700 italic text-lg leading-relaxed">
          "{quote}"
        </blockquote>
      </div>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-600 font-semibold">
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-gray-600 text-sm">{position}</div>
          <div className="text-gray-500 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 