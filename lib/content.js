// Central content file. Edit copy here — components read from this, not hardcoded strings.

export const site = {
  name: 'Kingsley Andy',
  title: 'Business Intelligence Team Lead & Analytics Engineer',
  url: 'https://kingsleyandy-site.vercel.app',
  email: 'hello@kingsleyandy.com',
  linkedin: 'https://www.linkedin.com/in/kingsleyandy',
  cvHref: '/Kingsley-Andy-CV.pdf',
  description:
    'Kingsley Andy — Business Intelligence Team Lead & Analytics Engineer. 5+ years designing BI systems, data models, and automation across EdTech, Fintech, HSE, and CRM analytics. Open to senior roles in the UK, UAE, and Canada.',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Business Intelligence Team Lead // Analytics Engineer',
  headlinePre: 'I build enterprise reporting platforms ',
  headlineGradient: 'leadership actually trusts.',
  subhead:
    'Five years designing BI systems, data models, and automation across EdTech, Fintech, HSE, and CRM analytics — from raw pipelines to the executive dashboard.',
  status: 'Open to opportunities — UK · UAE · Canada · remote or relocation',
  ctas: {
    primary: { label: 'See selected work', href: '#work' },
    secondary: { label: 'Download CV', href: '/Kingsley-Andy-CV.pdf' },
  },
  stats: [
    { value: 5, suffix: '+', label: 'yrs BI & analytics' },
    { value: 20, suffix: '+', label: 'international projects' },
    { value: 100, suffix: '%', label: 'Upwork job success' },
    { value: 1, suffix: '', label: 'MS Certified', isText: true, display: 'PL-300' },
  ],
};

export const about = {
  eyebrow: 'About',
  heading: 'Reporting infrastructure, owned end to end.',
  paragraphs: [
    'Leads the BI function at 10Alytics, owning the reporting stack end to end — ingestion and warehouse pipelines, semantic models, executive dashboards, and the automation that keeps it running.',
    'Also delivers international BI and automation projects as co-founder of Duten Nexa, working directly with clients across HSE, energy, CRM, and marketing analytics.',
    'Background: B.Sc. Mathematics & Statistics; Microsoft Certified Data Analyst (PL-300); trained 200+ professionals, including teams at Kuda Bank and InfraCredit. Looking for senior BI / analytics-engineering roles in the UK, UAE, or Canada — remote or relocation.',
  ],
};

export const experience = {
  eyebrow: 'Experience',
  heading: 'Where the work has happened.',
  items: [
    {
      role: 'BI Team Lead',
      org: '10Alytics',
      period: 'May 2023 — Present',
      description:
        'Leads the BI function; progressed through four roles, Team Lead since November 2025.',
    },
    {
      role: 'Independent BI Consultant',
      org: 'Upwork — Top Rated',
      period: '2023 — Present',
      description:
        '20+ international projects across HSE analytics, CRM migrations, energy platforms, and automation.',
    },
    {
      role: 'Co-Founder & Delivery Lead',
      org: 'Duten Nexa',
      period: '2025 — Present',
      description:
        'BI and automation consultancy delivering to international clients.',
    },
  ],
};

export const work = {
  eyebrow: 'Selected Work',
  heading: 'Five systems, five different failure modes fixed.',
  caseStudies: [
    {
      slug: 'enterprise-hse-analytics-platform',
      title: 'Enterprise HSE Analytics Platform',
      oneLiner:
        "Audited and rebuilt a Gulf safety platform's KPI engine so every dashboard reports one trusted number.",
      client: 'Withheld under contract',
      role: 'BI Consultant — KPI Engine Audit & Rebuild',
      stack: ['Power BI', 'DAX'],
      kpis: [
        { value: 4, suffix: '', label: 'composite indexes rebuilt' },
        { value: 1, suffix: '', label: 'validated formula per measure' },
        { value: 1, suffix: '', label: 'presented at AVP level', isText: true },
      ],
      problem:
        "The platform's safety KPIs — composite indexes rolled up from incident, exposure, and audit data — were computed inconsistently across reports. Different dashboards showed different numbers for what was meant to be the same metric, which meant nobody could fully trust the reporting layer at review time, including at AVP level.",
      approach:
        'Audited every existing measure back to its source calculation, mapped where formulas diverged across the four composite indexes, and rebuilt each one as a single validated DAX formula layer. Every downstream dashboard was repointed to the same shared measures instead of report-local calculations, removing the possibility of silent drift.',
      outcome:
        'All four composite indexes now resolve from one validated formula layer, so every dashboard reports the same number for the same metric. The rebuilt model was presented and signed off at AVP level.',
    },
    {
      slug: '150-reporting-tables-into-one-model',
      title: '150 Reporting Tables into One Model',
      oneLiner:
        'Collapsed ~150 per-cohort tables and ~190 duplicated measures into one scalable model.',
      client: 'Withheld under contract',
      role: 'BI Consultant — Semantic Model Consolidation',
      stack: ['Power BI', 'Power Query (M)', 'DAX'],
      kpis: [
        { value: 150, suffix: '', prefix: '', label: 'tables → 1', display: '150 → 1' },
        { value: 190, suffix: '', label: 'measures → ~9', display: '~190 → ~9' },
        { value: 158, suffix: '', label: 'queries fixed' },
      ],
      problem:
        'Reporting had grown one cohort at a time: a new table and its own set of measures for every new intake, until the model held roughly 150 near-duplicate tables and ~190 measures doing the same handful of calculations. Every new cohort meant more manual duplication and more surface area for the numbers to quietly disagree.',
      approach:
        'Re-modelled the cohort data into a single scalable structure — one fact table with a cohort dimension instead of one table per cohort — and rebuilt the ~190 duplicated measures down to a shared set of roughly nine parameterised measures. Along the way, 158 broken or redundant Power Query steps were identified and fixed as part of the consolidation.',
      outcome:
        'The model went from ~150 tables to 1 and from ~190 measures to about 9, with 158 queries fixed. New cohorts now extend the existing model instead of requiring a new copy of it.',
    },
    {
      slug: 'marketing-sales-funnel-engine',
      title: 'Marketing → Sales Funnel Engine',
      oneLiner:
        'Automated engine unifying six sources into one funnel view, refreshed around the clock.',
      client: 'Withheld under contract',
      role: 'BI Consultant — Funnel Automation',
      stack: ['Google Apps Script', 'Zoho CRM API', 'Google Sheets'],
      kpis: [
        { value: 31000, suffix: '+', label: 'leads deduplicated', display: '~31,000' },
        { value: 6, suffix: '', label: 'sources unified' },
        { value: 2, suffix: 'h', label: 'refresh cycle' },
        { value: 6, suffix: '', label: 'stage funnel per lead' },
      ],
      problem:
        'Lead and funnel data lived across six disconnected marketing and CRM sources, with no shared identity for a lead moving between them. Duplicate records and manual reconciliation made it impossible to see a single, current view of the funnel.',
      approach:
        'Built an automated engine on Google Apps Script that pulls from all six sources and the Zoho CRM API, deduplicates leads against a persistent identity, and maps each one to a consistent six-stage funnel. The engine refreshes on a two-hour cycle into Google Sheets, replacing manual pulls with a standing, current dataset.',
      outcome:
        'The engine deduplicated roughly 31,000 leads across six unified sources, refreshing every two hours and placing every lead into a consistent six-stage funnel view.',
    },
    {
      slug: 'hubspot-crm-power-bi-migration',
      title: 'HubSpot CRM → Power BI Migration',
      oneLiner:
        "Moved a New Zealand client's management reporting off HubSpot's native dashboards onto an owned BI platform.",
      client: 'Playground Centre, New Zealand',
      role: 'BI Consultant — Reporting Platform Migration',
      stack: ['Power BI', 'HubSpot API', 'Incremental Refresh'],
      kpis: [
        { value: 5, suffix: '.0★', label: 'across repeat contracts' },
        { value: 1, suffix: '', label: 'Upwork → direct client', isText: true },
        { value: 12, suffix: 'h', label: 'time gap bridged' },
      ],
      problem:
        "The client's management reporting depended on HubSpot's native dashboards, which limited how the data could be modelled, combined, and presented to leadership. They needed reporting they owned outright, not bound to one platform's built-in views — and the working relationship spanned a 12-hour time difference.",
      approach:
        "Connected to HubSpot's API directly and rebuilt the management reporting layer in Power BI with incremental refresh, giving the client full control over data modelling and report design independent of HubSpot's native interface. Communication and delivery were structured around the 12-hour gap to keep the project moving without overlap-dependent handoffs.",
      outcome:
        'The client now runs management reporting on an owned Power BI platform rather than native HubSpot dashboards. The engagement earned 5.0★ ratings across repeat contracts and converted from an Upwork engagement to a direct client relationship.',
    },
    {
      slug: 'energy-monitoring-platform-migration',
      title: 'Energy Monitoring Platform Migration',
      oneLiner:
        'Migrated a monitoring reporting layer from Azure Data Explorer to SQL Server with no rebuild of the downstream reports.',
      client: 'Withheld under contract',
      role: 'BI Consultant — Data Platform Migration',
      stack: ['Power BI', 'Power Query', 'SQL Server'],
      kpis: [
        { value: 1, suffix: '', label: 'ADX → SQL engine migration', isText: true },
        { value: 0, suffix: '', label: 'downstream report rebuilds' },
      ],
      problem:
        'The client needed to move their monitoring data platform off Azure Data Explorer onto SQL Server for infrastructure reasons, but the existing Power BI reports built on top of ADX represented significant existing investment that could not be discarded.',
      approach:
        'Re-pointed the Power Query layer to SQL Server, restructuring the underlying queries to preserve the exact shape of data the existing reports expected, so the migration happened underneath the reporting layer rather than through it.',
      outcome:
        'The platform now runs on SQL Server instead of Azure Data Explorer with zero downstream reports requiring a rebuild — the migration was invisible to report users.',
    },
  ],
};

export const skills = {
  eyebrow: 'Skills & Tools',
  heading: 'The stack behind the dashboards.',
  groups: [
    {
      name: 'BI & Analytics',
      items: ['Power BI', 'DAX', 'Power Query (M)', 'Looker Studio', 'Semantic Modelling', 'Report Governance'],
    },
    {
      name: 'Data Engineering',
      items: ['SQL', 'PostgreSQL', 'BigQuery', 'ETL/ELT Pipelines', 'Airbyte', 'Incremental Refresh'],
    },
    {
      name: 'Automation & Apps',
      items: ['Power Automate', 'Power Apps', 'Google Apps Script', 'Power Automate Desktop', 'React'],
    },
    {
      name: 'Sources & Systems',
      items: ['HubSpot', 'Zoho CRM', 'GA4', 'Meta Ads', 'Google Sheets'],
    },
    {
      name: 'Languages',
      items: ['Python', 'JavaScript', 'M', 'DAX', 'SQL'],
    },
  ],
};

export const credentials = {
  eyebrow: 'Credentials',
  heading: 'Certified, trained, and recognised.',
  items: [
    'Microsoft Certified: Data Analyst Associate (PL-300)',
    'B.Sc. Mathematics & Statistics, University of Calabar',
    'MBA, Marketing — Ahmadu Bello University, Zaria (expected 2027)',
    'Upwork Top Rated, 100% Job Success Score',
    'MVP Award, 10Alytics 2025',
    '200+ professionals trained',
  ],
};

export const testimonials = {
  eyebrow: 'Testimonials',
  heading: 'What clients say after the project ships.',
  items: [
    {
      quote:
        'Kingsley continues to deliver outstanding results, even when faced with highly complex data and processes.',
      source: 'Power BI reporting client, New Zealand',
      rating: 5.0,
    },
    {
      quote:
        'His problem-solving skills enabled us to seamlessly navigate challenges despite a 12-hour time difference.',
      source: 'HubSpot dashboards client, New Zealand',
      rating: 5.0,
    },
    {
      quote: 'His communication was great throughout and he is super pleasant to work with.',
      source: 'Power Automate client, Singapore',
      rating: 5.0,
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Open to opportunities in the UK, UAE, and Canada.',
  subhead:
    'Remote or relocation. If you need a senior BI lead who can own the reporting stack end to end, let\'s talk.',
  email: site.email,
  linkedin: site.linkedin,
  cvHref: site.cvHref,
};
