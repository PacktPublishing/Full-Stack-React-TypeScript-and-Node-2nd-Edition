export function serializeBigInt(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  } else if (obj !== null && typeof obj === "object") {
    if (obj instanceof Date && !isNaN(obj.getTime())) {
      return obj;
    } else {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]: [string, any]) => [
          key,
          serializeBigInt(value),
        ])
      );
    }
  } else if (typeof obj === "bigint") {
    return obj.toString();
  }
  return obj;
}
