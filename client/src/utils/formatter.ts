export const formatPrice = (price: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

export const formatDate = (date: string | Date, locale: string = 'en-US'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateObj);
};

export const formatPassengerCount = (count: number): string => {
  return `${count} passenger${count !== 1 ? 's' : ''}`;
};

export const formatFlightRoute = (from: string, to: string): string => {
  return `${from} → ${to}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const formatDuration = (days: number): string => {
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  
  let result = `${weeks} week${weeks !== 1 ? 's' : ''}`;
  if (remainingDays > 0) {
    result += ` ${remainingDays} day${remainingDays !== 1 ? 's' : ''}`;
  }
  
  return result;
};
