import { format } from "date-fns";

/// Uses 24hour time
export function formattedNow() {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss");
}
