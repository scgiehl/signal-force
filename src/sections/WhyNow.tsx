import { whyNow } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function WhyNow() {
  return (
    <Section
      id="why-now"
      code="06 / WHY NOW"
      eyebrow="The 2026 Window"
      title={
        <>
          Three conditions converging.{' '}
          <span className="text-signal-400">This is the build window.</span>
        </>
      }
      intro="Federal BD has always been a signals problem. What is new is the combination of AI capability, mature federal data infrastructure, and a market in rapid transition."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {whyNow.map((w, i) => (
          <Reveal key={w.code} delay={i * 0.08}>
            <div className="panel relative h-full overflow-hidden p-7">
              <div className="absolute right-5 top-5 font-display text-5xl text-white/[0.04]">{w.code}</div>
              <div className="label">Condition {w.code}</div>
              <h3 className="mt-4 font-display text-xl leading-tight text-bone-50">{w.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone-300">{w.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
