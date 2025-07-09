import { Deal } from '@/components/DealCard/DealCard.types';

export const dealsService = {
  getDeals: async (): Promise<Deal[]> => {
    // Mock implementation - replace with actual API call
    return [
      {
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
      },
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
      }
    ];
  },

  getDealById: async (id: string): Promise<Deal | null> => {
    const deals = await dealsService.getDeals();
    return deals.find(deal => deal.title.includes(id)) || null;
  }
};
