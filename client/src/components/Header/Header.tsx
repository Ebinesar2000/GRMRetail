import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Avatar } from 'antd';
import { BellRing, PlaneIcon } from 'lucide-react';
import { HeaderProps } from './Header.types';
import Accessibility from '@/components/Accessibility/Accessibility';

const Header: React.FC<HeaderProps> = ({ 
  notificationCount = 3,
  companyName = "GroupRM",
  user = { name: "John Smith", initials: "JS" }
}) => {
  const { t } = useTranslation();

  const navigationItems = [
    { key: 'home', label: t('nav.home'), href: '#' },
    { key: 'dashboard', label: t('nav.dashboard'), href: '#' },
    { key: 'manage_booking', label: t('nav.manage_booking'), href: '#' },
    { key: 'new_booking', label: t('nav.new_booking'), href: '#' },
    { key: 'payments', label: t('nav.payments'), href: '#' },
    { key: 'bids', label: t('nav.bids'), href: '#' },
    { key: 'settings', label: t('nav.settings'), href: '#' },
  ];

  return (
    <header className="bg-[var(--ant-dark)] text-white">
      <div className=" cls-mx-auto cls-px-4">
        <div className="cls-flex cls-items-center cls-justify-between cls-h-16">
          <div className="cls-flex cls-items-center cls-space-x-8">
            <div className="cls-flex cls-items-center cls-space-x-2">
              <PlaneIcon className="cls-text-[var(--ant-primary)] cls-text-xl" />
              <span className="cls-text-xl cls-font-bold">{companyName}</span>
            </div>
            <nav className="cls-hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="hover:text-[var(--ant-primary)] cls-transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="cls-flex cls-items-center cls-space-x-4">
            <Badge count={notificationCount}>
              <button className="cls-relative">
                <BellRing className="cls-text-lg" />
              </button>
            </Badge>
            <div className="cls-flex cls-items-center cls-space-x-2">
              <Avatar 
                style={{ backgroundColor: 'var(--ant-primary)' }}
                size="default"
              >
                {user.initials}
              </Avatar>
              <span className="hidden md:block">{user.name}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
