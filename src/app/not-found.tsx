import { Landing } from "@/components/landing/Landing";

/**
 * Unknown URLs show the landing page, as the prototype's router does for unknown routes
 * (`if (!known.includes(name)) name = 'landing'`), and the URL stays as typed. The response
 * keeps its 404 status, so Next.js marks it `noindex` and only "/" gets indexed.
 */
export default function NotFound() {
  return <Landing />;
}
