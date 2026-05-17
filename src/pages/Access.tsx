import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Check, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { brand } from '../lib/content';
import { todayCode } from '../lib/utils';

type Form = {
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
  // Honeypot — hidden from humans, bots fill it; FormSubmit drops those.
  _honey: string;
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

const ROLE_OPTIONS = [
  'Director of Growth',
  'VP / Head of BD',
  'Capture Lead',
  'Founder / CEO',
  'Cleared Staffing Leader',
  'Corp Dev / PE',
  'Other',
];

export default function Access() {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    _honey: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Bot caught the honeypot — silently succeed without transmitting.
    if (form._honey) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    setErrorMsg(null);
    try {
      // FormSubmit's /ajax/ endpoint does not send Access-Control-Allow-Origin,
      // so any cross-origin fetch that tries to READ the response fails CORS.
      // Workaround: POST to the standard endpoint with mode:'no-cors'. The
      // request still reaches FormSubmit (and the email goes out), but the
      // browser blocks JS from reading the opaque response — which is fine
      // because we don't need to. fetch() only rejects on true network errors,
      // so a resolved promise means delivery to FormSubmit succeeded.
      const body = new URLSearchParams();
      body.set('Name', form.name);
      body.set('Email', form.email);
      body.set('Company', form.company);
      body.set('Role', form.role);
      body.set('Use Case', form.useCase);
      body.set('_subject', `Signal Force · Early Access Request from ${form.name}`);
      body.set('_template', 'table');
      body.set('_captcha', 'false');

      await fetch(`https://formsubmit.co/${brand.contactEmail}`, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });
      setStatus('sent');
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error('[Access form submit]', err);
      }
      const raw = err instanceof Error ? err.message : String(err);
      // "Failed to fetch" almost always = blocked at the network layer
      // (ad-blocker, privacy extension, corporate firewall). Tell the user.
      const friendly = /failed to fetch|networkerror|load failed/i.test(raw)
        ? 'The submission was blocked before it left the browser. Disable any ad-blocker or privacy extension on this page (formsubmit.co is on most default blocklists) and try again.'
        : raw;
      setErrorMsg(friendly);
      setStatus('error');
    }
  }

  return (
    <>
      <PageHeader
        code="08 / ACCESS"
        eyebrow="Early Access · Build Phase"
        title={
          <>
            Get on the early access list.{' '}
            <span className="text-signal-400">Talk through a use case.</span>
          </>
        }
        intro="Signal Force is being built in the open with a small group of GovCon operators. Early access partners get first reads on the methodology, first looks at the briefs, and a direct line to the operator building it."
      />

      <section className="relative py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="panel relative overflow-hidden p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status !== 'sent' ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                      <div className="font-mono text-sm uppercase tracking-widest2 text-signal-400">
                        Transmission · {todayCode()}
                      </div>
                      <div className="font-mono text-sm uppercase tracking-widest2 text-bone-500">
                        REQUEST · EARLY ACCESS
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Name" required>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className="input"
                          placeholder="First Last"
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          className="input"
                          placeholder="name@company.com"
                        />
                      </Field>
                      <Field label="Company">
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          className="input"
                          placeholder="Company name"
                        />
                      </Field>
                      <Field label="Role">
                        <select
                          value={form.role}
                          onChange={(e) => update('role', e.target.value)}
                          className="input"
                        >
                          <option value="">Select role…</option>
                          {ROLE_OPTIONS.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Use case" hint="Describe the BD decision you want Signal Force to support.">
                      <textarea
                        value={form.useCase}
                        onChange={(e) => update('useCase', e.target.value)}
                        rows={5}
                        className="input resize-none"
                        placeholder="e.g. We're evaluating a recompete on a $40M cyber program at NGA. We need to read the incumbent, the customer's procurement posture, and likely competitor teams."
                      />
                    </Field>

                    {/* Honeypot — visually hidden, ignored by humans */}
                    <input
                      type="text"
                      name="_honey"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form._honey}
                      onChange={(e) => update('_honey', e.target.value)}
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                      aria-hidden="true"
                    />

                    {status === 'error' && errorMsg && (
                      <div className="flex items-start gap-3 rounded-md border border-warn-500/40 bg-warn-500/[0.06] p-4 text-sm text-bone-100">
                        <AlertTriangle size={16} className="mt-0.5 shrink-0 text-warn-500" />
                        <div>
                          <div className="font-display text-bone-50">Transmission failed.</div>
                          <div className="mt-1 text-bone-300">{errorMsg}</div>
                          <div className="mt-2 text-xs text-bone-400">
                            Or reach out directly:{' '}
                            <a
                              href={`mailto:${brand.contactEmail}`}
                              className="text-signal-400 hover:text-signal-400/80"
                            >
                              {brand.contactEmail}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 md:flex-row md:items-center">
                      <p className="max-w-md text-xs text-bone-500">
                        Submissions route directly to the founder. Expect a personal reply.
                      </p>
                      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                        <Send size={14} />
                        {status === 'sending' ? 'Transmitting…' : 'Transmit Request'}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-signal-500/40 bg-signal-500/10 text-signal-400">
                      <Check size={26} />
                    </div>
                    <h2 className="mt-6 h-display text-2xl text-bone-50 md:text-3xl">
                      Request received.
                    </h2>
                    <p className="mx-auto mt-3 max-w-md text-sm text-bone-300">
                      We will reach back inside the early access cohort window. In the meantime, the methodology and capabilities pages give you the deepest read.
                    </p>
                    <p className="mx-auto mt-4 max-w-md text-sm text-bone-300">
                      Also feel free to reach out on LinkedIn or send an email directly to{' '}
                      <a
                        href={`mailto:${brand.contactEmail}`}
                        className="text-signal-400 hover:text-signal-400/80"
                      >
                        {brand.contactEmail}
                      </a>
                      .
                    </p>
                    <div className="mt-6 font-mono text-sm uppercase tracking-widest2 text-bone-500">
                      Transmission logged · {todayCode()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Side panel — what you get */}
          <aside className="lg:col-span-5">
            <div className="space-y-4">
              <div className="panel p-6">
                <div className="label">What early access gets you</div>
                <ul className="mt-4 space-y-3 text-sm text-bone-200">
                  {EARLY_ACCESS_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel p-6">
                <div className="label">Who this is for</div>
                <ul className="mt-4 space-y-2 text-sm text-bone-300">
                  <li>Mid-tier and small cleared GovCon firms</li>
                  <li>Directors of Growth, VPs of BD, Capture Leads</li>
                  <li>Founder-operators in defense tech</li>
                  <li>Cleared staffing leaders reading talent demand</li>
                </ul>
              </div>

              <div className="panel p-6">
                <div className="label">Status</div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-signal-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-bone-200">{brand.status}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-bone-400">
                  Operator-built. Methodology in production. Tooling in active development. Early customer cohort being shaped.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

const EARLY_ACCESS_BENEFITS = [
  'First reads on the methodology and report types',
  'Sample brief tailored to your target agency or pursuit',
  'Direct working sessions with the founder',
  'Influence on the product roadmap before public launch',
];

function Field({ label, children, required, hint }: { label: string; children: React.ReactNode; required?: boolean; hint?: string }) {
  return (
    <label className="block">
      <span className="label flex items-center gap-2">
        {label}
        {required && <span className="text-signal-400">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {hint && <span className="mt-1.5 block text-xs text-bone-500">{hint}</span>}
    </label>
  );
}
