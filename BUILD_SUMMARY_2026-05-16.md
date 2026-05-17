# Signal Force — Build Summary (2026-05-16)

> Snapshot of what exists in `G:\Signal_Force Master Build Dir\` as of 2026-05-16. Written so a separate Claude session can use this as the source-of-truth context for designing a website without having to re-read the directory.

---

## What Signal Force is

**Signal Force is an AI-powered business development intelligence platform for federal contractors (GovCon).** It applies a signals-intelligence (SIGINT) analytical methodology to federal market data — agency missions, budgets, modernization themes, acquisition signals, contract history, teaming patterns, incumbent positions, talent flow — and turns that into prioritized BD action.

**Founder:** Sean Giehl. Six years USMC SIGINT (MOS 2651, three Helmand deployments supporting NSA), sixteen years cleared (TS/SCI w/ CI poly), eighteen years cleared GovCon BD across NGIC, Buckley SFB, Raytheon, and the broader cleared services industry.

**One-sentence thesis:**
> Federal contracting BD is a signals problem disguised as a sales problem. Signal Force is the intelligence service that makes SIGINT-grade analytical discipline accessible to mid-tier and small GovCon firms that can't build it in-house.

**Who it's for:** Mid-tier and small cleared GovCon firms — Directors of Growth, VPs of BD, Capture Leads, founder-operators — who need to read the federal market better, earlier, and with more discipline than competitors.

**Positioning vs. the market:**
- **Data platforms** (GovTribe, GovWin, USAspending, SAM.gov) tell you *what's happening*.
- **News/analysis** (Bloomberg Government, Washington Technology) tell you *what's been said about it*.
- **Capture/proposal tools** (GovDash, Procurement Sciences, Privia) help you *execute on what you've already decided to chase*.
- **Signal Force** answers the question none of them do: *"Given everything moving in the federal market right now, what should I do next week, and why?"*

---

## The three-layer build sequence

Signal Force is being built in three sequential layers. We are in **Layer 1**.

| Layer | What it produces | Status |
|---|---|---|
| **Layer 1 — Intelligence Library** | Markdown knowledge base the AI reads to understand federal demand, agencies, vehicles, recompetes, capture, teaming, recruiting. Substantive content. | **In progress** |
| **Layer 2 — Metadata & Organization** | Tags, schema, retrieval structure, cross-references, embedding strategy, PIR linkage. | Not started |
| **Layer 3 — BD Intelligence Tool** | The product itself. UI, ingestion pipelines, analysis engine, customer delivery. | Not started |

**DPG Solutions** is the anchor reference implementation — used to pressure-test that the methodology, golden files, and tooling produce useful outputs for a real cleared services firm. DPG content lives in `06_DPG_Reference_Implementation/` and `08_Recruiting_Intelligence/`. DPG is reference material, not product scope.

---

## The four intelligence layers (the analytical model)

Every Signal Force intelligence product synthesizes across four layers. Any single layer is commodity intelligence — the **cross-correlation is the IP**.

1. **Money** — contract value, vehicle, period of performance, agency, NAICS, set-aside, obligations, mods.
2. **Capability** — which firms can do this work; past performance, cleared bench, geographic footprint, technology, vehicle holdings.
3. **People** — who runs BD, capture, programs at those firms; where they've been; where they're moving; their networks.
4. **Mission** — what the customer is trying to accomplish; pain points; technology shifts they care about; political and operational pressures shaping their procurement.

A single award notice, run through the four layers, becomes: a signal about customer procurement intent, a signal about the winner's positioning, a signal about teaming and recompete vulnerabilities, a signal about talent flow, and a predictive signal about *next* awards in the same domain.

---

## The SIGINT-style intelligence cycle

Signal Force is structured as a seven-step intelligence cycle:

1. **Requirements** — customer Priority Intelligence Requirements (PIRs)
2. **Collection** — ingest federal + commercial data
3. **Processing** — structure, normalize, classify
4. **Analysis** — AI + analyst pattern recognition, correlation, anomaly detection, forecasting
5. **Production** — intelligence reports, briefings, alerts
6. **Dissemination** — customer-tailored delivery formats
7. **Feedback** — customer feedback refines next cycle

---

## Current directory architecture (Layer 1 build space)

```
G:\Signal_Force Master Build Dir\
├── 00_Foundation/                        Strategic north star — defines Signal Force itself
│   ├── signal_force_foundation.md        (the master strategy doc, ~27k tokens)
│   ├── file_naming_standard.md
│   ├── voice_and_style.md
│   └── glossary.md
├── 01_Methodology/                       Productized Shipley-aligned BD methodology
│   ├── signal_force_bd_methodology.md
│   ├── signal_force_bd_templates.md
│   └── signal_force_prime_outreach_template.md
├── 02_Golden_Files/                      Specs that govern HOW downstream content is written
│   ├── golden_market_intelligence_research.md   → governs 03_
│   ├── golden_agency_customer_playbook.md       → governs 04_
│   └── golden_recruiting_rules.md               → governs 08_
├── 03_Federal_Market_Intelligence/       Substantive intelligence library (11 modules)
│   ├── agency_missions.md
│   ├── agency_pain_points_and_mission_gaps.md
│   ├── award_history_and_contract_trend_analysis.md
│   ├── bridge_contracts.md
│   ├── budget_priorities.md
│   ├── capture_intelligence_and_pursuit_strategy.md
│   ├── competitor_and_incumbent_analysis.md
│   ├── contract_vehicles.md
│   ├── current_modernization_themes.md
│   ├── federal_buying_language_and_requirement_patterns.md
│   ├── incumbent_strength_model.md
│   ├── major_programs.md
│   ├── opportunity_qualification.md
│   ├── post_award_teaming_opportunities.md
│   ├── prime_contractor_teaming_behavior.md
│   ├── procurement_patterns_and_contract_vehicles.md
│   ├── program_office_and_stakeholder_mapping.md
│   ├── recompetes.md / recompetes_dod.md
│   ├── small_business_and_subcontracting_strategy.md
│   ├── technology_demand_signals.md
│   └── vehicle_recompete_tracker.md
├── 04_Agency_Customer_Playbooks/         Per-agency playbooks built from the golden template
│   ├── nga.md
│   └── nro.md  (many more to build)
├── 05_BD_Strategy/                       General BD/capture/teaming playbooks
│   └── shipley_teaming_intelligence_playbook.md
├── 06_DPG_Reference_Implementation/      DPG Solutions anchor case
│   ├── dpg_govcon_bd_playbook.md
│   ├── dpg_bd_operational_templates.md
│   └── dpg_prime_outreach_scripts.md
├── 07_Post_Award_BD/                     Empty — golden spec + content to author
├── 08_Recruiting_Intelligence/           Cleared recruiting intelligence and search craft
│   ├── dp_bad_candidate_profiles.md
│   ├── dp_boolean_library.md
│   ├── dp_company_targeting.md
│   ├── dp_geo_strategy.md
│   ├── dp_golden_candidate_profiles.md
│   ├── dp_linkedin_filter_playbook.md
│   ├── dp_outreach_library.md
│   ├── full_scope_linux_golden_examples.md
│   ├── iterative_cleared_search_protocol.md
│   └── _data/                            CSV/JSON kept out of markdown layer
├── 99_DataBase/                          Local SQLite index (FTS5)
│   ├── schema.sql                        Committed for reference
│   └── index.sqlite                      Local index — gitignored
├── _company_profiles/                    Operator inputs — customer firms (DPG seeded)
├── _targets/                             Operator inputs — saved targets (NGA Maven recompete seeded)
├── _people/                              Relationship layer — populated via Chrome Claude MCP workflow
├── _tools/                               Local CLI (the operator tool — see next section)
├── output_bundles/                       Intermediate context bundles for report generation
└── output_reports/                       Generated intelligence reports land here
```

**Golden Files concept** — A golden file is a *specification*, not content. It defines structure, voice, depth, and required sections for an entire class of downstream files. New content classes get a golden spec authored *before* any instance files.

---

## The local operator tool (`_tools/`)

A weekend MVP local CLI (Python 3.12+, SQLite, FTS5) that converts the markdown library + HigherGov data + operator inputs into BD intelligence reports. **Single-operator, local-only, no SaaS, no UI** — by design for this build phase.

### What it does

Inputs:
1. A **company profile** (`_company_profiles/<firm>.md`)
2. A **target** (agency, prime, opportunity, or market theme)
3. **Optional filters** (NAICS, PSC, geography, clearance level, technology theme, vehicle)

Outputs — five report types, each driven by a prompt template at `_tools/prompts/<report>.md`:

| Report | When to use |
|---|---|
| `agency_fit_brief` | Deciding whether to invest in pursuing a target agency |
| `prime_teaming_brief` | Deciding whether to team with a specific prime |
| `opportunity_qualification_brief` | Pursue/No-Pursue or Bid/No-Bid gate decision |
| `market_signal_brief` | Reading a market theme (AI, PQC, edge, etc.) |
| `bd_action_plan` | 7-day + 30-day operator action plan |

### Architecture

```
markdown library (47 files)  ──┐
                                │
_company_profiles/  ──── frontmatter ───┐
_targets/                                │
_people/                                 ▼
                            ┌────────────────────┐
HigherGov API ──────────────►  99_DataBase/      │
                            │  index.sqlite      │
                            │  (FTS5 + tags +    │
                            │   contracts table) │
                            └────────┬───────────┘
                                     │
                          search.py / bundle.py
                                     │
                                     ▼
                          output_bundles/<...>.md
                                     │
                  ┌──────────────────┴──────────────────┐
                  │                                      │
            Path A: open in                       Path B: generate.py
            Claude Code → Claude                  → Anthropic API → report
            writes report
                  │                                      │
                  └──────────────────┬──────────────────┘
                                     ▼
                          output_reports/<...>.md
```

### Tool components

- `_tools/add_frontmatter.py` — one-time YAML frontmatter injection for every markdown file (idempotent).
- `_tools/build_index.py` — rebuilds the SQLite index (markdown content + tags + FTS5 + extracted source URLs).
- `_tools/search.py` — CLI search across modules by agency, tech theme, vehicle, NAICS, free text.
- `_tools/bundle.py` — assembles a context bundle for a report type: pulls relevant library modules by tag + relevance, slices HigherGov contracts by NAICS/agency, attaches company profile + target + people records, prepends the generation prompt. Writes to `output_bundles/`.
- `_tools/generate.py` — optional Path B that calls the Anthropic API directly on a bundle and writes the report. Untested pending API key.
- `_tools/prompts/` — five generation prompt templates defining structure and voice for each report type.
- `_tools/lib/taxonomy.py` — controlled vocabulary for tag enrichment (agencies, NAICS, vehicles, tech themes).
- `_tools/connectors/highergov.py` — HigherGov API connector for contracts (opportunities table scaffolded). Auth via `HIGHERGOV_API_KEY` in `.env`. Includes 0.3s inter-page sleep; handles benign "Invalid page" 404 as end-of-results.

### SQLite schema (what's indexed)

- **`modules`** — every markdown file with slug, filepath, rail, title, library, type, content, size, mtime, indexed_at.
- **`module_fts`** — FTS5 virtual table over modules (porter unicode61).
- **`module_tags`** — many-to-many tags with facets: `agency`, `naics`, `psc`, `vehicle`, `tech_theme`, `related`, `free`.
- **`module_sources`** — extracted inline `[text](url)` citation links with context snippets.
- **`profiles` / `profile_tags`** — company profiles, targets, people records (kind: `company` | `target` | `person`).
- **`highergov_contracts`** — full FPDS-style fields: award_id, awardee, awarding/funding agency, NAICS, PSC, award type, pricing description, POP dates, current/potential value, obligations, parent award, solicitation ID, extent_competed, place of performance, full raw JSON.
- **`highergov_opportunities`** — scaffolded for opportunity/RFI ingestion (not yet populated).

### Two generation paths

- **Path A — Claude Code (no API key)** — open the bundle in Claude Code, tell Claude to generate the report per the embedded prompt, Claude writes it to `output_reports/`. Uses existing Claude subscription, no incremental cost.
- **Path B — Anthropic API end-to-end** — `python _tools/generate.py <bundle>.md` calls the API directly. Requires `ANTHROPIC_API_KEY` in `.env`. Per-token billing.

### Known follow-ups (`_tools/TODO.md`)

1. **Tighten NAICS regex in `build_index.py`** — current `\b(\d{6})\b` catches false positives (URL fragments, IDs). Whitelist against SBA NAICS list. ~1 hr.
2. **Tune HigherGov rate-limit handling** — add 429 handling with exponential backoff, silence benign 404s, add `--rate-limit-rps` flag. 30 min–2 hr.
3. **Schema versioning + migrations** — add `PRAGMA user_version` + `_tools/migrations/` so future schema changes don't require manual `.sqlite` deletion. ~1 hr.
4. **`--dry-run` for `bundle.py`** — print ranked module list + HG row count without writing. ~15 min.
5. **SAM.gov connector** — mirror HigherGov shape for Sources Sought / RFIs / draft RFPs (authoritative pre-RFP signal). 2–3 hr after SAM.gov API key (10+ business day approval).
6. **Chrome Claude MCP workflow examples** — capture 2–3 sanitized worked examples in `_people/_examples/` as templates.
7. **End-to-end test of Path B** — needs Anthropic API key set in `.env`.
8. **Report quality calibration** — generate one of each report type, iterate on prompt templates.

### What the operator tool is explicitly NOT (this build phase)

- No web UI / GUI / dashboard
- No login / billing / SaaS infrastructure
- No Slack / SMS / email alerts
- No production API / GraphQL
- No multi-tenant permissions
- No SOC 2 / compliance scaffolding

The operator tool is a **proof of value loop** — markdown in → markdown out, single operator, local. The website / SaaS product is downstream and separate.

---

## Build status snapshot (Layer 1)

| Folder | Files | Note |
|---|---:|---|
| 00_Foundation | 1 | foundation only — scaffolds (naming, voice, glossary) to author |
| 01_Methodology | 3 | full productized methodology trio in place |
| 02_Golden_Files | 3 | golden specs for market intel, agency playbooks, recruiting |
| 03_Federal_Market_Intelligence | 11 | strong coverage; needs audit against golden spec |
| 04_Agency_Customer_Playbooks | 2 | NGA, NRO; many more to build |
| 05_BD_Strategy | 1 | Shipley teaming playbook |
| 06_DPG_Reference_Implementation | 3 | DPG playbook + templates + outreach |
| 07_Post_Award_BD | 0 | empty; golden spec + content to author |
| 08_Recruiting_Intelligence | 9 + data | core recruiting craft files |
| 99_DataBase | 0 | reserved for structured outputs |

Two bundles have been generated so far (proof of the toolchain end-to-end):
- `output_bundles/2026-05-16_national_geospatial-intelligence_agency_agency_fit_brief_bundle.md`
- `output_bundles/2026-05-16_dpg_q3_2026_priorities_bd_action_plan_bundle.md`

---

## Capabilities surface — what a Signal Force website could expose

Reading the foundation doc and operator tool together, the productized capability surface clusters into five product areas. A website can be organized around these.

### 1. Agency Intelligence

For a given agency, surface:
- Mission, organizational structure, key program offices, decision-makers
- Budget priorities, modernization themes, recent industry-day signals
- Award history and contract trend analysis
- Active vehicles and recompete tracker
- Incumbent map with strength scoring
- Pain points and mission gaps
- Per-agency playbook (NGA, NRO seeded; many more to come)
- **Productized output:** Agency Fit Brief

### 2. Opportunity Intelligence

For a given opportunity (or candidate opportunity):
- Pursue/No-Pursue decision support with evidence
- Customer profile, incumbent standing, recompete window
- Competitor and incumbent analysis
- Vehicle fit, set-aside fit, NAICS/PSC fit
- Federal buying language patterns specific to the requirement
- **Productized output:** Opportunity Qualification Brief

### 3. Teaming Intelligence

For a given prime contractor:
- Teaming behavior, recent sub selections, where they've teamed up and down
- Post-award teaming opportunities (the fastest-to-revenue path)
- Prime outreach templates and scripts
- Shipley-aligned teaming methodology
- **Productized output:** Prime Teaming Brief

### 4. Market Signal Intelligence

For a given market theme (AI, post-quantum cryptography, edge compute, GEOINT, etc.):
- Technology demand signals across agencies
- Budget priority alignment
- Modernization theme uptake
- Procurement pattern recognition
- Forward-looking demand forecast
- **Productized output:** Market Signal Brief

### 5. BD Action Planning

Synthesizes the above into operator-grade plans:
- 7-day named actions (who, what, why this week)
- 30-day named actions
- Relationship layer integration — warm intro recommendations from `_people/` records
- Capture cycle alignment (Shipley phase mapping)
- **Productized output:** BD Action Plan

### Cross-cutting capability: Recruiting Intelligence

Cleared recruiting treated as market intelligence (where talent moves *is* a signal):
- Boolean library for cleared search
- LinkedIn / Recruiter Lite filter playbooks
- Golden and bad candidate profiles
- Company targeting, geographic strategy
- Iterative cleared search protocol
- Chrome Claude MCP workflow for live LinkedIn sessions

---

## Voice and brand cues for the website

- **Identity:** SIGINT for GovCon. Intelligence service, not a database. Operator-built, not analyst-built.
- **Tone:** Direct, evidence-led, no fluff. "What should I do next week, and why?" — that question shapes every page.
- **Founder credibility front and center:** USMC SIGINT (MOS 2651, three Helmand deployments), 16 years cleared (TS/SCI w/ CI poly), 18 years cleared GovCon BD.
- **Anti-positioning:** Not GovTribe/GovWin (data), not Bloomberg Gov (news), not GovDash/Privia (capture/proposal execution). Signal Force is the synthesis layer none of them are.
- **Why now (2026):** AI capability threshold + mature federal procurement data infrastructure + simultaneous consolidation/modernization/digitization of the federal contracting base.

---

## What today's session produced

- Initial commit (`867aff2`) of the full Layer 1 build directory and the local operator tool.
- All 47 markdown library files committed with the rail structure documented in the root `README.md`.
- Working SQLite indexer (`build_index.py`), search CLI (`search.py`), bundle assembler (`bundle.py`), and Anthropic-API generator (`generate.py`).
- HigherGov contracts connector validated end-to-end against the live API.
- Two real bundles generated against the indexed library (NGA Agency Fit Brief; DPG Q3 2026 BD Action Plan), confirming the toolchain works.
- Documented follow-ups in `_tools/TODO.md` so quality and reliability work has a backlog.

---

## Notes for the second-version website prompt

- This directory is the **source of truth** for what Signal Force is, who it serves, what it produces, and how it produces it. A website builder should read `00_Foundation/signal_force_foundation.md` first if it needs deeper material than this summary.
- The website is **product-marketing for Layer 3**, but Layer 3 isn't built yet. Don't promise UI or SaaS features that don't exist. Lead with the intelligence methodology and the report types — those are real and demonstrable today.
- DPG Solutions appears throughout as the **reference implementation** for stress-testing the methodology. The website should not market DPG; DPG is the worked example proving Signal Force can produce something useful for a real cleared services firm.
- The operator tool itself is not the product being sold — it's the proof-of-value loop. The product narrative is the intelligence service.
