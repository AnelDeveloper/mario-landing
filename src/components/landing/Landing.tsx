import { AboutMario } from "./AboutMario";
import { AppLauncher } from "./AppLauncher";
import { FinalCta } from "./FinalCta";
import { FlagshipProgram } from "./FlagshipProgram";
import { ForWhom } from "./ForWhom";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Offerings } from "./Offerings";

/** The whole landing page, rendered for "/" and for unknown URLs (see app/not-found.tsx). */
export function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <FlagshipProgram />
        <Offerings />
        <AboutMario />
      </main>
      <FinalCta />
      <AppLauncher />
    </>
  );
}
