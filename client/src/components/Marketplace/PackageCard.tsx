import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Tag } from 'antd';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { TravelPackage } from './Marketplace.types';

interface PackageCardProps {
  package: TravelPackage;
  onBook?: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, onBook }) => {
  const { t } = useTranslation();

  const handleBook = () => {
    if (onBook) {
      onBook();
    } else {
      console.log('Book package:', pkg.title);
    }
  };

  return (
    <Card
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      cover={
        <div className="relative">
          <img 
            src={pkg.image} 
            alt={pkg.title}
            className="w-full h-48 object-cover"
          />
          {pkg.badge && (
            <Tag color="red" className="absolute top-2 left-2">
              {pkg.badge}
            </Tag>
          )}
        </div>
      }
    >
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <span>{pkg.from}</span>
        <ArrowRightIcon className="mx-2" size={16} />
        <span>{pkg.to}</span>
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{pkg.title}</h3>
      
      <div className="flex items-baseline space-x-2 mb-3">
        <span className="text-xl font-bold text-[var(--ant-primary)]">{pkg.price}</span>
        <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
      </div>
      
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="text-green-500 mr-2" size={14} />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="text-xs text-gray-500 mb-3">
        {t('marketplace.valid_until')} {pkg.validUntil}
      </div>
      
      <Button 
        type="primary" 
        block
        onClick={handleBook}
      >
        {t('marketplace.book_now')}
      </Button>
    </Card>
  );
};

export default PackageCard;
