import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header/Header';
import TopBanner from '@/components/TopBanner/TopBanner';
import RequestForm from '@/components/RequestForm/RequestForm';
import DealCard from '@/components/DealCard/DealCard';
import Marketplace from '@/components/Marketplace/Marketplace';
import RecentBookings from '@/components/RecentBookings/RecentBookings';
import Accessibility from '@/components/Accessibility/Accessibility';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const dealData = {
    title: "Flash Sale: NYC to Vegas",
    discount: 34,
    from: "New York",
    to: "Las Vegas",
    originalPrice: 450,
    price: 299,
    rating: 4.8,
    groupSize: "15-50 pax",
    availableSeats: 45,
    departureWindow: "Jan 15 - Mar 30, 2025",
    stayDuration: "3-7 days",
    features: ["Free seat selection", "Priority boarding", "Complimentary snacks"],
    bookBy: "Dec 15",
    validUntil: "Dec 31, 2024"
  };

  const additionalDeals = [
    {
      title: "Special: LA to Miami",
      discount: 25,
      from: "Los Angeles",
      to: "Miami",
      originalPrice: 380,
      price: 285,
      rating: 4.6,
      groupSize: "10-40 pax",
      availableSeats: 32,
      departureWindow: "Feb 1 - Apr 15, 2025",
      stayDuration: "4-6 days",
      features: ["Free baggage", "Airport lounge access", "Meal included"],
      bookBy: "Jan 20",
      validUntil: "Jan 31, 2025"
    },
    {
      title: "Hot Deal: Chicago to Boston",
      discount: 30,
      from: "Chicago",
      to: "Boston",
      originalPrice: 320,
      price: 224,
      rating: 4.7,
      groupSize: "8-30 pax",
      availableSeats: 28,
      departureWindow: "Mar 1 - May 20, 2025",
      stayDuration: "2-5 days",
      features: ["Express check-in", "Free Wi-Fi", "Snacks included"],
      bookBy: "Feb 10",
      validUntil: "Feb 28, 2025"
    }
  ];

  const allDeals = [dealData, ...additionalDeals];

  return (
    <div className="cls-min-h-screen cls-bg-gray-50">
      <Header />
      <TopBanner />
      <div className="cls-container cls-page-spacing">
        {/* Quick Booking and Hot Deals side by side */}
        <div className="cls-grid-2 cls-mb-6">
          {/* Quick Booking */}
          <div>
            <RequestForm />
          </div>
          
          {/* Hot Deals & Offers */}
          <div className="cls-card cls-overflow-hidden">
            <div className="cls-bg-blue-800 cls-text-white cls-p-6">
              <h2 className="cls-text-2xl cls-font-bold cls-mb-2">{t('deals.title')}</h2>
              <p className="cls-text-base">{t('deals.subtitle')}</p>
            </div>
            <div className="cls-p-6 cls-max-h-96 cls-overflow-y-auto">
              <div className="cls-space-y-4">
                {allDeals.map((deal, index) => (
                  <DealCard key={index} deal={deal} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Marketplace />
        <RecentBookings />
      </div>
      <Accessibility />
    </div>
  );
};

export default LandingPage;
