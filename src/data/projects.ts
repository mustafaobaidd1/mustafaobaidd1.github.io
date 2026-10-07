export const OWNER = 'mustafaobaidd1';
export const SITE = `https://${OWNER}.github.io`;

export type Category =
  'Physics' | 'Mathematics' | 'Algorithms' | 'Data' | 'Graphics' | 'Audio' | 'Engineering' | 'Game';

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  /** Two or three words for the hero index. */
  short: string;
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
  /** Short status shown on the card, e.g. how a live demo runs. */
  badge?: string;
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
    short: 'GPU wind tunnel',
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
    short: 'Spectral sky',
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
    short: 'Solar planner',
    question:
      'Where is the sun at any moment — and which way should a solar panel face to catch the most of it?',
    summary:
      'Track the sun anywhere on Earth, draw the buildings that shade you, and search the whole tilt–azimuth landscape for the best panel orientation.',
    categories: ['Physics', 'Engineering', 'Data'],
    tech: ['TypeScript', 'React', 'three.js', 'D3', 'Web Workers'],
    skills: ['Solar geometry', 'Optimisation', '3D visualisation'],
    accent: '#e3a22a',
    features: [
      'Scrub any day and time: the sun moves along its real path over a 3D massing model and the shadows follow.',
      'Draw buildings and trees on the sun-path diagram; the shading cuts both the direct beam and the visible sky.',
      'Search every tilt and azimuth at once: a heat map of annual energy with the optimum and its 95 % tolerance band.',
      'Compare fixed, seasonal re-tilt, single- and dual-axis tracking, and estimate yearly PV output.',
      'Choose a clear-sky upper bound or NASA POWER long-term averages; export a year of hourly values as CSV.',
    ],
    howItWorks:
      'Sun position follows the NOAA/Meeus algorithm. Clear-sky irradiance comes from the simplified Solis model (aerosol, water vapour and altitude are editable), and the Perez 1990 or Hay–Davies model transposes it onto the tilted panel with ground reflection. A Web Worker integrates every hour of the year for each tilt and azimuth and refines the optimum.',
    challenge:
      'Getting the astronomy and radiometry right to reference precision while keeping a year-long integration over every panel orientation interactive in the browser.',
    validation: [
      { label: 'Sun position vs NOAA Solar Calculator (3 sites)', value: 'within 0.004°' },
      { label: 'Sunrise and sunset vs NOAA and USNO', value: 'within 1 s' },
      { label: 'Solis, Perez, Hay–Davies vs pvlib test values', value: '≤ 0.0044 W/m²' },
      {
        label: 'Optimum tilt vs PVGIS 5.3 (long-term averages)',
        value: 'within 2.4° outside the tropics',
      },
      { label: 'Midnight sun at Tromsø vs USNO', value: 'same dates, 19 May – 25 Jul 2026' },
    ],
    kind: 'tool',
  },
  {
    slug: 'strut-topology',
    number: '04',
    title: 'Strut',
    subtitle: 'Topology optimisation in the browser',
    short: 'Topology optimiser',
    question:
      'If you know where a part is held and where it is pushed, what is the stiffest shape you can make?',
    summary:
      'Place supports and loads and watch a finite-element optimiser grow the stiffest structure for the material you allow — then export it for fabrication.',
    categories: ['Engineering', 'Mathematics'],
    tech: ['TypeScript', 'Svelte', 'Web Workers', 'WebGL2', 'KaTeX'],
    skills: ['Finite element method', 'Gradient-based optimisation', 'Digital fabrication'],
    accent: '#ff5b14',
    features: [
      'Drag loads and supports and the design re-optimises live from where it is.',
      'Five presets, void and solid painting, symmetry, undo/redo and full keyboard editing.',
      'Density, von Mises stress, deformed shape and strain-energy views.',
      'An “88-line reference mode” that reproduces the published MATLAB results.',
      'Export a smoothed SVG cut outline or a watertight STL for 3D printing.',
    ],
    howItWorks:
      '2D plane-stress finite elements with the SIMP material model, a density filter and Heaviside projection, updated by the optimality-criteria method. Equilibrium is solved matrix-free by conjugate gradients with a geometric multigrid preconditioner, in a Web Worker.',
    challenge:
      'A finite-element solver fast enough to re-optimise while you drag — about 36 ms per iteration on a 120 × 48 mesh — that still matches the reference implementation to the printed digit.',
    validation: [
      {
        label: 'MBB beam 60×20, sensitivity filter (Andreassen et al. 2011)',
        value: '216.8137 vs 216.81',
      },
      { label: 'MBB beam 60×20, density filter', value: '233.7146 vs 233.71' },
      { label: 'Heaviside projection variant', value: '189.1405 vs 189.14' },
      { label: 'Cantilever vs Timoshenko beam theory', value: '−0.24 % at 64 elements deep' },
      { label: 'Sensitivities vs finite differences', value: 'max relative error 6 × 10⁻⁷' },
    ],
    kind: 'tool',
  },
  {
    slug: 'fixture-league-scheduler',
    number: '05',
    title: 'Fixture',
    subtitle: 'A league scheduler that explains its conflicts',
    short: 'League scheduler',
    question:
      'Can a whole season be scheduled around everyone’s constraints — and if not, which ones are to blame?',
    summary:
      'A SAT solver written from scratch schedules a full season, proves the minimum number of home/away breaks, and explains impossible constraint sets.',
    categories: ['Algorithms', 'Mathematics'],
    tech: ['TypeScript', 'React', 'Web Workers', 'MathML'],
    skills: ['SAT solving (CDCL)', 'Constraint modelling', 'Combinatorial optimisation'],
    accent: '#0b6e4f',
    features: [
      'Schedule single or double round-robins for 2–20 clubs with nine kinds of rules.',
      'Minimise home/away breaks and get “Optimal (proven)” when the solver shows nothing better exists.',
      'When rules clash, see the smallest set that cannot hold together and relax one with a click.',
      'Every schedule is re-checked by an independent validator, and every proof by a separate checker.',
      'Export CSV and a calendar (ICS) per club, or share the whole setup as a link.',
    ],
    howItWorks:
      'The league becomes a CNF formula: match, round and venue variables, cardinality encodings, and a selector literal per rule. A CDCL SAT solver written from scratch — watched literals, clause learning, VSIDS, restarts — solves it in a Web Worker. Tightening a totalizer bound until it is UNSAT proves the minimum; assumption cores shrunk to a minimal set explain infeasibility.',
    challenge:
      'Writing a capable SAT solver in TypeScript and turning its raw output — cores and proofs — into explanations a league organiser can act on.',
    validation: [
      {
        label: 'Single round robin, minimum breaks (de Werra: n − 2)',
        value: 'n − 3 proven impossible, n = 4…16',
      },
      { label: 'Mirrored double round robin (3n − 6)', value: 'proven for n = 4…12' },
      { label: 'Random 3-SAT, n = 20, ratio 4.26, vs brute force', value: '1 000 / 1 000 agree' },
      { label: 'Pigeonhole PHP(n+1, n)', value: 'UNSAT up to PHP(9, 8), proofs checked' },
      { label: 'Example league', value: 'optimal 18 breaks proven in ≈ 0.1 s' },
    ],
    kind: 'tool',
  },
  {
    slug: 'quiet-zone-qr',
    number: '06',
    title: 'Quiet Zone',
    subtitle: 'Inside a QR code',
    short: 'QR anatomy',
    question:
      'How does a QR code still scan when part of it is scratched, torn or covered by a logo?',
    summary:
      'Encode, scratch and decode a QR code with an encoder and decoder written from scratch, and watch Reed–Solomon error correction repair the damage.',
    categories: ['Mathematics', 'Algorithms'],
    tech: ['TypeScript', 'Svelte', 'SVG', 'KaTeX'],
    skills: ['Finite fields', 'Error-correcting codes', 'Information design'],
    accent: '#1f4bff',
    features: [
      'Scratch, erase, tear, add a logo sticker or random noise; the decoder reruns on every pointer move.',
      'Per-block error budgets show how close each Reed–Solomon block is to failing, and why it failed.',
      'Hover any module to see its role, down to "data bit 3 of codeword 17 in block 2".',
      'An eight-step story walks your own message from text to bits, codewords, interleaving, placement, masking and back.',
      'Export the undamaged code as SVG or PNG; it scans with a phone.',
    ],
    howItWorks:
      'Codewords live in the finite field GF(256). Each block gets n − k Reed–Solomon check codewords, the remainder of a polynomial division, so up to ⌊(n − k)/2⌋ wrong codewords per block can be located and fixed: syndromes, Berlekamp–Massey for the error locator, Chien search for positions and Forney for magnitudes. Format and version information use BCH codes; the eight masks are scored with the standard’s four penalty rules.',
    challenge:
      'Writing the whole pipeline from scratch — encoder for all 40 versions and 4 levels, and a decoder with error and erasure correction — and making it fast enough to rerun on every pointer move, while keeping damage anchored to the symbol when the text (and therefore the version) changes.',
    validation: [
      {
        label: 'HELLO WORLD 1-Q codewords, mask and format',
        value: '13 + 13 exact; mask 6, penalty 314',
      },
      {
        label: 'Spec tables (blocks, capacities, alignment, format, version)',
        value: 'all rows match',
      },
      { label: 'Reed–Solomon, correctable random patterns', value: '10 000 / 10 000 corrected' },
      {
        label: 'Beyond capacity (t+1 … t+5 errors)',
        value: '10 000 / 10 000 flagged, 0 miscorrections',
      },
      { label: 'Our codes read by jsQR, all 40 versions', value: '2 000 / 2 000' },
      { label: 'qrcode (npm) codes read by our decoder', value: '2 000 / 2 000' },
    ],
    kind: 'explorer',
  },
  {
    slug: 'horocycle-hyperbolic',
    number: '07',
    title: 'Horocycle',
    subtitle: 'Paint on the hyperbolic plane',
    short: 'Hyperbolic studio',
    question: 'What does a world look like where space grows faster the farther you go?',
    summary:
      'Paint one motif and watch it tile the hyperbolic plane in real time; travel through it and measure triangles whose angles add up to less than 180°.',
    categories: ['Mathematics', 'Graphics'],
    tech: ['TypeScript', 'WebGL2', 'GLSL', 'MathML'],
    skills: ['Non-Euclidean geometry', 'Group theory', 'Shader programming'],
    accent: '#c9a227',
    features: [
      'Paint in one tile and the stroke appears in every tile of the infinite tiling at once.',
      'Six {p,q} presets or any triangle group; switch reflection and rotation symmetry and keep your strokes.',
      'Drag to travel through hyperbolic space with inertia; two-finger rotate on touch screens.',
      'Poincaré disk, half-plane, Klein and band models with morphing transitions.',
      'Measure geodesics, triangle angle sums and circles; export PNG up to 4096 px or share a link.',
    ],
    howItWorks:
      'A WebGL2 fragment shader folds each pixel back into the fundamental triangle by repeated reflections across its sides, then samples the painted motif; the number of reflections gives the colouring. Travel is a Möbius isometry of the disk, re-centred on a symmetry so 32-bit floats stay accurate.',
    challenge:
      'Exact hyperbolic geometry at interactive frame rates in a shader, with painting, travel and model changes all staying consistent — verified to near machine precision.',
    validation: [
      {
        label: 'Isometries preserve distance (100 000 samples)',
        value: 'worst relative error 3 × 10⁻¹³',
      },
      { label: 'Triangle angles π/p, π/q, π/r (12 075 triples)', value: '3.6 × 10⁻¹⁵ rad' },
      { label: 'Gauss–Bonnet: integrated area vs π − angle sum', value: '1.5 × 10⁻¹⁰' },
      { label: 'Circumference vs 2π sinh r', value: '2.6 × 10⁻¹⁴ relative' },
      { label: 'Fold convergence (200 004 points)', value: '0 failures' },
    ],
    kind: 'explorer',
  },
  {
    slug: 'monochord-string-lab',
    number: '08',
    title: 'Monochord',
    subtitle: 'The physics of a vibrating string',
    short: 'String physics',
    question:
      'Why does a guitar sound brighter when plucked near the bridge, and a piano’s low notes slightly out of tune?',
    summary:
      'Pluck, strike and hear a physically modelled stiff string simulated at audio rate, and compare its measured overtones with theory.',
    categories: ['Physics', 'Audio'],
    tech: ['TypeScript', 'Web Audio', 'AudioWorklet', 'Canvas', 'KaTeX'],
    skills: ['Numerical PDEs', 'Digital signal processing', 'Acoustics'],
    accent: '#2f6f73',
    features: [
      'Drag the string and let go: hear it, and watch it vibrate in slow motion.',
      'A live spectrum and waterfall with the predicted partials and the “missing harmonics” of the pluck point.',
      'Pluck, strike with a felt hammer, or bow; seven presets from published string data.',
      'Experiments for pluck position, stiffness, damping and pickup position, plus a two-octave keyboard.',
      'A table of measured versus predicted partials.',
    ],
    howItWorks:
      'An explicit finite-difference scheme for the stiff, damped string (Bilbao) runs one step per audio sample in an AudioWorklet, right at its stability limit. The same physics module drives the sound, the slow-motion drawing, the tests and the validation script.',
    challenge:
      'Running a stable PDE solver at 48 000 steps a second on the audio thread, and showing with real numbers where it agrees with theory and where numerical dispersion appears.',
    validation: [
      { label: 'f₀ of a near-ideal string, 82–440 Hz', value: 'within 0.005 cents of theory' },
      {
        label: 'Stiff-string partials vs n·f₀·√(1 + Bn²)',
        value: 'within the scheme’s own dispersion',
      },
      { label: 'Pluck at L/3: partials 3, 6, 9', value: '110–119 dB below their neighbours' },
      { label: 'Lossless energy, every preset, 1 s', value: 'drift ≤ 7.3 × 10⁻¹³' },
      {
        label: 'Bowed violin, nylon and E4 strings',
        value: 'Helmholtz motion, harmonics within 0.01 ¢',
      },
    ],
    kind: 'interactive simulation',
  },
  {
    slug: 'deep-focus-earthquakes',
    number: '09',
    title: 'Deep Focus',
    subtitle: 'An atlas of earthquake depths',
    short: 'Earthquake atlas',
    question:
      'Where do earthquakes happen, how deep — and what do their depths reveal about plates diving into the mantle?',
    summary:
      'Fifty years of USGS earthquakes on a 3D globe, with cross-sections that reveal subducting slabs and statistics for any region you select.',
    categories: ['Data', 'Physics', 'Graphics'],
    tech: ['TypeScript', 'Svelte', 'three.js', 'D3', 'Web Workers'],
    skills: ['Data engineering', 'Geospatial maths', 'Statistical estimation'],
    accent: '#7b3cff',
    features: [
      '87 866 earthquakes (M ≥ 5, 1973–2025) on a 3D globe, coloured by depth.',
      'True-depth mode sinks every event inside a translucent Earth so subducting slabs appear.',
      'Cut a cross-section anywhere, or pick one of eight presets, and get the fitted slab dip with its uncertainty.',
      'Gutenberg–Richter statistics with the b-value for any selection, depth histograms and events per year.',
      'A live layer of the last month from USGS, a flat-map view and full keyboard control.',
    ],
    howItWorks:
      'A reproducible script downloads the USGS ComCat catalogue year by year and packs it into compact binary files that a Web Worker decodes. three.js draws the globe, cross-sections project events onto a great-circle profile, and the b-value uses the Aki/Utsu maximum-likelihood estimator with Shi & Bolt uncertainty.',
    challenge:
      'Turning fifty years of raw catalogue data into a fast, honest 3D instrument: about 1.5 MB of data, tens of thousands of points at interactive frame rates, and statistics that hold up on synthetic tests.',
    validation: [
      { label: 'Yearly counts vs the USGS count endpoint', value: '53 / 53 years match' },
      {
        label: 'b-value on synthetic catalogues (0.8 / 1.0 / 1.2)',
        value: 'mean 0.799 / 0.995 / 1.191',
      },
      { label: 'Slab-dip fit on synthetic slabs, 20–85°', value: 'mean error ≤ 0.7°' },
      {
        label: 'Reference events (Tōhoku, Bolivia 631 km, Okhotsk 598 km)',
        value: 'present and matching',
      },
      { label: 'Tonga slab dip, real catalogue', value: '46.9° ± 0.3°' },
    ],
    kind: 'explorer',
  },
  {
    slug: 'lensing-game',
    number: '10',
    title: 'Lensing',
    subtitle: 'A puzzle game about bending light with gravity',
    short: 'Puzzle game',
    question:
      'Gravity is your only tool: where do you put a moon, a star or a black hole so the light finds its way home?',
    summary:
      'Place masses to bend beams of starlight into telescopes. Thirty hand-made levels, an endless mode and a level editor — the one project here made purely for fun.',
    categories: ['Game', 'Physics', 'Graphics'],
    tech: ['TypeScript', 'Canvas', 'Web Audio'],
    skills: ['Game design', 'Level design', 'Numerical integration'],
    accent: '#123b6d',
    features: [
      '30 hand-made plates in three chapters, each with a reference solution and a par.',
      'Endless mode: puzzles built around hidden masses, so every one is solvable.',
      'A level editor with share codes; winning a test play stores a solution for hints.',
      'Black holes that capture light, voids that push it away, tinted nebulae and focusing fans of beams.',
      'Synthesised sound, haptics, full keyboard play and screen-reader announcements.',
    ],
    howItWorks:
      'Each beam is integrated as a ray that bends toward every mass with a pull falling off as M/r². Far from a mass this reproduces Einstein’s 1/b deflection law; a black hole captures beams aimed inside its critical distance and loops those just outside.',
    challenge:
      'Making a physics puzzle genuinely fun: a smooth difficulty curve, each level’s solution window measured by a level-lab script, and beams re-tracing at 60 fps while you drag.',
    validation: [
      { label: 'Weak-field deflection vs 2μ/b (b = 3 000)', value: '+0.24 %' },
      { label: 'Starlight grazing the Sun', value: '1.7512″ vs 1.75″' },
      { label: '15 strong-deflection cases vs the exact integral', value: 'worst 0.028°' },
      { label: 'Endless generator, 6 000 puzzles', value: 'all solvable, none won empty' },
      { label: 'All 30 plates', value: 'won by dragging in the real interface' },
    ],
    kind: 'game',
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
    status: 'live',
    year: '2024',
    liveUrl: `${SITE}/todo-list/`,
    badge: 'Live demo · Django on WebAssembly',
    note: 'GitHub Pages cannot run a Django server, so the live demo runs the unmodified project inside your browser with Pyodide (CPython compiled to WebAssembly); the database lives in IndexedDB.',
    run: [
      'python -m venv .venv',
      'source .venv/bin/activate  # Windows: .venv\\Scripts\\activate',
      'pip install "django>=5.0,<6"',
      'python manage.py migrate',
      'python manage.py createsuperuser',
      'python manage.py runserver',
      '# sign in at /admin/, then open /tasks/',
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
    run: [
      '# needs the .NET 10 SDK',
      'dotnet restore',
      'dotnet run',
      '# then open http://localhost:5048/scalar',
    ],
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
