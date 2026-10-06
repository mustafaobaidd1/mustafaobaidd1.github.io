export const OWNER = 'mustafaobaidd1';
export const SITE = `https://${OWNER}.github.io`;

export type Category =
  'Physics' | 'Mathematics' | 'Algorithms' | 'Data' | 'Graphics' | 'Audio' | 'Engineering' | 'Game';

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  question: string;
  summary: string;
  categories: Category[];
  tech: string[];
  skills: string[];
  accent: string;
  features: string[];
  howItWorks: string;
  challenge: string;
  validation: { label: string; value: string }[];
  kind: 'interactive simulation' | 'tool' | 'explorer' | 'game';
}

export interface EarlierProject {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  status: 'live' | 'page';
  year: string;
  liveUrl?: string;
  note?: string;
  run?: string[];
}

export const demoUrl = (slug: string) => `${SITE}/${slug}/`;
export const repoUrl = (slug: string) => `https://github.com/${OWNER}/${slug}`;

export const projects: Project[] = [
  {
    slug: 'karman-wind-tunnel',
    number: '01',
    title: 'Kármán',
    subtitle: 'A GPU wind tunnel',
    question:
      'How does the shape of an object change the air flowing around it — and the force it feels?',
    summary:
      'Draw any shape into a live lattice-Boltzmann wind tunnel running on the GPU, then measure the drag, lift and vortex shedding it causes.',
    categories: ['Physics', 'Graphics', 'Engineering'],
    tech: ['TypeScript', 'WebGPU', 'WGSL', 'Web Workers'],
    skills: ['Computational fluid dynamics', 'GPU compute', 'Numerical validation'],
    accent: '#ff4d2e',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'interactive simulation',
  },
  {
    slug: 'scatter-sky-lab',
    number: '02',
    title: 'Scatter',
    subtitle: 'Why the sky is blue',
    question:
      'Why is the sky blue and not violet, why are sunsets red — and why are sunsets on Mars blue?',
    summary:
      'A spectral sky simulator: drag the sun, switch off the physics one piece at a time, and read the spectrum of any point in the sky.',
    categories: ['Physics', 'Graphics'],
    tech: ['TypeScript', 'WebGL2', 'GLSL'],
    skills: ['Spectral rendering', 'Radiative transfer', 'Colour science'],
    accent: '#4a86c8',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'interactive simulation',
  },
  {
    slug: 'heliograph-solar',
    number: '03',
    title: 'Heliograph',
    subtitle: 'Sun path and solar panel planner',
    question:
      'Where is the sun at any moment — and which way should a solar panel face to catch the most of it?',
    summary:
      'Track the sun anywhere on Earth, draw the buildings that shade you, and search the whole tilt–azimuth landscape for the best panel orientation.',
    categories: ['Physics', 'Engineering', 'Data'],
    tech: ['TypeScript', 'React', 'three.js', 'D3'],
    skills: ['Solar geometry', 'Optimisation', '3D visualisation'],
    accent: '#e3a22a',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'tool',
  },
  {
    slug: 'strut-topology',
    number: '04',
    title: 'Strut',
    subtitle: 'Topology optimisation in the browser',
    question:
      'If you know where a part is held and where it is pushed, what is the stiffest shape you can make?',
    summary:
      'Place supports and loads and watch a finite-element optimiser grow the stiffest structure for the material you allow — then export it for fabrication.',
    categories: ['Engineering', 'Mathematics'],
    tech: ['TypeScript', 'Svelte', 'Web Workers', 'Canvas'],
    skills: ['Finite element method', 'Gradient-based optimisation', 'Digital fabrication'],
    accent: '#ff5b14',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'tool',
  },
  {
    slug: 'fixture-league-scheduler',
    number: '05',
    title: 'Fixture',
    subtitle: 'A league scheduler that explains its conflicts',
    question:
      'Can a whole season be scheduled around everyone’s constraints — and if not, which ones are to blame?',
    summary:
      'A SAT solver written from scratch schedules a full season, proves the minimum number of home/away breaks, and explains impossible constraint sets.',
    categories: ['Algorithms', 'Mathematics'],
    tech: ['TypeScript', 'React', 'Web Workers'],
    skills: ['SAT solving (CDCL)', 'Constraint modelling', 'Combinatorial optimisation'],
    accent: '#0b6e4f',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'tool',
  },
  {
    slug: 'quiet-zone-qr',
    number: '06',
    title: 'Quiet Zone',
    subtitle: 'Inside a QR code',
    question:
      'How does a QR code still scan when part of it is scratched, torn or covered by a logo?',
    summary:
      'Encode, scratch and decode a QR code with an encoder and decoder written from scratch, and watch Reed–Solomon error correction repair the damage.',
    categories: ['Mathematics', 'Algorithms'],
    tech: ['TypeScript', 'Svelte', 'SVG'],
    skills: ['Finite fields', 'Error-correcting codes', 'Information design'],
    accent: '#1f4bff',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'explorer',
  },
  {
    slug: 'horocycle-hyperbolic',
    number: '07',
    title: 'Horocycle',
    subtitle: 'Paint on the hyperbolic plane',
    question: 'What does a world look like where space grows faster the farther you go?',
    summary:
      'Paint one motif and watch it tile the hyperbolic plane in real time; travel through it and measure triangles whose angles add up to less than 180°.',
    categories: ['Mathematics', 'Graphics'],
    tech: ['TypeScript', 'WebGL2', 'GLSL', 'Canvas'],
    skills: ['Non-Euclidean geometry', 'Group theory', 'Shader programming'],
    accent: '#c9a227',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'explorer',
  },
  {
    slug: 'monochord-string-lab',
    number: '08',
    title: 'Monochord',
    subtitle: 'The physics of a vibrating string',
    question:
      'Why does a guitar sound brighter when plucked near the bridge, and a piano’s low notes slightly out of tune?',
    summary:
      'Pluck, strike and hear a physically modelled stiff string simulated at audio rate, and compare its measured overtones with theory.',
    categories: ['Physics', 'Audio'],
    tech: ['TypeScript', 'Web Audio', 'AudioWorklet', 'Canvas'],
    skills: ['Numerical PDEs', 'Digital signal processing', 'Acoustics'],
    accent: '#2f6f73',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'interactive simulation',
  },
  {
    slug: 'deep-focus-earthquakes',
    number: '09',
    title: 'Deep Focus',
    subtitle: 'An atlas of earthquake depths',
    question:
      'Where do earthquakes happen, how deep — and what do their depths reveal about plates diving into the mantle?',
    summary:
      'Fifty years of USGS earthquakes on a 3D globe, with cross-sections that reveal subducting slabs and statistics for any region you select.',
    categories: ['Data', 'Physics', 'Graphics'],
    tech: ['TypeScript', 'Svelte', 'three.js', 'D3'],
    skills: ['Data engineering', 'Geospatial maths', 'Statistical estimation'],
    accent: '#7b3cff',
    features: [],
    howItWorks: '',
    challenge: '',
    validation: [],
    kind: 'explorer',
  },
];

export const earlierProjects: EarlierProject[] = [
  {
    slug: 'TheSecret',
    title: 'The Secret',
    summary:
      'A recipe-sharing website: browse dishes by diet and cooking time, save favourites, and share your own recipes. Front end built during a full-stack internship.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    status: 'live',
    year: '2024',
    liveUrl: `${SITE}/TheSecret/`,
  },
  {
    slug: 'MansafjiV2',
    title: 'Mansafji',
    summary:
      'A landing page for a Jordanian restaurant concept: menu, reviews and table reservations, designed around a hand-drawn mansaf illustration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Swiper'],
    status: 'live',
    year: '2024',
    liveUrl: `${SITE}/MansafjiV2/`,
  },
  {
    slug: 'todo-list',
    title: 'To-Do List',
    summary:
      'A Django task manager built during a full-stack internship: a per-user task list with detail, create, edit and delete views, a ModelForm and server-rendered templates on SQLite.',
    tech: ['Python', 'Django', 'SQLite'],
    status: 'page',
    year: '2024',
    note: 'A server-rendered Django application. GitHub Pages only serves static files, so this page describes it instead of running it.',
    run: [
      'python -m venv .venv',
      'source .venv/bin/activate  # Windows: .venv\\Scripts\\activate',
      'pip install django',
      'python manage.py migrate',
      'python manage.py createsuperuser',
      'python manage.py runserver',
      '# sign in at /admin/, then open /',
    ],
  },
  {
    slug: 'aspnetcore-identity-demo',
    title: 'ASP.NET Core Identity demo',
    summary:
      'A .NET 10 Web API that adds login with ASP.NET Core Identity endpoints: cookies and bearer tokens, role-based authorisation, EF Core migrations on SQLite and an interactive Scalar API reference.',
    tech: ['C#', '.NET 10', 'ASP.NET Core', 'EF Core', 'SQLite'],
    status: 'page',
    year: '2026',
    note: 'A back-end API with a database. It needs a .NET server, so GitHub Pages cannot run it; this page explains what it does and how to run it locally.',
    run: ['dotnet restore', 'dotnet run', '# then open http://localhost:5199/scalar'],
  },
];

export const allCategories: Category[] = [
  'Physics',
  'Mathematics',
  'Algorithms',
  'Engineering',
  'Data',
  'Graphics',
  'Audio',
  'Game',
];
