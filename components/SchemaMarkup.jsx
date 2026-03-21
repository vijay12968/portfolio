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
      "3rd-year B.Tech CSE student with full-stack data expertise (pipelines, ML, analytics). Adobe Hackathon finalist ready for Data Engineer, Data Scientist, or Data Analyst roles in FinTech. Python • SQL • ML • Full-Stack.",
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
      "FinTech",
      "AI Integration",
      "Python",
      "SQL",
      "Docker",
      "FastAPI",
      "React",
      "Next.js",
    ],
    email: "tveeraj311@gmail.com",
    workLocation: {
      "@type": "Place",
      name: "Hyderabad, India",
    },
    affiliation: {
      "@type": "EducationalOrganization",
      name: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
      location: "Hyderabad, India",
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
