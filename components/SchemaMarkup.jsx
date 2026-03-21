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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
};

export default SchemaMarkup;
