import { FileText, ShieldCheck, ShieldAlert, ShieldQuestion, Eye, Shield } from 'lucide-react';
import { voiceTenetsDeep, confidenceLevels } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const CONFIDENCE_ICONS = [ShieldCheck, Shield, ShieldAlert, ShieldQuestion, Eye] as const;

export default function VoiceAndConfidence() {
  return (
    <Section
      id="voice"
      code="VX / VOICE + CONFIDENCE"
      eyebrow="The methodology made audible"
      title={
        <>
          A voice you can stake a decision on.{' '}
          <span className="text-signal-400">Calibrated, sourced, restrained.</span>
        </>
      }
      intro="Every brief reads like a briefing — finding-first, sourced, labeled by confidence, ready to act on. Signal Force never pretends uncertainty does not exist. What is known, inferred, missing, and worth watching is named on the page, not buried."
    >
      <div className="panel relative overflow-hidden p-6 md:p-7">
        {/* Voice tenets */}
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
            Voice · 8 Tenets
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {voiceTenetsDeep.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.03}>
              <div className="rounded-md border border-white/[0.06] bg-ink-900/60 p-4 h-full">
                <div className="flex items-center gap-2">
                  <FileText size={12} className="text-signal-400" />
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-sm text-bone-50">{v.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-bone-300">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Confidence calibration — compact strip */}
        <div className="mt-8 border-t border-white/[0.06] pt-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
              Confidence Calibration · 5 Levels
            </span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
              Labeled · Never implied
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {confidenceLevels.map((c, i) => {
              const Icon = CONFIDENCE_ICONS[i] ?? Shield;
              return (
                <Reveal key={c.code} delay={i * 0.04}>
                  <div className="rounded-md border border-signal-500/20 bg-signal-500/[0.03] p-4 h-full">
                    <div className="flex items-center justify-between">
                      <Icon size={14} className="text-signal-400" />
                      <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
                        {c.code}
                      </span>
                    </div>
                    <h4 className="mt-3 font-display text-sm text-bone-50">{c.name}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-bone-300">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
