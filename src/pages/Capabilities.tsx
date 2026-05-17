import PageHeader from '../components/PageHeader';
import IntelligenceEngine from '../sections/IntelligenceEngine';
import WhatItReads from '../sections/WhatItReads';
import Reads from '../sections/Reads';
import DecisionMatrix from '../sections/DecisionMatrix';
import MethodologyCallout from '../sections/MethodologyCallout';

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        code="03 / THE PLATFORM"
        eyebrow="Decision-Ready Intelligence"
        title={
          <>
            Decision-Ready Intelligence.{' '}
            <span className="text-signal-400">One platform.</span>{' '}
            Every read.
          </>
        }
        intro={
          <>
            <span className="block">
              One platform. One methodology. Every read the BD team needs to make the call.
            </span>
            <span className="mt-5 block text-bone-200">
              Signal Force turns federal market activity into decision-ready intelligence for GovCon growth teams. It connects agency priorities, opportunity movement, funding signals, incumbent context, emerging technology trends, company positioning, and relationship data into a clear read on what to do next.
            </span>
            <span className="mt-5 block font-mono text-sm uppercase tracking-widest2 text-bone-400">
              Where to focus this quarter. Who to target this week. Whether to pursue. How to team. What to do Monday morning.
            </span>
            <span className="mt-6 block text-signal-400 font-semibold">
              Same engine. Different reads. All decision-ready.
            </span>
          </>
        }
      />

      <IntelligenceEngine />
      <WhatItReads />
      <Reads />
      <DecisionMatrix />
      <MethodologyCallout />
    </>
  );
}
