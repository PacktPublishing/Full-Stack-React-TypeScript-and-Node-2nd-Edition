import jwt from "jsonwebtoken";
import ms, { type StringValue } from "ms";
import type { Response } from "express";

export type JwtPayloadType = "access" | "refresh";
export type JwtPayload = {
  userId: string;
  type: JwtPayloadType;
  exp: number; // in unix seconds
};

function getCookieDomain() {
  if (!process.env.COOKIE_DOMAIN) {
    throw new Error("COOKIE_DOMAIN not set!");
  }

  return process.env.COOKIE_DOMAIN;
}
const COOKIE_DOMAIN = getCookieDomain();

function getJwtSecret() {
  if (!process.env.JWT_SECRET) {
    throw new Error(
      "JWT_SECRET not set! Cannot generate authentication token."
    );
  }

  return process.env.JWT_SECRET;
}
const JWT_SECRET = getJwtSecret();

function getAccessToken(userId: string) {
  return jwt.sign(
    {
      userId,
      type: "access",
      exp:
        Math.floor(Date.now() / 1000) +
        ms(process.env.JWT_EXPIRES_IN as StringValue) / 1000,
    },
    JWT_SECRET,
    {
      subject: userId,
      issuer: COOKIE_DOMAIN,
      audience: COOKIE_DOMAIN,
    }
  );
}

function getJwtRefreshSecret() {
  if (!process.env.JWT_REFRESH_SECRET) {
    throw new Error(
      "JWT_REFRESH_SECRET not set! Cannot generate refresh token."
    );
  }

  return process.env.JWT_REFRESH_SECRET;
}
const JWT_REFRESH_SECRET = getJwtRefreshSecret();

function getRefreshToken(userId: string) {
  return jwt.sign(
    {
      userId,
      type: "refresh",
      exp:
        Math.floor(Date.now() / 1000) +
        ms(process.env.JWT_REFRESH_EXPIRES_IN as StringValue) / 1000,
    },
    JWT_REFRESH_SECRET,
    {
      subject: userId,
      issuer: COOKIE_DOMAIN,
      audience: COOKIE_DOMAIN,
    }
  );
}

export function verifyJwtToken(token: string, isRefresh = false) {
  try {
    // notice verify checks not only the token, but also the issuer and audience
    const payload = jwt.verify(
      token,
      !isRefresh ? JWT_SECRET : JWT_REFRESH_SECRET,
      {
        issuer: COOKIE_DOMAIN,
        audience: COOKIE_DOMAIN,
      }
    ) as JwtPayload;

    return payload;
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      throw new Error("Token expired");
    }
    if (e instanceof jwt.JsonWebTokenError) {
      throw new Error("Invalid token");
    }
    throw new Error("Token verification failed");
  }
}

function getCookieOptions(name: JwtPayloadType) {
  const domain =
    process.env.NODE_ENV === "development" ? undefined : COOKIE_DOMAIN;

  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.SAME_SITE
      ? (process.env.SAME_SITE as "none" | "lax" | "strict")
      : "none",
    domain,
    path: "/",
    maxAge:
      name === "access"
        ? ms(process.env.JWT_EXPIRES_IN as StringValue)
        : ms(process.env.JWT_REFRESH_EXPIRES_IN as StringValue),
  };
}

function setSecureCookie(
  res: Response,
  name: JwtPayloadType,
  tokenValue: string
) {
  res.cookie(name, tokenValue, getCookieOptions(name));
}

export function setAuthCookies(res: Response, userId: string) {
  setSecureCookie(res, "access", getAccessToken(userId));
  setSecureCookie(res, "refresh", getRefreshToken(userId));
}

export function clearAuthCookies(res: Response) {
  res.clearCookie("access", getCookieOptions("access"));
  res.clearCookie("refresh", getCookieOptions("refresh"));
}
