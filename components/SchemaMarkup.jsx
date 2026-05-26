import React from "react";

const SchemaMarkup = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Veeraj Thota",
    jobTitle: "Data Professional",
    url: "https://portfolio-sandy-two-27.vercel.app",
    image: "https://portfolio-sandy-two-27.vercel.app/self.jpeg",
    description:
      "Data engineer, scientist, and analyst. B.Tech Computer Science. Adobe Hackathon finalist. Full-stack development expertise.",
    sameAs: [
      "https://linkedin.com/in/veeraj-thota-9463a1290",
      "https://github.com/vijay12968",
    ],
    knowsAbout: [
      "Data Engineering",
      "Machine Learning",
      "Data Science",
      "Data Analysis",
      "Full-Stack Development",
    ],
    email: "tveeraj311@gmail.com",
    workLocation: {
      "@type": "Place",
      name: "Hyderabad, India",
    },
    affiliation: {
      "@type": "EducationalOrganization",
      name: "Gokaraju Rangaraju Institute of Engineering and Technology",
    },
  };

  // Safe JSON-LD: data is static and JSON.stringify escapes all special chars
  const safeJsonLd = JSON.stringify(personSchema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      // SAFE: Static JSON-LD schema, no user input, escaped with JSON.stringify + Unicode escaping
      dangerouslySetInnerHTML={{ __html: safeJsonLd }} // ship-safe-ignore XSS static data only
    />
  );
};

export default SchemaMarkup;
