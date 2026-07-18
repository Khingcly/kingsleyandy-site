// Central content file. Edit copy here — components read from this, not hardcoded strings.
// Source of truth: exported "Kingsley Andy — Portfolio" / "Case Study" scrollytelling design.

export const site = {
  name: 'Kingsley Andy',
  title: 'Business Intelligence Team Lead & Analytics Engineer',
  url: 'https://www.kingsleyandy.com',
  email: 'hello@kingsleyandy.com',
  linkedin: 'https://www.linkedin.com/in/kingsleyandy',
  cvHref: '/Kingsley-Andy-CV.pdf',
  description:
    'Kingsley Andy — Business Intelligence Team Lead & Analytics Engineer. 5+ years turning messy, disputed numbers into reporting leadership trusts across EdTech, Fintech, HSE, and CRM analytics.',
};

export const nav = {
  brand: 'Kingsley Andy',
  items: [
    { label: 'The Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'CV', href: site.cvHref },
};

export const hero = {
  tag: 'No Visibility · Unreliable · Too Late',
  headline: "Every business is drowning in data it can't trust.",
  scrollCue: 'Scroll to bring it into focus',
  skipLabel: 'Skip story → view the work',
};

export const ingestion = {
  step: '01 · Ingestion',
  heading: 'Kingsley Andy: I build order out of this.',
  paragraphs: [
    'He leads the BI function at 10Alytics, owning the reporting stack end to end: ingestion, warehouse pipelines, semantic models, executive dashboards, and the automation that keeps it all running. As co-founder of Duten Nexa, he delivers the same discipline for international clients direct.',
    'B.Sc. Mathematics & Statistics. Microsoft Certified Data Analyst. Has trained 200+ professionals, including teams at Kuda Bank and InfraCredit, to bring the same rigor to their own numbers.',
  ],
};

export const modeling = {
  step: '02 · Modeling',
  heading: 'Structure emerges.',
  subhead:
    'Every scattered source gets a place in one model: a semantic layer that turns disagreement into a single trusted number.',
  layerLabel: 'Semantic Layer',
  skillGroups: [
    { name: 'BI & Analytics', tools: ['Power BI', 'DAX', 'Power Query', 'Looker Studio'] },
    { name: 'Data Engineering', tools: ['SQL', 'PostgreSQL', 'BigQuery', 'Airbyte'] },
    { name: 'Automation & Apps', tools: ['Power Automate', 'Power Apps', 'Apps Script', 'React'] },
    { name: 'Sources & Systems', tools: ['HubSpot', 'Zoho CRM', 'GA4', 'Meta Ads'] },
  ],
};

export const dashboard = {
  step: '03 · Clarity',
  heading: 'The numbers you can trust.',
  subhead: 'Five real projects, five messes resolved into one reliable read for leadership.',
};

export const caseStudies = [
  {
    id: 'hse',
    slug: 'enterprise-hse-analytics-platform',
    num: '01',
    title: 'Enterprise HSE Analytics Platform',
    oneLiner:
      "Audited and rebuilt a Gulf safety platform's KPI engine so every dashboard reports one trusted number.",
    client: 'Confidential · Gulf region',
    role: 'Business Intelligence Lead · Analytics Engineer',
    stack: ['Power BI', 'DAX'],
    problem:
      "A Gulf-region safety organization's HSE reporting had grown into several composite indexes that no longer reconciled. Different dashboards told different stories about the same incidents, each with its own version of the calculation behind it, and leadership had started to question the numbers put in front of them at senior review.",
    approach:
      'Kingsley audited the existing KPI engine end to end, tracing every composite index back to its underlying measures and formulas. Rather than patch individual dashboards, he rebuilt the calculation logic so every index drew on one validated formula layer, then tested the rebuilt measures against historical data before rolling the new model out.',
    outcome:
      'Four composite indexes now run on a single validated formula layer per measure instead of drifting, duplicated logic. The rebuilt reporting was presented at AVP level, with a KPI engine leadership could question and trust in the same conversation.',
    kpis: [
      { label: 'indexes rebuilt', target: 4 },
      { label: 'formula layer / measure', display: '1' },
      { label: 'presented at', display: 'AVP' },
    ],
  },
  {
    id: 'tables150',
    slug: '150-reporting-tables-into-one-model',
    num: '02',
    title: '150 Reporting Tables into One Model',
    oneLiner:
      'Collapsed ~150 per-cohort tables and ~190 duplicated measures into one scalable model.',
    client: 'Confidential',
    role: 'Business Intelligence Lead · Analytics Engineer',
    stack: ['Power BI', 'Power Query (M)', 'DAX'],
    problem:
      'A cohort-based reporting system had grown one table at a time until it held roughly 150 near-duplicate tables and close to 190 measures, each a slight variation on the last. Dozens of queries had quietly broken along the way, and there was no single model anyone could point to as the source of truth.',
    approach:
      'Kingsley rebuilt the Power Query (M) layer so every cohort fed one shared model instead of its own copy, then rationalized the DAX measure library down to a core set that could serve every report. Broken queries were fixed as part of the same pass rather than left for later.',
    outcome:
      '~150 tables became 1 scalable model, ~190 duplicated measures collapsed to about 9, and 158 broken queries were fixed, leaving one model behind every cohort instead of 150.',
    kpis: [
      { label: 'tables', display: '150 → 1' },
      { label: 'measures', display: '~190 → ~9' },
      { label: 'queries fixed', target: 158 },
    ],
  },
  {
    id: 'funnel',
    slug: 'marketing-sales-funnel-engine',
    num: '03',
    title: 'Marketing → Sales Funnel Engine',
    oneLiner:
      'Automated engine unifying six sources into one funnel view, refreshed around the clock.',
    client: 'Confidential',
    role: 'Business Intelligence Lead · Analytics Engineer',
    stack: ['Google Apps Script', 'Zoho CRM API', 'Google Sheets'],
    problem:
      'Marketing and sales leads were scattered across six disconnected sources with no shared view of the funnel. Duplicate leads inflated the numbers, and by the time anyone reconciled the sources by hand, the view of where deals actually stood was already out of date.',
    approach:
      'Kingsley built an automation engine on Google Apps Script and the Zoho CRM API that pulls leads from all six sources, deduplicates them, and stages each one against a single six-stage funnel model in Google Sheets, refreshing continuously instead of on request.',
    outcome:
      '~31,000 leads deduplicated across 6 unified sources, refreshing every 2 hours, with every lead tracked through the same 6-stage funnel instead of six disconnected ones.',
    kpis: [
      { label: 'leads deduped', target: 31000 },
      { label: 'sources unified', target: 6 },
      { label: 'refresh', display: '2 hrs' },
    ],
  },
  {
    id: 'hubspot',
    slug: 'hubspot-crm-power-bi-migration',
    num: '04',
    title: 'HubSpot CRM → Power BI Migration',
    oneLiner:
      "Moved a New Zealand client's management reporting off native dashboards onto an owned BI platform.",
    client: 'Playground Centre · New Zealand',
    role: 'Business Intelligence Lead · Analytics Engineer',
    stack: ['Power BI', 'HubSpot API', 'Incremental refresh'],
    problem:
      "The client's management reporting lived entirely inside HubSpot's native dashboards, limiting how the numbers could be modeled, combined, or presented. Requirements had to be worked out across a 12-hour time difference, with no overlap in the working day.",
    approach:
      'Kingsley migrated the reporting layer onto Power BI via the HubSpot API with incremental refresh, rebuilding the client\'s management views as an owned platform rather than a rented set of dashboards, coordinating async to make the time gap a non-issue.',
    outcome:
      'The engagement earned 5.0-star ratings across repeat contracts and moved from an Upwork engagement to a direct client relationship, with the 12-hour time difference bridged without slowing delivery.',
    kpis: [
      { label: 'client rating', target: 5, decimals: 1, suffix: '★' },
      { label: 'relationship', display: 'Upwork → Direct' },
      { label: 'time gap bridged', target: 12, suffix: 'h' },
    ],
  },
  {
    id: 'energy',
    slug: 'energy-monitoring-platform-migration',
    num: '05',
    title: 'Energy Monitoring Platform Migration',
    oneLiner:
      'Migrated a monitoring reporting layer from Azure Data Explorer to SQL Server with no rebuild of the downstream reports.',
    client: 'Confidential',
    role: 'Business Intelligence Lead · Analytics Engineer',
    stack: ['Power BI', 'Power Query', 'SQL Server'],
    problem:
      "The client's energy monitoring reporting sat on Azure Data Explorer and needed to move its underlying engine to SQL Server, without disrupting the reports operations teams relied on daily.",
    approach:
      'Kingsley re-pointed the reporting layer\'s data source and Power Query logic from ADX to SQL Server, preserving the semantic model so every existing report kept working against the new engine unchanged.',
    outcome: 'A clean ADX → SQL engine migration with zero downstream reports needing to be rebuilt.',
    kpis: [
      { label: 'migration', display: 'ADX → SQL' },
      { label: 'report rebuilds', target: 0, display: '0' },
    ],
  },
];

export const resolution = {
  step: '04 · The Storyteller',
  heading: "Behind every clean dashboard, someone who can explain why it's right.",
  paragraph:
    'Kingsley Andy is a Business Intelligence Team Lead and Analytics Engineer based in Lagos, Nigeria, with 5+ years turning messy, disputed numbers into reporting leadership trusts across EdTech, Fintech, HSE, and CRM analytics.',
  credentials: [
    'PL-300 Certified',
    'B.Sc. Mathematics & Statistics',
    'MBA, Marketing — expected 2027',
    'Upwork Top Rated · 100% JSS',
    'MVP Award, 10Alytics 2025',
    '200+ professionals trained',
  ],
};

export const testimonials = [
  {
    quote:
      'Kingsley continues to deliver outstanding results, even when faced with highly complex data and processes.',
    source: 'Power BI reporting client · New Zealand',
  },
  {
    quote:
      'His problem-solving skills enabled us to seamlessly navigate challenges despite a 12-hour time difference.',
    source: 'HubSpot dashboards client · New Zealand',
  },
  {
    quote: 'His communication was great throughout and he is super pleasant to work with.',
    source: 'Power Automate client · Singapore',
  },
];

export const contact = {
  status: 'Open to opportunities: UK · UAE · Canada · remote or relocation',
  heading: "Let's talk about your data.",
  email: site.email,
  linkedin: site.linkedin,
  cvHref: site.cvHref,
  footerHeading: 'See the rest of the work, or get in touch.',
};
