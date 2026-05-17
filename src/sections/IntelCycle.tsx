import { motion } from 'framer-motion';
import { intelCycle } from '../lib/content';
import Section from '../components/Section';

export default function IntelCycle() {
  return (
    <Section
      id="cycle"
      code="04 / METHODOLOGY"
      eyebrow="SIGINT for GovCon"
      title={
        <>
          A seven-step intelligence cycle,{' '}
          <span className="text-signal-400">turning raw federal signal into prioritized BD action.</span>
        </>
      }
      intro="The discipline of signals intelligence — collect raw signal, process into structured data, analyze for patterns, produce reports, deliver to decision-makers, refine — maps directly onto federal BD. Signal Force is structured as that cycle."
    >
      <div className="relative">
        {/* connecting line */}
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-signal-500/30 to-transparent md:block" />

        <ol className="relative space-y-4">
          {intelCycle.map((step, i) => (
            <motion.li
              key={step.code}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid items-start gap-5 md:grid-cols-12"
            >
              {/* number node */}
              <div className="md:col-span-1">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-ink-850 font-mono text-sm text-bone-300 group-hover:border-signal-500/50 group-hover:bg-signal-500/10 group-hover:text-signal-400 transition-colors">
                  {step.code}
                  <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-signal-500/0 transition-all group-hover:ring-signal-500/40" />
                </div>
              </div>

              {/* content */}
              <div className="md:col-span-11">
                <div className="panel flex flex-col gap-2 p-5 transition-all duration-300 group-hover:border-signal-500/30 md:flex-row md:items-center md:gap-8">
                  <div className="md:w-64 shrink-0">
                    <h3 className="font-display text-lg text-bone-50">{step.name}</h3>
                  </div>
                  <div className="hidden h-10 w-px bg-white/10 md:block" />
                  <p className="text-sm leading-relaxed text-bone-300">{step.blurb}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
