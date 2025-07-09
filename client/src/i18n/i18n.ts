import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translations inline to avoid import issues
const enTranslation = {
  "nav": {
    "home": "Home",
    "dashboard": "Dashboard",
    "manage_booking": "Manage Booking",
    "new_booking": "New Booking",
    "payments": "Payments",
    "bids": "Bids",
    "settings": "Settings"
  },
  "banner": {
    "announcement": "🎉 Limited Time Offer: Save up to 40% on group bookings! Book before December 31st for exclusive deals.",
    "cta": "Explore Now"
  },
  "booking": {
    "title": "Quick Booking",
    "subtitle": "Get started with your group travel booking",
    "one_way": "One way",
    "round_trip": "Round trip",
    "multi_city": "Multi city",
    "origin": "Origin",
    "destination": "Destination",
    "departure_date": "Departure date",
    "return_date": "Return date",
    "passengers": "Passengers",
    "adults": "Adults (12+ years)",
    "kids": "Kids (2-11 years)",
    "infants": "Infants (0-2 years)",
    "cabin": "Cabin",
    "economy": "Economy",
    "business": "Business",
    "first": "First Class",
    "get_fares": "Get Fares",
    "origin_placeholder": "Select departure city",
    "destination_placeholder": "Select destination"
  },
  "deals": {
    "title": "Hot Deals & Offers",
    "subtitle": "Exclusive deals today with our popular routes",
    "group_size": "Group Size",
    "available": "Available",
    "departure_window": "Departure Window",
    "stay_duration": "Stay Duration",
    "included_features": "Included Features:",
    "book_by": "Book by:",
    "valid_until": "Valid until:",
    "view_details": "View Details",
    "book_now": "Book Now"
  },
  "marketplace": {
    "title": "Your Marketplace",
    "subtitle": "Discover exclusive travel packages and deals",
    "search_packages": "Search Travel Packages",
    "destination": "Destination",
    "travel_date": "Travel Date",
    "passengers": "Passengers",
    "package_type": "Package Type",
    "all_packages": "All packages",
    "luxury": "Luxury",
    "adventure": "Adventure",
    "family": "Family",
    "business": "Business",
    "search_packages_btn": "Search Packages",
    "reset_filters": "Reset Filters",
    "book_now": "Book now",
    "valid_until": "Valid until:"
  },
  "bookings": {
    "title": "Recent Bookings",
    "subtitle": "Your latest group travel bookings",
    "route": "Route:",
    "departure": "Date:",
    "passengers": "Pax:",
    "manage": "Manage booking"
  },
  "accessibility": {
    "title": "Accessibility Options",
    "default": "Default Theme",
    "dark": "Dark Theme",
    "high_contrast": "High Contrast",
    "yellow_black": "Yellow on Black",
    "black_yellow": "Black on Yellow"
  },
  "failure": "Operation failed"
};

const hiTranslation = {
  "nav": {
    "home": "होम",
    "dashboard": "डैशबोर्ड",
    "manage_booking": "बुकिंग प्रबंधन",
    "new_booking": "नई बुकिंग",
    "payments": "भुगतान",
    "bids": "बोलियां",
    "settings": "सेटिंग्स"
  },
  "banner": {
    "announcement": "🎉 सीमित समय की पेशकश: समूहिक बुकिंग पर 40% तक की बचत! विशेष सौदों के लिए 31 दिसंबर से पहले बुक करें।",
    "cta": "अभी एक्सप्लोर करें"
  },
  "booking": {
    "title": "त्वरित बुकिंग",
    "subtitle": "अपनी समूहिक यात्रा बुकिंग शुरू करें",
    "one_way": "एक तरफ़ा",
    "round_trip": "वापसी यात्रा",
    "multi_city": "बहु शहर",
    "origin": "प्रस्थान स्थल",
    "destination": "गंतव्य",
    "departure_date": "प्रस्थान तिथि",
    "return_date": "वापसी तिथि",
    "passengers": "यात्री",
    "adults": "वयस्क (12+ वर्ष)",
    "kids": "बच्चे (2-11 वर्ष)",
    "infants": "शिशु (0-2 वर्ष)",
    "cabin": "केबिन",
    "economy": "इकॉनमी",
    "business": "बिजनेस",
    "first": "फर्स्ट क्लास",
    "get_fares": "किराया प्राप्त करें",
    "origin_placeholder": "प्रस्थान शहर चुनें",
    "destination_placeholder": "गंतव्य चुनें"
  },
  "deals": {
    "title": "हॉट डील्स और ऑफर्स",
    "subtitle": "आज हमारे लोकप्रिय रूट्स के साथ विशेष सौदे",
    "group_size": "समूह का आकार",
    "available": "उपलब्ध",
    "departure_window": "प्रस्थान विंडो",
    "stay_duration": "रहने की अवधि",
    "included_features": "शामिल सुविधाएं:",
    "book_by": "इससे पहले बुक करें:",
    "valid_until": "तक मान्य:",
    "view_details": "विवरण देखें",
    "book_now": "अभी बुक करें"
  },
  "marketplace": {
    "title": "आपका मार्केटप्लेस",
    "subtitle": "विशेष यात्रा पैकेज और सौदे खोजें",
    "search_packages": "यात्रा पैकेज खोजें",
    "destination": "गंतव्य",
    "travel_date": "यात्रा तिथि",
    "passengers": "यात्री",
    "package_type": "पैकेज प्रकार",
    "all_packages": "सभी पैकेज",
    "luxury": "लक्जरी",
    "adventure": "एडवेंचर",
    "family": "पारिवारिक",
    "business": "बिजनेस",
    "search_packages_btn": "पैकेज खोजें",
    "reset_filters": "फिल्टर रीसेट करें",
    "book_now": "अभी बुक करें",
    "valid_until": "तक मान्य:"
  },
  "bookings": {
    "title": "हाल की बुकिंग्स",
    "subtitle": "आपकी नवीनतम समूहिक यात्रा बुकिंग्स",
    "route": "रूट:",
    "departure": "तारीख:",
    "passengers": "यात्री:",
    "manage": "बुकिंग प्रबंधन"
  },
  "accessibility": {
    "title": "पहुंचगम्यता विकल्प",
    "default": "डिफ़ॉल्ट थीम",
    "dark": "डार्क थीम",
    "high_contrast": "हाई कंट्रास्ट",
    "yellow_black": "पीला और काला",
    "black_yellow": "काला और पीला"
  },
  "failure": "ऑपरेशन विफल"
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en': {
        translation: enTranslation
      },
      'hi': {
        translation: hiTranslation
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
