import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Row, Col } from 'antd';
import MarketplaceFilter from './MarketplaceFilter';
import PackageCard from './PackageCard';
import { MarketplaceFilter as FilterType, TravelPackage } from './Marketplace.types';

const Marketplace: React.FC = () => {
  const { t } = useTranslation();
  
  const allPackages: TravelPackage[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      from: "New York",
      to: "London",
      title: "Executive Business Package",
      price: "$1,299",
      originalPrice: "$1,599",
      features: ["Round-trip flights", "7 nights beachfront resort", "Spa treatments included"],
      validUntil: "Dec 31, 2023",
      badge: "Hot Deal"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      from: "Chicago",
      to: "Paris",
      title: "European Explorer Package",
      price: "$899",
      originalPrice: "$1,199",
      features: ["Round-trip Economy flights", "5 nights downtown hotel", "Museum passes included"],
      validUntil: "Dec 31, 2023"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      from: "Miami",
      to: "Santorini",
      title: "Mediterranean Getaway",
      price: "$1,599",
      originalPrice: "$1,999",
      features: ["Round-trip premium flights", "6 nights luxury resort", "All meals included"],
      validUntil: "Dec 31, 2023"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551524164-6cf1ac14577a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      from: "Denver",
      to: "Zurich",
      title: "Alpine Adventure Package",
      price: "$2,199",
      originalPrice: "$2,799",
      features: ["Round-trip flights", "7 nights mountain chalet", "Ski equipment included"],
      validUntil: "Dec 31, 2023"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      from: "Los Angeles",
      to: "Tokyo",
      title: "Asian Adventure Package",
      price: "$1,799",
      originalPrice: "$2,299",
      features: ["Round-trip flights", "8 nights city center hotel", "Cultural tours included"],
      validUntil: "Dec 31, 2023"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      from: "Boston",
      to: "Barcelona",
      title: "Mediterranean Explorer",
      price: "$1,099",
      originalPrice: "$1,399",
      features: ["Round-trip flights", "6 nights beachfront hotel", "Daily breakfast included"],
      validUntil: "Dec 31, 2023"
    }
  ];

  const [packages, setPackages] = useState<TravelPackage[]>(allPackages);
  const [currentFilters, setCurrentFilters] = useState<FilterType>({
    origin: '',
    destination: '',
    travelDate: '',
    passengers: 0,
    packageType: ''
  });

  const handleSearch = (filters: FilterType) => {
    console.log('Search filters:', filters);
    setCurrentFilters(filters);
    
    let filteredPackages = allPackages;
    
    // Filter by origin
    if (filters.origin && filters.origin.trim() !== '') {
      filteredPackages = filteredPackages.filter(pkg => 
        pkg.from.toLowerCase().includes(filters.origin.toLowerCase())
      );
    }
    
    // Filter by destination
    if (filters.destination && filters.destination.trim() !== '') {
      filteredPackages = filteredPackages.filter(pkg => 
        pkg.to.toLowerCase().includes(filters.destination.toLowerCase())
      );
    }
    
    // Filter by package type
    if (filters.packageType && filters.packageType !== 'all') {
      filteredPackages = filteredPackages.filter(pkg => 
        pkg.title.toLowerCase().includes(filters.packageType.toLowerCase())
      );
    }
    
    setPackages(filteredPackages);
  };

  const handleResetFilters = () => {
    console.log('Reset filters');
    setCurrentFilters({
      origin: '',
      destination: '',
      travelDate: '',
      passengers: 0,
      packageType: ''
    });
    setPackages(allPackages);
  };

  return (
    <Card className="cls-card cls-overflow-hidden cls-mb-6">
      <div className="cls-section-header">
        <h2 className="cls-text-xl cls-font-bold cls-mb-2">{t('marketplace.title')}</h2>
        <p className="cls-section-subtitle">{t('marketplace.subtitle')}</p>
      </div>
      <div className="cls-p-6">
        <MarketplaceFilter 
          onSearch={handleSearch}
          onReset={handleResetFilters}
        />
        
        <Row gutter={[24, 24]}>
          {packages.map((pkg) => (
            <Col key={pkg.id} xs={24} sm={12} md={8} lg={6}>
              <PackageCard package={pkg} />
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  );
};

export default Marketplace;
