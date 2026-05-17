// Single source of truth for all on-site copy.
// Pulled and interpreted from:
//   - signal_force_foundation.md
//   - BUILD_SUMMARY_2026-05-16.md
//   - Phrasing/Content_to_use.rtf
//   - start_here.md, voice_and_style.md
// Voice: SIGINT-grade, operator-credible, restrained. No marketing fluff.

export const brand = {
  name: 'Signal Force',
  wordmark: ['SIGNAL', 'FORCE'] as const,
  pillars: 'Intelligence. Advantage. Growth.',
  tagline: 'AI-Powered Intelligence for Federal Market Advantage',
  shortDescription:
    'Signal Force turns federal market noise into actionable growth intelligence so GovCon teams can see what is next, move first, and win more.',
  thesisQuestion:
    'Given everything moving in the federal market right now, what should I do next week, and why?',
  status: 'EARLY ACCESS · BUILD PHASE',
  classification: 'OPERATOR-BUILT · INTELLIGENCE DRIVEN',
  contactEmail: 'scgiehl@gmail.com',
};

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Methodology', to: '/methodology' },
  { label: 'Founder', to: '/founder' },
  { label: 'Early Access', to: '/access' },
];

// The four intelligence layers (Money / Capability / People / Mission)
export const intelLayers = [
  {
    code: 'L-01',
    name: 'Money',
    blurb: 'Contract value, vehicle, period of performance, agency, NAICS, set-aside, obligations, modifications.',
    detail:
      'Tracks the full money flow — budget formulation, forecasts, RFIs, solicitation, award, modifications, performance, and recompete windows. Most platforms see the middle; Signal Force sees the leading and trailing indicators.',
    signals: ['Award notices', 'Mods + option exercises', 'Recompete windows', 'Budget POMs', 'CR exposure'],
  },
  {
    code: 'L-02',
    name: 'Capability',
    blurb: 'Which firms can actually do this work — past performance, cleared bench, vehicles, geography, technology.',
    detail:
      'Maps the supply side of every market: who has the past performance, who holds the right vehicles, who has the cleared bench, who has the geographic footprint, and who has been quietly acquiring capability.',
    signals: ['Past performance', 'Vehicle holdings', 'Cleared bench', 'M&A activity', 'Tech capability shifts'],
  },
  {
    code: 'L-03',
    name: 'People',
    blurb: 'BD, capture, and program leaders — where they have been, where they are going, and who they trust.',
    detail:
      'The relationship layer. Tracks BD and capture leadership at primes and subs, recent moves, capture leads behind specific wins, hiring patterns, and warm-intro paths into target customers and partners.',
    signals: ['BD moves', 'Capture leads', 'Hiring surges', 'Network paths', 'Trade-press announcements'],
  },
  {
    code: 'L-04',
    name: 'Mission',
    blurb: 'What the customer is actually trying to accomplish — pain points, technology shifts, political pressure.',
    detail:
      'The customer-truth layer. Decodes mission language from industry days, RFIs, strategic plans, and policy shifts. Translates buying language patterns into the real procurement intent behind the dollars.',
    signals: ['Industry day themes', 'RFI language drift', 'Modernization mandates', 'Policy shocks', 'Program office moves'],
  },
];

// =====================================================================
// CAPABILITIES PAGE — one platform, one engine, many reads.
// Replaces the old "five products" framing. Anchored on:
//   Signal Force reads the federal market through data, relationships,
//   timing, company fit, and modern GovCon BD methodology, then turns
//   that intelligence into the next right move.
// =====================================================================

// Inputs that flow into the engine. Used by the engine diagram.
export const engineInputs = [
  'Market Data',
  'Agency Priorities',
  'Opportunity Signals',
  'Budget Movement',
  'News & Emerging Tech',
  'Incumbent Information',
  'Teaming Context',
  'Relationship Data',
  'Company Positioning',
  'BD Methodology',
];

// Outputs the engine fans out into. Used by the engine diagram.
// Broader than the five named Reads — communicates breadth of "many reads."
export const engineOutputs = [
  'Agency Fit Read',
  'Opportunity Read',
  'Teaming Read',
  'Positioning Read',
  'BD Action Plan',
  'Capture Strategy Brief',
  'Relationship Map',
  'Pursue or Pass Brief',
];

// "What Signal Force Reads" — seven categories of input the engine processes.
export const whatItReads = [
  {
    code: 'I-01',
    title: 'Market and Opportunity Data',
    body: 'Federal opportunities, awards, vehicles, NAICS patterns, contract history, recompetes, and demand signals.',
  },
  {
    code: 'I-02',
    title: 'Agency and Mission Priorities',
    body: 'Agency missions, strategic priorities, budget direction, modernization goals, operational pain points, and technology adoption patterns.',
  },
  {
    code: 'I-03',
    title: 'Incumbent and Competitive Context',
    body: 'Who is already there, who won the work, who is teamed with whom, where the gaps are, and where a new entrant has leverage.',
  },
  {
    code: 'I-04',
    title: 'Relationship and People Intelligence',
    body: 'Live relationship context around companies, decision-makers, influencers, BD contacts, capture leaders, program leaders, and relevant network paths.',
  },
  {
    code: 'I-05',
    title: 'News and Emerging Technology Signals',
    body: 'Public news, policy movement, modernization trends, AI adoption, cyber priorities, cloud and edge activity, data platforms, and mission technology demand.',
  },
  {
    code: 'I-06',
    title: 'Company Positioning',
    body: 'The company\'s capabilities, past performance, differentiators, labor categories, customer history, technical strengths, and ability to credibly pursue the work.',
  },
  {
    code: 'I-07',
    title: 'BD Methodology',
    body: 'Modern GovCon BD practice, capture discipline, teaming strategy, customer mapping, qualification logic, relationship building, and action planning.',
  },
  {
    code: 'I-08',
    title: 'Budget and Funding Movement',
    body: 'Appropriations, obligations, funding shifts, option exercises, contract modifications, continuing resolution exposure, program funding pressure, and where dollars are actually moving.',
  },
  {
    code: 'I-09',
    title: 'Timing and Procurement Motion',
    body: 'Forecasts, RFIs, sources sought, draft RFPs, solicitation windows, recompete timing, award patterns, protest risk, transition periods, and the moments when BD action matters most.',
  },
];

// The five Reads — workflows produced by the engine, not separate products.
// Each answers: what decision does this support, what does the AI analyze,
// what does the user walk away with.
export const reads = [
  {
    code: 'R-01',
    name: 'Agency Fit Read',
    decision: 'Should we target this agency?',
    analyzes:
      'Agency mission, budget priorities, active programs, modernization themes, recent awards, incumbent landscape, technology demand, and company fit.',
    output:
      'A focused agency fit brief showing where the company has a credible angle, where it does not, and what to do next.',
  },
  {
    code: 'R-02',
    name: 'Opportunity Qualification Read',
    decision: 'Is this opportunity worth pursuing?',
    analyzes:
      'Customer profile, incumbent standing, recompete window, vehicle and set-aside fit, likely competitor team, and buying-language pattern match.',
    output:
      'A pursue / no-pursue brief with sourced evidence, calibrated confidence, and a clear recommendation.',
  },
  {
    code: 'R-03',
    name: 'Teaming Strategy Read',
    decision: 'Should we team, prime, or pass?',
    analyzes:
      'Prime teaming behavior, recent sub selections, post-award teaming paths, capability overlap, and Shipley-aligned teaming logic.',
    output:
      'A teaming brief with named partner targets, the fastest path to revenue, and the outreach approach for each.',
  },
  {
    code: 'R-04',
    name: 'Market Signal Read',
    decision: 'Where is the market moving — and where can we lead?',
    analyzes:
      'Technology demand signals across agencies, budget priority alignment, modernization theme uptake, and procurement-pattern recognition.',
    output:
      'A forward-looking market signal brief showing where demand is forming and where the company has a credible position to lead.',
  },
  {
    code: 'R-05',
    name: 'BD Action Plan',
    decision: 'What do we do next week — and next month?',
    analyzes:
      'Everything above plus the relationship layer, capture-cycle alignment, and operator priorities.',
    output:
      'A 7-day and 30-day named-action plan: who calls whom, which doors to push, which pursuits to advance, which to drop.',
  },
];

// Decision matrix — what BD teams ask vs. the read the engine produces.
export const decisionMatrix = [
  { decision: 'Where should we focus this quarter?', read: 'Agency Fit Read' },
  { decision: 'Is this opportunity worth pursuing?', read: 'Opportunity Qualification Read' },
  { decision: 'Should we team, prime, or pass?', read: 'Teaming Strategy Read' },
  { decision: 'Who should we talk to this week?', read: 'Relationship & Targeting Read' },
  { decision: 'How do we turn this into action?', read: 'BD Action Plan' },
  { decision: 'What is our strongest position?', read: 'Company Positioning Read' },
];

// The page anchor line — quote-worthy, reinforces the core message.
export const capabilitiesAnchor =
  'Signal Force reads the federal market through data, relationships, timing, company fit, and modern GovCon BD methodology, then turns that intelligence into the next right move.';

// The SIGINT-style intelligence cycle (seven steps)
export const intelCycle = [
  { code: '01', name: 'Requirements', blurb: 'Customer Priority Intelligence Requirements (PIRs).' },
  { code: '02', name: 'Collection', blurb: 'Ingest federal and commercial data sources.' },
  { code: '03', name: 'Processing', blurb: 'Structure, normalize, classify.' },
  { code: '04', name: 'Analysis', blurb: 'AI and operator pattern recognition, correlation, anomaly detection, forecasting.' },
  { code: '05', name: 'Production', blurb: 'Intelligence reports, briefings, alerts.' },
  { code: '06', name: 'Dissemination', blurb: 'Customer-tailored delivery formats.' },
  { code: '07', name: 'Feedback', blurb: 'Customer feedback refines the next cycle.' },
];

// Use cases
export const useCases = [
  {
    code: 'UC-01',
    role: 'Director of Growth, mid-tier prime',
    scenario:
      'Allocates B&P this quarter across a pursuit shortlist that keeps growing. Needs to know which recompetes are real, which primes are open to teaming, and which agencies are about to spend.',
    output: 'Agency Fit Brief + BD Action Plan',
  },
  {
    code: 'UC-02',
    role: 'Capture Lead on a major pursuit',
    scenario:
      'Working a $50M+ pursuit. Needs deep, specific intelligence about one opportunity, one customer, and the likely competitor team — fast, not in six weeks.',
    output: 'Opportunity Qualification Brief',
  },
  {
    code: 'UC-03',
    role: 'VP of BD, specialty sub',
    scenario:
      'Smaller cleared firm trying to look bigger and more strategic. Needs to find primes open to teaming with firms their size and post-award doors that open in weeks, not years.',
    output: 'Prime Teaming Brief',
  },
  {
    code: 'UC-04',
    role: 'Founder-operator entering a new market',
    scenario:
      'Strong commercial track record, naive on federal procurement. Needs translation: how the market actually works in their category, which vehicles to chase, and who the real decision-makers are.',
    output: 'Market Signal Brief + Agency Fit Brief',
  },
  {
    code: 'UC-05',
    role: 'Cleared staffing leader',
    scenario:
      'Revenue depends on knowing where cleared roles are about to emerge. Public job boards are noisy and lagging by months. Needs a leading-indicator system for cleared talent demand.',
    output: 'Market Signal Brief (talent variant)',
  },
];

// Positioning — the six source categories Signal Force synthesizes across
export const positioningSources = [
  { label: 'Market Data', detail: 'Federal data shows market movement.' },
  { label: 'News + Analysis', detail: 'Explains timing and narrative.' },
  { label: 'Capture Tools', detail: 'Support pursuit execution.' },
  { label: 'Relationship Intelligence', detail: 'Shows who matters.' },
  { label: 'Money + Incumbents', detail: 'Reveals contract history.' },
  { label: 'Technology + Mission', detail: 'Shows where demand is forming.' },
];

// Founder — verbatim from Phrasing/Content_to_use.rtf
export const founder = {
  eyebrow: 'Founder',
  title: 'From signals intelligence to growth intelligence.',
  name: 'Sean Giehl',
  role: 'Founder / CEO',
  credentials: ['B.S. Computer Science', 'USMC OEF Vet', 'ITIL', 'Security+'],
  paragraphs: [
    'Sean Giehl is the founder of Signal Force and a GovCon growth leader with 18 years of experience supporting the intelligence community and national defense. His perspective was shaped early by his service as a Signals Intelligence Marine, where he learned the value of reading the environment, understanding the mission, and turning fragmented information into action.',
    'As Director of Growth at DPG Solutions, Sean has worked across business development, cleared talent strategy, federal technology growth, customer engagement, and program support. His work sits at the intersection of market intelligence, relationship building, technical capability, and execution. He understands how defense and intelligence companies identify opportunity, position their strengths, build teams, and move from conversation to revenue.',
  ],
  highlight: 'Signal Force was built from that experience.',
  paragraphsAfter: [
    'The platform reflects a simple belief: the companies that win in the federal market are not just the ones with the best capabilities. They are the ones that see the market clearly, understand where technology and mission demand are moving, know who matters, and act before the opportunity becomes obvious.',
    "Sean holds a Bachelor's degree in Computer Science, along with ITIL and Security+ certifications. His leadership style is strategic, direct, and people focused, with a strong emphasis on trust, collaboration, mentorship, and building environments where teams can do their best work.",
    'Through Signal Force, Sean is bringing together the core elements that have defined his career: intelligence, technology, talent, relationships, and execution. The mission is to help GovCon companies turn market signals into strategy, and strategy into revenue.',
  ],
};

// =====================================================================
// METHODOLOGY PAGE — deeper, AI-assisted GovCon intelligence methodology.
// New data structures used only by the Methodology page; the legacy
// `intelLayers` and `intelCycle` exports above remain in place because
// Home still consumes them. Methodology gets its own richer set.
// =====================================================================

// Methodology engine — inputs into the analytical core, action outputs out.
export const methodologyEngineInputs = [
  'Money',
  'Agencies',
  'Mission Demand',
  'NAICS + Set-Asides',
  'Contract Values',
  'Opportunity Signals',
  'Incumbent Posture',
  'Technology Trends',
  'News + Policy',
  'People Layer',
  'Relationship Data',
  'BD + Capture Leaders',
  'Program Leaders',
  'Company Capabilities',
  'Pre-Award Movement',
  'Post-Award Movement',
];

export const methodologyEngineOutputs = [
  'Agency Priority Map',
  'Opportunity Qualification',
  'Teaming Path',
  'Relationship Target List',
  'Capture Action Plan',
  'Company Positioning Brief',
  'Pursue / Pass Recommendation',
  'Post-Award Teaming Strategy',
  'BD Master Plan',
];

export const methodologyCoreSteps = [
  'COLLECT',
  'NORMALIZE',
  'CORRELATE',
  'ANALYZE',
  'RECOMMEND',
  'ACTION',
];

// The Signal Environment — eight categories of signal Signal Force weighs.
export const signalCategories = [
  {
    code: 'S-01',
    name: 'Financial Signals',
    body: 'Contract values, obligations, budget requests, modifications, option exercises, unfunded priorities, CR exposure, and recompete windows.',
  },
  {
    code: 'S-02',
    name: 'Agency Signals',
    body: 'Agency mission, strategic plans, modernization priorities, program office language, industry day themes, buying patterns, and mission pressure.',
  },
  {
    code: 'S-03',
    name: 'Opportunity Signals',
    body: 'RFIs, sources sought, draft RFPs, active solicitations, awards, recompetes, vehicle movement, NAICS codes, set-aside strategy, evaluation language, and scope drift.',
  },
  {
    code: 'S-04',
    name: 'Technology Signals',
    body: 'AI, cyber, cloud, edge compute, DevSecOps, data platforms, zero trust, automation, mission applications, modernization mandates, and emerging technology adoption.',
  },
  {
    code: 'S-05',
    name: 'Competitive Signals',
    body: 'Incumbents, prior winners, team structures, subcontractor behavior, capability gaps, past performance, pricing posture, and likely competitor teams.',
  },
  {
    code: 'S-06',
    name: 'People + Relationship Signals',
    body: 'BD leaders, capture leaders, program managers, portfolio leaders, technical decision-makers, recent moves, warm paths, relationship strength, and network proximity.',
  },
  {
    code: 'S-07',
    name: 'Company Fit Signals',
    body: 'Customer history, past performance, differentiators, technical depth, cleared bench, vehicles, geography, labor categories, pricing, and ability to credibly execute.',
  },
  {
    code: 'S-08',
    name: 'News + Policy Signals',
    body: 'Public news, trade press, legislation, appropriations activity, agency announcements, technology policy, acquisition reform, national security priorities, and market disruption.',
  },
];

// Four-layer model — richer than the home-page version. Each layer carries
// three lenses: what it reads, why it matters, how AI helps.
export const methodologyLayers = [
  {
    code: 'L-01',
    name: 'Money',
    tagline: 'Where dollars move, intent shows.',
    reads: [
      'Contract value',
      'Obligations',
      'Budget movement',
      'Vehicle',
      'Period of performance',
      'NAICS + set-aside',
      'Mods and option exercises',
      'Forecasts',
      'Recompete timing',
      'Funding pressure',
    ],
    why:
      'Money reveals priority. Where dollars move, agencies are showing what they need, what they are protecting, and what they may buy next.',
    ai:
      'Signal Force compares spend patterns, identifies movement across agencies, detects recompete timing, flags funding shifts, and connects budget direction to opportunity strategy.',
  },
  {
    code: 'L-02',
    name: 'Capability',
    tagline: 'A market is not a win until capability fits.',
    reads: [
      'Past performance',
      'Technical capabilities',
      'Cleared labor',
      'Technology stack',
      'Company differentiators',
      'Vehicle access',
      'Geography',
      'Certifications',
      'Delivery credibility',
      'Prime / sub fit',
      'Emerging-tech alignment',
    ],
    why:
      'A company does not win because a market exists. It wins when its capabilities line up with customer need, timing, contract path, and credible execution.',
    ai:
      'Signal Force maps company strengths against agency demand, technology trends, incumbent gaps, and pursuit requirements.',
  },
  {
    code: 'L-03',
    name: 'People',
    tagline: 'GovCon still moves through people.',
    reads: [
      'BD leaders',
      'Capture leaders',
      'Program leaders',
      'Portfolio owners',
      'Technical influencers',
      'Prime + sub contacts',
      'Recent personnel moves',
      'Relationship paths',
      'Warm introductions',
      'Network proximity',
      'Hiring surges',
      'Conference + industry activity',
    ],
    why:
      'The right intelligence is not only what is happening, but who can influence it, who owns the relationship, and who the team should talk to next.',
    ai:
      'Signal Force connects people, companies, programs, opportunities, timing, and relationship paths into actionable target lists and outreach priorities.',
  },
  {
    code: 'L-04',
    name: 'Mission',
    tagline: 'Mission separates noise from intent.',
    reads: [
      'Agency mission',
      'Operational pain',
      'Modernization goals',
      'Policy pressure',
      'Program office language',
      'Strategic plans',
      'Industry day themes',
      'RFI language drift',
      'Technology adoption',
      'Mission gaps',
      'National security priorities',
    ],
    why:
      'The mission layer explains why the money moves. It separates noise from intent.',
    ai:
      'Signal Force interprets agency language, maps demand patterns, compares mission needs to company positioning, and translates customer intent into BD strategy.',
  },
];

// Seven-step intelligence cycle — productized, AI-assisted. Adds Correlation
// as a distinct step between Processing and Analysis. Dissemination is folded
// into Production; Feedback closes the loop.
export const methodologyCycle = [
  {
    code: '01',
    name: 'Requirements',
    body: 'Define the decision. What does the team need to know? What agency, market, opportunity, prime, technology, or relationship question is driving the work?',
  },
  {
    code: '02',
    name: 'Collection',
    body: 'Gather the signal. Pull from federal data, opportunity sources, agency material, budget movement, contract history, news, company context, people data, and relationship inputs.',
  },
  {
    code: '03',
    name: 'Processing',
    body: 'Normalize and structure. Clean the language, classify the signals, group the entities, resolve companies and people, and prepare the information for analysis.',
  },
  {
    code: '04',
    name: 'Correlation',
    body: 'Connect the layers. Tie money to mission, mission to agency demand, demand to opportunity movement, opportunity to incumbents, incumbents to teaming paths, and teaming paths to people.',
  },
  {
    code: '05',
    name: 'Analysis',
    body: 'Use AI and operator logic to identify patterns, gaps, leverage, timing, risk, and likely next moves. Separate signal from noise.',
  },
  {
    code: '06',
    name: 'Production',
    body: 'Generate the read, brief, map, matrix, or action plan. Sourced, structured, calibrated, decision-ready, and delivered in the customer-tailored format.',
  },
  {
    code: '07',
    name: 'Feedback',
    body: 'Refine the model based on what the user does, what the market does next, and which assumptions prove right or wrong. The next cycle starts smarter.',
  },
];

// Source + Signal Layer — what the engine is designed to ingest. Phrasing is
// careful: capability framing ("designed to ingest", "can incorporate"), not
// a claim that every source is already wired in.
export const sourceCategories = [
  {
    code: 'SRC-01',
    name: 'Federal Opportunity + Award Data',
    body: 'SAM.gov, FPDS, USAspending, agency forecasts, award notices, modifications, recompetes, and vehicle data.',
  },
  {
    code: 'SRC-02',
    name: 'Agency + Mission Sources',
    body: 'Agency strategic plans, budget justifications, industry days, RFIs, sources sought, program office language, congressional material, and modernization roadmaps.',
  },
  {
    code: 'SRC-03',
    name: 'Market + News Sources',
    body: 'Trade press, GovCon news, defense technology coverage, acquisition news, policy changes, appropriations movement, and emerging technology reporting.',
  },
  {
    code: 'SRC-04',
    name: 'Company + Capability Sources',
    body: "Company profiles, past performance, capability statements, contract history, vehicle access, labor categories, technical offerings, hiring signals, and delivery footprint.",
  },
  {
    code: 'SRC-05',
    name: 'People + Relationship Sources',
    body: 'Public people-movement data, BD and capture leadership, program leadership, conference activity, warm-introduction paths, relationship notes, and user-supplied network context.',
  },
  {
    code: 'SRC-06',
    name: 'Internal Knowledge + Operator Judgment',
    body: 'User-uploaded files, company notes, capture notes, BD playbooks, proposal content, pricing context, teaming history, and human review — BD instinct, capture discipline, calibrated next steps.',
  },
];

// Pre-Award and Post-Award BD motion — two lanes, same signal discipline.
export const bdMotion = {
  preAward: {
    code: 'PA / PRE-AWARD',
    name: 'Pre-Award Intelligence',
    questions: [
      'Which agencies are moving',
      'Which priorities are funded',
      'Which RFIs and sources sought matter',
      'Which opportunities fit',
      'Which incumbents are vulnerable',
      'Which vehicles and NAICS codes align',
      'Which primes are likely positioning',
      'Which people should be engaged',
      'Whether to pursue, team, prime, or pass',
    ],
    outputs: [
      'Agency fit read',
      'Opportunity qualification',
      'Capture strategy brief',
      'Customer target list',
      'Teaming strategy',
      'Pursue / pass recommendation',
    ],
  },
  postAward: {
    code: 'PW / POST-AWARD',
    name: 'Post-Award Intelligence',
    questions: [
      'Who just won',
      'What work was awarded',
      'Which teams may need subcontractor support',
      'Where staffing gaps may exist',
      'Which primes may need niche capability',
      'Which incumbents may be displaced',
      'Which relationships can open the door',
      'Where a fast teaming motion can create revenue',
    ],
    outputs: [
      'Post-award teaming brief',
      'Prime target list',
      'Subcontractor angle',
      'Relationship map',
      'Outreach plan',
      '7-day BD action plan',
    ],
  },
};

// Master BD Plan — modules that assemble from the signal stream.
export const bdPlanModules = [
  { code: 'M-01', name: 'Target Agencies' },
  { code: 'M-02', name: 'Target Programs' },
  { code: 'M-03', name: 'Target Primes' },
  { code: 'M-04', name: 'Target People' },
  { code: 'M-05', name: 'Opportunity Watchlist' },
  { code: 'M-06', name: 'Post-Award Targets' },
  { code: 'M-07', name: 'Capability Positioning' },
  { code: 'M-08', name: 'Relationship Plan' },
  { code: 'M-09', name: 'Content + Outreach Angles' },
  { code: 'M-10', name: '7-Day Actions' },
  { code: 'M-11', name: '30-Day Actions' },
  { code: 'M-12', name: '90-Day Priorities' },
  { code: 'M-13', name: 'Risks + Assumptions' },
  { code: 'M-14', name: 'Confidence Levels' },
  { code: 'M-15', name: 'Next Collection Requirements' },
];

// Voice tenets — extended set used on the Methodology page.
export const voiceTenetsDeep = [
  { name: 'Direct', body: 'Lead with the finding. Bury caveats only when they actually change the call.' },
  { name: 'Analytical', body: 'Conclusions are reasoned. Confidence is calibrated. Uncertainty is named.' },
  { name: 'Operator-credible', body: 'Written by someone who has done the work — not a vendor selling at it.' },
  { name: 'SIGINT-disciplined', body: 'Findings, not opinions. Signals, not stories. Action, not observation.' },
  { name: 'Sourced', body: 'Every claim traces back to the signal that produced it. Show the work when it matters.' },
  { name: 'Calibrated', body: 'Confidence is labeled, not implied. Watch items are flagged, not buried.' },
  { name: 'Restrained', body: 'Says less to mean more. Does not over-claim. Does not under-deliver.' },
  { name: 'Decision-ready', body: 'Every brief ends with a recommended next step the operator can run on Monday.' },
];

// Confidence calibration — how Signal Force labels what it knows.
export const confidenceLevels = [
  { code: 'C-01', name: 'High Confidence', body: 'Multiple independent signals align. The finding is supported and stable.' },
  { code: 'C-02', name: 'Moderate Confidence', body: 'Signals point the same direction but coverage is incomplete or recent. Treat as a working read.' },
  { code: 'C-03', name: 'Low Confidence', body: 'Limited signal. Pattern is forming but not yet confirmed. Use directionally, not as the basis of commitment.' },
  { code: 'C-04', name: 'Unknown', body: 'The signal needed to answer this question is not yet available. Flag the gap. Do not infer.' },
  { code: 'C-05', name: 'Watch Item', body: 'A condition under monitoring. Not actionable today; could be tomorrow. Carried into the next cycle.' },
];

// Why now
export const whyNow = [
  {
    code: '01',
    title: 'AI capability has crossed a threshold',
    body: 'Modern long-context language models can ingest, summarize, and cross-correlate the volume and variety of federal data sources that previously required teams of analysts.',
  },
  {
    code: '02',
    title: 'Federal data infrastructure is mature',
    body: 'SAM.gov, USAspending, FPDS, agency forecasts, and modern MCP servers provide programmatic access to most of the source data needed. The plumbing exists.',
  },
  {
    code: '03',
    title: 'The market is consolidating and modernizing at once',
    body: 'Mid-tier contractors are being acquired. New commercial entrants are arriving in cyber, AI, cloud, autonomy. Recompete cycles are accelerating. Cleared talent is scarce. In rapid change, the firms with better intelligence consistently outperform the firms with better hustle.',
  },
];

