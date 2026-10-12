// Public URLs, resolved at build time (NEXT_PUBLIC_* values are inlined by `next build`).
// Only Server Components import this module, so the checks below run during the build.

/** The Mandarić Method product app (a separate Next.js site). Every app link points into it. */
export const APP_URL = resolveUrl(
  "NEXT_PUBLIC_APP_URL",
  process.env.NEXT_PUBLIC_APP_URL,
  "http://localhost:3001",
);

/** Origin of the product app, used for <link rel="preconnect">. */
export const APP_ORIGIN = new URL(APP_URL).origin;

/** Public URL of this landing page; base for absolute Open Graph URLs. */
export const SITE_URL = resolveUrl(
  "NEXT_PUBLIC_SITE_URL",
  process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined),
  "http://localhost:3002",
);

/**
 * Returns `value` if it is an absolute http(s) URL; throws a clear error for anything else.
 * Unset, it falls back to `localDefault` (the local dev port). A Vercel production deployment
 * fails instead, and any other production build warns, so links never silently ship
 * pointing at localhost.
 */
function resolveUrl(name: string, value: string | undefined, localDefault: string): string {
  if (!value) {
    if (process.env.VERCEL_ENV === "production") {
      throw new Error(`${name} must be set for production deployments (see .env.example).`);
    }
    if (process.env.NODE_ENV === "production") {
      console.warn(
        `⚠ ${name} is not set, so it falls back to ${localDefault}. Set it in the build environment before deploying (see .env.example).`,
      );
    }
    return localDefault;
  }

  let protocol: string | undefined;
  try {
    protocol = new URL(value).protocol;
  } catch {
    // reported below
  }
  if (protocol !== "http:" && protocol !== "https:") {
    throw new Error(
      `${name} must be an absolute http(s) URL such as https://example.com, but it is "${value}" (see .env.example).`,
    );
  }
  return value;
}
