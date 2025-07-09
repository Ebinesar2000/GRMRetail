import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Tag, Row, Col } from 'antd';
import { ArrowRightIcon } from 'lucide-react';
import { Booking, BookingStatus } from './RecentBookings.types';

const RecentBookings: React.FC = () => {
  const { t } = useTranslation();
  
  const [bookings] = useState<Booking[]>([
    {
      id: "GR-2024-001",
      status: "Confirmed",
      type: "Corporate",
      from: "New York",
      to: "Las Vegas",
      departureDate: "Jan 15, 2024",
      passengers: 25
    },
    {
      id: "GR-2024-002",
      status: "Cancelled",
      type: "Corporate",
      from: "New York",
      to: "Las Vegas",
      departureDate: "Jan 18, 2024",
      passengers: 15
    },
    {
      id: "GR-2024-003",
      status: "Confirmed",
      type: "Corporate",
      from: "New York",
      to: "Las Vegas",
      departureDate: "Jan 15, 2024",
      passengers: 35
    },
    {
      id: "GR-2024-004",
      status: "Pending",
      type: "Corporate",
      from: "New York",
      to: "Las Vegas",
      departureDate: "Jan 15, 2024",
      passengers: 20
    }
  ]);

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'Confirmed':
        return 'success';
      case 'Cancelled':
        return 'error';
      case 'Pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusClass = (status: BookingStatus) => {
    switch (status) {
      case 'Confirmed':
        return 'status-confirmed';
      case 'Cancelled':
        return 'status-cancelled';
      case 'Pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  const handleManageBooking = (bookingId: string) => {
    console.log('Manage booking:', bookingId);
  };

  return (
    <Card className="cls-card cls-overflow-hidden cls-mb-6">
      <div className="cls-section-header">
        <h2 className="cls-text-xl cls-font-bold cls-mb-2">{t('bookings.title')}</h2>
        <p className="cls-section-subtitle">{t('bookings.subtitle')}</p>
      </div>
      <div className="cls-p-6">
        <Row gutter={[24, 24]}>
          {bookings.map((booking) => (
            <Col key={booking.id} xs={24} sm={12} md={8} lg={6}>
              <Card className="cls-border cls-rounded-lg cls-hover-shadow">
                <div className="cls-flex cls-justify-between cls-items-start cls-mb-3">
                  <div>
                    <div className="cls-font-semibold cls-text-lg">{booking.id}</div>
                    <div className="cls-flex cls-space-x-2 cls-mt-1">
                      <Tag 
                        color={getStatusColor(booking.status)}
                        className={getStatusClass(booking.status)}
                      >
                        {booking.status}
                      </Tag>
                      <Tag color="blue">{booking.type}</Tag>
                    </div>
                  </div>
                </div>
                
                <div className="cls-space-y-2 cls-mb-4">
                  <div className="cls-flex cls-items-center cls-text-sm">
                    <span className="cls-text-gray-600 cls-w-16">{t('bookings.route')}</span>
                    <span>{booking.from}</span>
                    <ArrowRightIcon className="cls-mx-2 cls-text-gray-400" size={14} />
                    <span>{booking.to}</span>
                  </div>
                  <div className="cls-flex cls-items-center cls-text-sm">
                    <span className="cls-text-gray-600 cls-w-16">{t('bookings.departure')}</span>
                    <span>{booking.departureDate}</span>
                  </div>
                  <div className="cls-flex cls-items-center cls-text-sm">
                    <span className="cls-text-gray-600 cls-w-16">{t('bookings.passengers')}</span>
                    <span>{booking.passengers} passengers</span>
                  </div>
                </div>
                
                <Button 
                  type="primary" 
                  block
                  onClick={() => handleManageBooking(booking.id)}
                >
                  {t('bookings.manage')}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  );
};

export default RecentBookings;
