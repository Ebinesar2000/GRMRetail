export interface MarketplaceFilter {
  origin: string;
  destination: string;
  travelDate: string;
  passengers: number;
  packageType: string;
}

export interface TravelPackage {
  id: number;
  image: string;
  from: string;
  to: string;
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
  validUntil: string;
  badge?: string;
}

export interface MarketplaceProps {
  packages?: TravelPackage[];
  onSearch?: (filters: MarketplaceFilter) => void;
  onResetFilters?: () => void;
}
