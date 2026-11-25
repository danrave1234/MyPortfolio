export const siteUrl = "https://www.danravekeh.com";
export const siteTitle = "Danrave C. Keh | Full-Stack & Cloud Developer in Cebu";
export const hayahai = { name: "Hayahai Solutions", url: "https://www.hayahaisolutions.com/" };
export const siteDescription = "Full-stack developer in Cebu City working on ferry bookings, the Moodle platform, and tools for Philippine businesses. Explore my work or email me about a project.";
export const contactEmail = "danravekeh123@gmail.com";
export const resumePath = "/danrave-keh-resume.pdf";

export function projectSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
