// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.once-ui.com";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "dahlStudio — Thoughtful design for what comes next",
    description:
      "dahlStudio builds clear, characterful brands and digital experiences for people moving good ideas forward.",
    image: "/images/og/home.jpg",
    canonical: "https://once-ui.com",
    robots: "index,follow",
    alternates: [{ href: "https://once-ui.com", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Once UI",
  description: meta.home.description,
  email: "lorant@once-ui.com",
};

export { meta, schema, baseURL };