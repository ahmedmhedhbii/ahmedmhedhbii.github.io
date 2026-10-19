import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://ahmedmhedhbii.github.io/",
    title: "Ahmed Mhedhbi",
    description: "Research on proof complexity and communication complexity at Université de Montréal.",
    author: "Ahmed Mhedhbi",
    profile: "https://ahmedmhedhbii.github.io/",
    timezone: "America/Toronto",
    lang: "en",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/ahmedmhedhbii" },
    { name: "x",        url: "https://x.com/ahmed_mhedhbii" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ahmed-mhedhbi/" },
    { name: "mail",     url: "mailto:ahmed.a.mhedhbi@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
