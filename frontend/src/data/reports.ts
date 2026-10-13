// Project reports (photographic PDF dossiers in /public/reports/pdf).
// Generated from the PDFs: every fact below is taken from the photos, banners or signboards in each report.

export interface ProjectReport {
  slug: string;
  /** Slug of the project page this report belongs to. */
  project: string;
  programId: string;
  /** True when the report documents a project that already existed in projects.ts. */
  existingProject?: boolean;
  title: string;
  category: string;
  location?: string;
  state?: string;
  partner?: string;
  period?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  pdf: string;
  pages: number;
  sizeMB: number;
  cover: string;
  photos: string[];
}

export const reports: ProjectReport[] = [
  {
    "slug": "mgm-warangal",
    "project": "mgm-hospital-warangal",
    "programId": "prog-health",
    "title": "Bio-Medical Equipment, MGM Hospital Warangal",
    "category": "Healthcare",
    "location": "Warangal",
    "state": "Telangana",
    "partner": "GAIL (India) Limited",
    "period": "CSR F/Y 2020-21",
    "summary": "Bio-medical equipment supplied by GAIL India Limited under CSR funds 2020-21 to MGM Hospital, Warangal, implemented by Sathwik Rural and Youth Integrated Association as part of the Swachh Bharat initiative.",
    "highlights": [
      "Samsung HS50 ultrasound systems",
      "Allans C-arm imaging system",
      "Operation theatre LED lights and OT table",
      "Anaesthesia workstations and Nihon Kohden bedside monitors",
      "ICU beds",
      "Autoclaves for sterilisation",
      "Karl Storz laparoscope set"
    ],
    "tags": [
      "Healthcare",
      "Medical Equipment",
      "GAIL CSR"
    ],
    "pdf": "/reports/pdf/mgm-warangal.pdf",
    "pages": 28,
    "sizeMB": 13,
    "cover": "/reports/mgm-warangal/14.webp",
    "photos": [
      "/reports/mgm-warangal/01.webp",
      "/reports/mgm-warangal/03.webp",
      "/reports/mgm-warangal/04.webp",
      "/reports/mgm-warangal/05.webp",
      "/reports/mgm-warangal/07.webp",
      "/reports/mgm-warangal/08.webp",
      "/reports/mgm-warangal/09.webp",
      "/reports/mgm-warangal/10.webp",
      "/reports/mgm-warangal/11.webp",
      "/reports/mgm-warangal/13.webp",
      "/reports/mgm-warangal/14.webp",
      "/reports/mgm-warangal/15.webp",
      "/reports/mgm-warangal/16.webp",
      "/reports/mgm-warangal/17.webp",
      "/reports/mgm-warangal/18.webp",
      "/reports/mgm-warangal/20.webp",
      "/reports/mgm-warangal/21.webp",
      "/reports/mgm-warangal/23.webp",
      "/reports/mgm-warangal/25.webp",
      "/reports/mgm-warangal/26.webp",
      "/reports/mgm-warangal/27.webp",
      "/reports/mgm-warangal/28.webp"
    ]
  },
  {
    "slug": "thorrur-college",
    "project": "govt-degree-college-thorrur",
    "programId": "prog-education",
    "title": "Govt. Degree College, Thorrur",
    "category": "Education",
    "location": "Thorrur, Mahabubabad District",
    "state": "Telangana",
    "partner": "GAIL (India) Limited",
    "summary": "Construction of the Government Degree College building at Thorrur, Mahabubabad District, a CSR initiative of GAIL (India) Limited, documented from construction through to the inauguration ceremony.",
    "highlights": [
      "New two-storey college building",
      "Construction progress documented on site",
      "Inauguration ceremony with public representatives"
    ],
    "tags": [
      "Education",
      "College Construction",
      "GAIL CSR"
    ],
    "pdf": "/reports/pdf/thorrur-college.pdf",
    "pages": 26,
    "sizeMB": 11.9,
    "cover": "/reports/thorrur-college/01.webp",
    "photos": [
      "/reports/thorrur-college/01.webp",
      "/reports/thorrur-college/02.webp",
      "/reports/thorrur-college/03.webp",
      "/reports/thorrur-college/04.webp",
      "/reports/thorrur-college/05.webp",
      "/reports/thorrur-college/06.webp",
      "/reports/thorrur-college/07.webp",
      "/reports/thorrur-college/08.webp",
      "/reports/thorrur-college/09.webp",
      "/reports/thorrur-college/10.webp",
      "/reports/thorrur-college/11.webp",
      "/reports/thorrur-college/12.webp",
      "/reports/thorrur-college/13.webp",
      "/reports/thorrur-college/14.webp",
      "/reports/thorrur-college/15.webp",
      "/reports/thorrur-college/16.webp",
      "/reports/thorrur-college/17.webp",
      "/reports/thorrur-college/18.webp",
      "/reports/thorrur-college/19.webp",
      "/reports/thorrur-college/20.webp",
      "/reports/thorrur-college/21.webp",
      "/reports/thorrur-college/22.webp",
      "/reports/thorrur-college/23.webp",
      "/reports/thorrur-college/24.webp",
      "/reports/thorrur-college/25.webp",
      "/reports/thorrur-college/26.webp"
    ]
  },
  {
    "slug": "jangaon-college",
    "project": "govt-junior-college-for-girls-jangaon",
    "programId": "prog-education",
    "title": "Govt. Junior College for Girls, Jangaon",
    "category": "Education",
    "location": "Jangaon",
    "state": "Telangana",
    "partner": "GAIL (India) Limited",
    "summary": "Construction of the Government Junior College for Girls in Jangaon, a CSR initiative of GAIL (India) Limited, from the foundation ceremony to the completed campus.",
    "highlights": [
      "Foundation ceremony",
      "Completed two-storey college building",
      "Site photographs geo-tagged in November 2019"
    ],
    "tags": [
      "Education",
      "College Construction",
      "Girls Education",
      "GAIL CSR"
    ],
    "pdf": "/reports/pdf/jangaon-college.pdf",
    "pages": 17,
    "sizeMB": 8.5,
    "cover": "/reports/jangaon-college/10.webp",
    "photos": [
      "/reports/jangaon-college/01.webp",
      "/reports/jangaon-college/02.webp",
      "/reports/jangaon-college/03.webp",
      "/reports/jangaon-college/04.webp",
      "/reports/jangaon-college/05.webp",
      "/reports/jangaon-college/06.webp",
      "/reports/jangaon-college/07.webp",
      "/reports/jangaon-college/08.webp",
      "/reports/jangaon-college/09.webp",
      "/reports/jangaon-college/10.webp",
      "/reports/jangaon-college/11.webp",
      "/reports/jangaon-college/12.webp",
      "/reports/jangaon-college/13.webp",
      "/reports/jangaon-college/14.webp",
      "/reports/jangaon-college/15.webp",
      "/reports/jangaon-college/16.webp",
      "/reports/jangaon-college/17.webp"
    ]
  },
  {
    "slug": "nallagunta-toilets",
    "project": "school-toilets-nallagunta",
    "programId": "prog-health",
    "title": "School Toilets, ZPPSS Nallagunta",
    "category": "Water & Sanitation",
    "location": "Nallagunta",
    "state": "Telangana",
    "partner": "GAIL (India) Limited",
    "summary": "Toilet blocks built for school students with the support of GAIL (India) Limited under the Swachh Bharat Swachh Vidyalaya Abhiyan.",
    "highlights": [
      "Foundation ceremony with students and teachers",
      "New toilet blocks for school students",
      "Site photographs geo-tagged November to December 2019"
    ],
    "tags": [
      "Sanitation",
      "Swachh Vidyalaya",
      "GAIL CSR"
    ],
    "pdf": "/reports/pdf/nallagunta-toilets.pdf",
    "pages": 14,
    "sizeMB": 7,
    "cover": "/reports/nallagunta-toilets/12.webp",
    "photos": [
      "/reports/nallagunta-toilets/01.webp",
      "/reports/nallagunta-toilets/02.webp",
      "/reports/nallagunta-toilets/03.webp",
      "/reports/nallagunta-toilets/04.webp",
      "/reports/nallagunta-toilets/05.webp",
      "/reports/nallagunta-toilets/07.webp",
      "/reports/nallagunta-toilets/08.webp",
      "/reports/nallagunta-toilets/09.webp",
      "/reports/nallagunta-toilets/10.webp",
      "/reports/nallagunta-toilets/11.webp",
      "/reports/nallagunta-toilets/12.webp",
      "/reports/nallagunta-toilets/13.webp",
      "/reports/nallagunta-toilets/14.webp"
    ]
  },
  {
    "slug": "tshirts-benches",
    "project": "tshirts-and-school-benches",
    "programId": "prog-education",
    "title": "T-shirts & School Benches Distribution",
    "category": "Education",
    "summary": "Distribution of Sathwik T-shirts to students and new desks and benches for school classrooms.",
    "highlights": [
      "T-shirts for students",
      "New desks and benches for classrooms"
    ],
    "tags": [
      "Education",
      "School Furniture"
    ],
    "pdf": "/reports/pdf/tshirts-benches.pdf",
    "pages": 18,
    "sizeMB": 10.3,
    "cover": "/reports/tshirts-benches/05.webp",
    "photos": [
      "/reports/tshirts-benches/01.webp",
      "/reports/tshirts-benches/02.webp",
      "/reports/tshirts-benches/03.webp",
      "/reports/tshirts-benches/04.webp",
      "/reports/tshirts-benches/05.webp",
      "/reports/tshirts-benches/06.webp",
      "/reports/tshirts-benches/07.webp",
      "/reports/tshirts-benches/08.webp",
      "/reports/tshirts-benches/09.webp",
      "/reports/tshirts-benches/10.webp",
      "/reports/tshirts-benches/11.webp",
      "/reports/tshirts-benches/12.webp",
      "/reports/tshirts-benches/13.webp",
      "/reports/tshirts-benches/14.webp",
      "/reports/tshirts-benches/15.webp",
      "/reports/tshirts-benches/16.webp",
      "/reports/tshirts-benches/17.webp",
      "/reports/tshirts-benches/18.webp"
    ]
  },
  {
    "slug": "masks-sanitizers",
    "project": "masks-and-sanitizer-distribution",
    "programId": "prog-health",
    "title": "Masks & Sanitizer Distribution",
    "category": "Healthcare",
    "summary": "Distribution of masks, sanitizers and essential supplies to villagers, carried out together with the local police.",
    "highlights": [
      "Masks and sanitizers",
      "Essential supplies for families",
      "Organised together with the local police"
    ],
    "tags": [
      "Healthcare",
      "Relief",
      "Hygiene"
    ],
    "pdf": "/reports/pdf/masks-sanitizers.pdf",
    "pages": 10,
    "sizeMB": 5.3,
    "cover": "/reports/masks-sanitizers/03.webp",
    "photos": [
      "/reports/masks-sanitizers/01.webp",
      "/reports/masks-sanitizers/02.webp",
      "/reports/masks-sanitizers/03.webp",
      "/reports/masks-sanitizers/04.webp",
      "/reports/masks-sanitizers/05.webp",
      "/reports/masks-sanitizers/06.webp",
      "/reports/masks-sanitizers/07.webp",
      "/reports/masks-sanitizers/08.webp",
      "/reports/masks-sanitizers/09.webp",
      "/reports/masks-sanitizers/10.webp"
    ]
  },
  {
    "slug": "cc-cameras",
    "project": "cc-camera-installation",
    "programId": "prog-education",
    "title": "CC Camera Installation",
    "category": "Community Development",
    "location": "Vardhannapet",
    "state": "Telangana",
    "summary": "CC cameras installed by Sathwik Rural and Youth Integrated Association, inaugurated by Sri Errabelli Dayakar Rao, Minister for Panchayat Raj, Rural Development and RWS, and Sri G. Ramesh, ACP Vardhannapet.",
    "highlights": [
      "Ribbon-cutting inauguration",
      "Live camera monitoring screen"
    ],
    "tags": [
      "Community Safety",
      "CC Cameras"
    ],
    "pdf": "/reports/pdf/cc-cameras.pdf",
    "pages": 4,
    "sizeMB": 1.7,
    "cover": "/reports/cc-cameras/03.webp",
    "photos": [
      "/reports/cc-cameras/01.webp",
      "/reports/cc-cameras/02.webp",
      "/reports/cc-cameras/03.webp",
      "/reports/cc-cameras/04.webp"
    ]
  },
  {
    "slug": "gorantla-bridge",
    "project": "gorantla-bridge-works",
    "programId": "prog-education",
    "title": "Bridge Works, Gorantla",
    "category": "Community Development",
    "location": "Gorantla",
    "summary": "Bridge construction works at Gorantla, from excavation of the river bed to the completed bridge with street lighting.",
    "highlights": [
      "Excavation and foundation works",
      "Completed bridge with street lights"
    ],
    "tags": [
      "Infrastructure",
      "Bridge"
    ],
    "pdf": "/reports/pdf/gorantla-bridge.pdf",
    "pages": 7,
    "sizeMB": 3.6,
    "cover": "/reports/gorantla-bridge/01.webp",
    "photos": [
      "/reports/gorantla-bridge/01.webp",
      "/reports/gorantla-bridge/04.webp",
      "/reports/gorantla-bridge/05.webp",
      "/reports/gorantla-bridge/06.webp",
      "/reports/gorantla-bridge/07.webp"
    ]
  },
  {
    "slug": "nagaram-skills",
    "project": "skill-development-mamidikudhuru",
    "programId": "prog-empowerment",
    "existingProject": true,
    "title": "GAIL Institute of Skills, Nagaram",
    "category": "Youth Development",
    "location": "Nagaram",
    "state": "Andhra Pradesh",
    "partner": "GAIL (India) Limited",
    "summary": "The GAIL Institute of Skills at Nagaram, Andhra Pradesh: classrooms and training in progress.",
    "highlights": [
      "Institute campus and signage",
      "Classroom training sessions"
    ],
    "tags": [
      "Youth",
      "Skill Development"
    ],
    "pdf": "/reports/pdf/nagaram-skills.pdf",
    "pages": 7,
    "sizeMB": 3.8,
    "cover": "/reports/nagaram-skills/02.webp",
    "photos": [
      "/reports/nagaram-skills/01.webp",
      "/reports/nagaram-skills/02.webp",
      "/reports/nagaram-skills/03.webp",
      "/reports/nagaram-skills/04.webp",
      "/reports/nagaram-skills/05.webp",
      "/reports/nagaram-skills/06.webp",
      "/reports/nagaram-skills/07.webp"
    ]
  }
];

export const reportForProject = (slug?: string) => reports.find((r) => r.project === slug);
