export type Project = {
  name: string;
  slug: string;
  city: "Coimbatore" | "Chennai" | "Nilgiris" | "Anaikatti";
  category: "Residential portfolio";
};

export const projects: Project[] = [
  { name: "Amber", slug: "amber", city: "Coimbatore", category: "Residential portfolio" },
  { name: "Altin Square", slug: "altin-square", city: "Coimbatore", category: "Residential portfolio" },
  { name: "Kota Goldfields", slug: "kota-goldfields", city: "Coimbatore", category: "Residential portfolio" },
  { name: "S3", slug: "s3", city: "Coimbatore", category: "Residential portfolio" },
  { name: "Sankalp", slug: "sankalp", city: "Coimbatore", category: "Residential portfolio" },
  { name: "Aureus", slug: "aureus", city: "Chennai", category: "Residential portfolio" },
  { name: "Silver Oak", slug: "silver-oak", city: "Chennai", category: "Residential portfolio" },
  { name: "Aishwarya Apartments", slug: "aishwarya-apartments", city: "Chennai", category: "Residential portfolio" },
  { name: "Svenska Estate", slug: "svenska-estate", city: "Nilgiris", category: "Residential portfolio" },
  { name: "Riva", slug: "riva", city: "Anaikatti", category: "Residential portfolio" },
];

export const projectCities = ["All places", "Coimbatore", "Chennai", "Nilgiris", "Anaikatti"] as const;
