import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const TopBanner: React.FC = () => {
  const { t } = useTranslation();

  const handleExploreClick = () => {
    console.log('Explore deals clicked');
  };

  return (
    <div className="bg-[var(--ant-primary)] cls-mx-auto text-white py-3 cls-overflow-hidden">
      <div className="cls-mx-auto cls-px-4 cls-flex cls-items-center cls-justify-between">
        <div className="cls-flex-1 cls-overflow-hidden">
          <div className="cls-banner-scroll cls-whitespace-nowrap">
            <span>{t('banner.announcement')}</span>
          </div>
        </div>
        <Button 
          type="primary"
          ghost
          onClick={handleExploreClick}
          className="ml-4 cls-bg-white cls-text-[var(--ant-primary)] cls-border-white hover:bg-gray-100"
        >
          {t('banner.cta')}
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
