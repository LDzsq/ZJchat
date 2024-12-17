import React from 'react';

interface PartnerCardProps {
  name: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center px-6 py-4">
      <span className="text-secondary-700 font-medium">{name}</span>
    </div>
  );
};

export default PartnerCard;