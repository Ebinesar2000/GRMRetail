import { NavigationItem } from '@/components/Header/Header.types';

export const navigationConfig: NavigationItem[] = [
  { key: 'home', label: 'nav.home', href: '/' },
  { key: 'dashboard', label: 'nav.dashboard', href: '/dashboard' },
  { key: 'manage_booking', label: 'nav.manage_booking', href: '/manage-booking' },
  { key: 'new_booking', label: 'nav.new_booking', href: '/new-booking' },
  { key: 'payments', label: 'nav.payments', href: '/payments' },
  { key: 'bids', label: 'nav.bids', href: '/bids' },
  { key: 'settings', label: 'nav.settings', href: '/settings' },
];
