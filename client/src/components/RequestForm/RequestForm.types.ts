export type TripType = 'oneway' | 'roundtrip' | 'multicity';

export interface TripSegment {
  from: string;
  to: string;
  departureDate: string;
}

export interface PassengerCounts {
  adults: number;
  kids: number;
  infants: number;
}

export interface RequestFormData {
  tripType: TripType;
  segments: TripSegment[];
  returnDate?: string;
  passengers: PassengerCounts;
  cabin: string;
}

export interface CityOption {
  value: string;
  label: string;
}
