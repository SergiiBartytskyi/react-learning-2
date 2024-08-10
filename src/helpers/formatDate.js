import { formatDistanceToNow, format } from 'date-fns';

export function formatDistance(date) {
  return formatDistanceToNow(new Date(date));
}

export function formatDate(date) {
  return format(new Date(date), 'Pp');
}
