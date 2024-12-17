import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary-600 mb-2">{value}</div>
      <div className="text-secondary-700">{label}</div>
    </div>
  );
};

export default MetricCard;