import { Html, Head, Main, NextScript } from 'next/document';

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
    "Data Engineering", "Machine Learning", "Data Science", "Data Analysis",
    "Full-Stack Development", "FinTech", "AI Integration",
    "Python", "SQL", "Docker", "FastAPI", "React", "Next.js",
  ],
  email: "tveeraj311@gmail.com",
  workLocation: { "@type": "Place", name: "Hyderabad, India" },
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
    location: "Hyderabad, India",
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="3rd-year B.Tech CSE student with full-stack data expertise (pipelines, ML, analytics). Adobe Hackathon finalist ready for Data Engineer, Data Scientist, or Data Analyst roles in FinTech. Python • SQL • ML • Full-Stack." />
        <meta name="keywords" content="data engineer, data scientist, data analyst, machine learning, fintech, python, sql, full-stack developer, ETL, pipelines, GRIET, Hyderabad" />
        <meta name="author" content="Veeraj Thota" />
        <meta property="og:title" content="Veeraj Thota | Data Professional - Engineer, Scientist, Analyst Ready" />
        <meta property="og:description" content="Building scalable data systems for FinTech. Adobe Hackathon finalist ready for any data role." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-sandy-two-27.vercel.app" />
        <meta property="og:image" content="https://portfolio-sandy-two-27.vercel.app/self.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Veeraj Thota | Data Professional" />
        <meta name="twitter:description" content="3rd-year B.Tech CSE student ready for Data Engineer, Data Scientist, or Data Analyst roles in FinTech." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#fafafa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
