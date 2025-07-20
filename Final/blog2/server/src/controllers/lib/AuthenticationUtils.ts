function getJwtSecret() {
  if (!process.env.JWT_SECRET)
    throw new Error(
      "JWT_SECRET not set! Cannot generate authentication token."
    );

  return process.env.JWT_SECRET;
}

export const JWT_SECRET = getJwtSecret();
