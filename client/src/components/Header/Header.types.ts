export interface NavigationItem {
  key: string;
  label: string;
  href: string;
}

export interface UserInfo {
  name: string;
  avatar?: string;
  initials: string;
}

export interface HeaderProps {
  navigation?: NavigationItem[];
  user?: UserInfo;
  notificationCount?: number;
  companyName?: string;
}
