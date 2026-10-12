import type { ComponentPropsWithoutRef } from "react";
import { APP_URL } from "@/lib/site";

type AppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  /** Path inside the product app. The root routes to sign-in, onboarding or the dashboard. */
  path?: `/${string}`;
};

/**
 * A plain link into the product app, so it works without JavaScript and keeps native
 * behaviour for modified clicks (new tab / window).
 * <AppLauncher> picks up `data-app-link` and plays the splash on plain clicks and Space.
 */
export function AppLink({ path = "/", ...props }: AppLinkProps) {
  return <a {...props} href={APP_URL.replace(/\/$/, "") + path} data-app-link="" />;
}
