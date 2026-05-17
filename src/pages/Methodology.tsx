import PageHeader from '../components/PageHeader';
import MethodologyEngine from '../sections/MethodologyEngine';
import BDMotion from '../sections/BDMotion';
import SignalsAndSources from '../sections/SignalsAndSources';
import MethodologyLayers from '../sections/MethodologyLayers';
import QuestionEngine from '../sections/QuestionEngine';
import VoiceAndConfidence from '../sections/VoiceAndConfidence';
import MethodologyClose from '../sections/MethodologyClose';

export default function Methodology() {
  return (
    <>
      <PageHeader
        code="04 / METHODOLOGY"
        eyebrow="SIGINT for GovCon"
        title={
          <>
            Federal growth is a signal problem{' '}
            <span className="text-signal-400">before it is a capture problem.</span>
          </>
        }
        intro={
          <>
            <span className="block">
              Signal Force applies intelligence discipline, AI-assisted analysis, and modern GovCon BD methodology to turn raw market movement into prioritized action.
            </span>
            <span className="mt-5 block text-bone-200">
              The federal market does not move in a straight line. Budgets shift. Agencies signal priorities before solicitations drop. Incumbents expose gaps. Primes move capture teams. Program leaders change seats. Technologies rise. Set-aside strategies evolve. News, policy, funding, contracts, relationships, and mission demand all move at once.
            </span>
            <span className="mt-5 block text-bone-200">
              Signal Force is built to read those movements together. It collects the signal, structures the context, correlates the layers, and produces the intelligence a BD team can actually use.
            </span>
            <span className="mt-6 block font-mono text-sm uppercase tracking-widest2 text-signal-400">
              Raw signal in. Decision-ready action out.
            </span>
          </>
        }
      />

      <MethodologyEngine />
      <BDMotion />
      <SignalsAndSources />
      <MethodologyLayers />
      <QuestionEngine />
      <VoiceAndConfidence />
      <MethodologyClose />
    </>
  );
}
