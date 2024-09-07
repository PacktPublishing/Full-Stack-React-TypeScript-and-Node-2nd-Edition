import { format, formatDistanceToNow } from "date-fns";

const dateFormat = "yyyy-MM-dd HH:mm:ss";
/// Uses 24hour time
export function formattedNow() {
  return format(new Date(), dateFormat);
}

export function formattedDate(date: Date) {
  return format(date, dateFormat);
}

export function friendlyDate(date: Date) {
  return formatDistanceToNow(date);
}
