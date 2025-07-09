import { Booking } from '@/components/RecentBookings/RecentBookings.types';

export const bookingsService = {
  getRecentBookings: async (): Promise<Booking[]> => {
    // Mock implementation - replace with actual API call
    return [
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
    ];
  },

  getBookingById: async (id: string): Promise<Booking | null> => {
    const bookings = await bookingsService.getRecentBookings();
    return bookings.find(booking => booking.id === id) || null;
  },

  updateBookingStatus: async (id: string, status: string): Promise<boolean> => {
    // Mock implementation - replace with actual API call
    console.log(`Updating booking ${id} status to ${status}`);
    return true;
  }
};
