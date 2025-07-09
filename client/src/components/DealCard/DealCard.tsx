import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Tag, Rate } from 'antd';
import { PlaneIcon, CheckIcon } from 'lucide-react';
import { DealCardProps } from './DealCard.types';

const DealCard: React.FC<DealCardProps> = ({ deal, onViewDetails, onBookNow }) => {
  const { t } = useTranslation();

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
    } else {
      console.log('View details for deal:', deal.title);
    }
  };

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      console.log('Book now for deal:', deal.title);
    }
  };

  return (
    <Card className="cls-deal-card cls-border cls-rounded-lg cls-relative">
      {/* Limited Time badge positioned in top-right corner */}
      <div className="cls-absolute cls-top-3 cls-right-3 cls-z-10">
        <Tag color="orange" size="small">
          Limited Time
        </Tag>
      </div>
      
      <div className="cls-mb-4">
        <div className="cls-mb-2">
          <Tag color="red" className="cls-text-base cls-font-medium">
            {deal.title}
          </Tag>
        </div>
        <div className="cls-text-3xl cls-font-bold cls-text-green-600">{deal.discount}% OFF</div>
      </div>
      
      <div className="cls-flex cls-items-center cls-justify-between cls-mb-4">
        <div className="cls-flex cls-items-center cls-space-x-3">
          <span className="cls-font-medium">{deal.from}</span>
          <PlaneIcon className="cls-text-primary" size={16} />
          <span className="cls-font-medium">{deal.to}</span>
        </div>
        <div className="cls-flex cls-items-center cls-space-x-1">
          <Rate disabled defaultValue={Math.floor(deal.rating)} count={1} />
          <span className="cls-text-sm">{deal.rating}</span>
        </div>
      </div>
      
      <div className="cls-flex cls-items-baseline cls-space-x-2 cls-mb-4">
        <span className="cls-text-2xl cls-font-bold cls-text-primary">${deal.price}</span>
        <span className="cls-text-lg cls-text-gray-500 cls-line-through">${deal.originalPrice}</span>
      </div>
      
      <div className="cls-grid cls-grid-cols-2 cls-gap-4 cls-mb-4 cls-text-sm">
        <div>
          <div className="cls-text-gray-600 cls-text-xs">{t('deals.group_size')}</div>
          <div className="cls-bg-blue-100 cls-text-blue-800 cls-px-2 cls-py-1 cls-rounded-md cls-text-xs cls-font-medium cls-inline-block">
            {deal.groupSize}
          </div>
        </div>
        <div>
          <div className="cls-text-gray-600 cls-text-xs">{t('deals.available')}</div>
          <div className="cls-bg-green-100 cls-text-green-800 cls-px-2 cls-py-1 cls-rounded-md cls-text-xs cls-font-medium cls-inline-block">
            {deal.availableSeats} seats
          </div>
        </div>
        <div>
          <div className="cls-text-gray-600 cls-text-xs">{t('deals.departure_window')}</div>
          <div className="cls-font-medium cls-text-xs cls-text-yellow-600">{deal.departureWindow}</div>
        </div>
        <div>
          <div className="cls-text-gray-600 cls-text-xs">{t('deals.stay_duration')}</div>
          <div className="cls-font-medium cls-text-xs cls-text-yellow-600">{deal.stayDuration}</div>
        </div>
      </div>
      
      <div className="cls-mb-4">
        <div className="cls-text-sm cls-text-gray-600 cls-mb-2">{t('deals.included_features')}</div>
        <div className="cls-space-y-1">
          {deal.features.map((feature, index) => (
            <div key={index} className="cls-flex cls-items-center cls-space-x-2 cls-text-sm">
              <CheckIcon className="cls-text-green-500" size={14} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cls-flex cls-justify-between cls-text-xs cls-text-gray-500 cls-mb-4">
        <span>{t('deals.book_by')} {deal.bookBy}</span>
        <span>{t('deals.valid_until')} {deal.validUntil}</span>
      </div>
      
      <div className="cls-flex cls-space-x-3">
        <Button 
          type="default" 
          className="cls-flex-1"
          onClick={handleViewDetails}
        >
          {t('deals.view_details')}
        </Button>
        <Button 
          type="primary" 
          className="cls-flex-1"
          onClick={handleBookNow}
        >
          {t('deals.book_now')}
        </Button>
      </div>
    </Card>
  );
};

export default DealCard;
