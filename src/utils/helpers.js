import { formatDistance, parseISO } from 'date-fns';
//import { differenceInDays } from 'date-fns/esm';

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'INR' }).format(
    value
  );

  export const getToday = (options = {}) => {
    const today = new Date();
    if(options?.end){
      today.setUTCHours(23, 59, 59, 999);
    }
    else{
      today.setUTCHours(0, 0, 0, 0);
    }
    return today.toISOString();
}