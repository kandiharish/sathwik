export interface GalleryImage {
  url: string;
  caption: string;
  category: string;
  projectSlug?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    url: "/Bihar ro plant 50 lakhs/WhatsApp Image 2026-08-19 at 11.17.09 PM (1).jpeg",
    caption: "Students in a newly furnished digital classroom.",
    category: "Education",
    projectSlug: "blind-school-project"
  },
  {
    url: "/Medical equipment ghatkesar hyd 1 crore/WhatsApp Image 2026-08-19 at 11.19.11 PM.jpeg",
    caption: "RO water plant installation at a primary school.",
    category: "Healthcare",
    projectSlug: "bihar-ro-plant"
  },
  {
    url: "/Cycle project karimnagar/WhatsApp Image 2026-08-19 at 11.13.06 PM (2).jpeg",
    caption: "Women's tailoring vocational training center.",
    category: "Community"
  },
  {
    url: "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg",
    caption: "Distribution of medical equipment to rural PHC.",
    category: "Healthcare",
    projectSlug: "medical-equipment-ghatkesar"
  },
  {
    url: "/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.04 PM (1).jpeg",
    caption: "Children utilizing new school desks.",
    category: "Education",
    projectSlug: "cycle-project-karimnagar"
  },
  {
    url: "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg",
    caption: "Community health awareness camp.",
    category: "People"
  }
];
