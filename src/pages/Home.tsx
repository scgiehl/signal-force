import Hero from '../sections/Hero';
import AntiPositioning from '../sections/AntiPositioning';
import IntelLayers from '../sections/IntelLayers';
import Capabilities from '../sections/Capabilities';
import IntelCycle from '../sections/IntelCycle';
import UseCases from '../sections/UseCases';
import WhyNow from '../sections/WhyNow';
import FounderPreview from '../sections/FounderPreview';
import AccessCTA from '../sections/AccessCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AntiPositioning />
      <IntelLayers />
      <Capabilities />
      <IntelCycle />
      <UseCases />
      <WhyNow />
      <FounderPreview />
      <AccessCTA />
    </>
  );
}
