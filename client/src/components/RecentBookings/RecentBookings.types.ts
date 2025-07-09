export type BookingStatus = 'Confirmed' | 'Cancelled' | 'Pending';

export interface Booking {
  id: string;
  status: BookingStatus;
  type: string;
  from: string;
  to: string;
  departureDate: string;
  passengers: number;
}

export interface RecentBookingsProps {
  bookings?: Booking[];
  onManageBooking?: (bookingId: string) => void;
}
