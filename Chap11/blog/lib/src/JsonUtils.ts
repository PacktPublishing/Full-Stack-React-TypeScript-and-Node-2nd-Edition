export function serializeBigInt(
  obj: [] | Object | string | bigint
): [] | Object | string {
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

export function deserializeBigInt(
  obj: [] | Object | string
): [] | Object | string | bigint {
  if (Array.isArray(obj)) {
    return obj.map(deserializeBigInt);
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]: [string, any]) => [
        key,
        deserializeBigInt(value),
      ])
    );
  } else if (typeof obj === "string" && !isNaN(Number(obj))) {
    return BigInt(obj);
  }
  return obj;
}

export function isBigInt(value: [] | Object | string | bigint): boolean {
  return (
    typeof value === "bigint" ||
    (typeof value === "string" && /^\d+n$/.test(value))
  );
}
