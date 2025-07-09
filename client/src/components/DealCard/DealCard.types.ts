export interface Deal {
  title: string;
  discount: number;
  from: string;
  to: string;
  originalPrice: number;
  price: number;
  rating: number;
  groupSize: string;
  availableSeats: number;
  departureWindow: string;
  stayDuration: string;
  features: string[];
  bookBy: string;
  validUntil: string;
}

export interface DealCardProps {
  deal: Deal;
  onViewDetails?: () => void;
  onBookNow?: () => void;
}
