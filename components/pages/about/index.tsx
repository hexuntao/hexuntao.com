import AboutInfo from "./AboutInfo";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import MeColumn from "./MeColumn";
import SiteColumn from "./SiteColumn";
import FQAColumn from "./FQA";

export default function AboutPage() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <AboutInfo />
        <GradientSectionBorder>
          <MeColumn />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <SiteColumn />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <FQAColumn />
        </GradientSectionBorder>
      </main>
    </>
  );
}
