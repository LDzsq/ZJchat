import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, content }) => {
  return (
    <div className="card tech-border group hover:border-primary-500">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12"
        />
        <div>
          <h4 className="font-semibold text-secondary-800">{name}</h4>
          <p className="text-sm text-secondary-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
        ))}
      </div>
      <p className="text-secondary-700">{content}</p>
    </div>
  );
};

export default TestimonialCard;