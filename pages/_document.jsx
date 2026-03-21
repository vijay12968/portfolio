import { Html, Head, Main, NextScript } from 'next/document';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Veeraj Thota",
  jobTitle: "Data Professional",
  url: "https://portfolio-sandy-two-27.vercel.app",
  image: "https://portfolio-sandy-two-27.vercel.app/self.jpeg",
  description: "Data engineer, scientist, and analyst. B.Tech Computer Science. Adobe Hackathon finalist. Full-stack development expertise.",
  sameAs: [
    "https://linkedin.com/in/veeraj-thota-9463a1290",
    "https://github.com/vijay12968",
  ],
  knowsAbout: ["Data Engineering", "Machine Learning", "Data Science", "Data Analysis", "Full-Stack Development"],
  email: "tveeraj311@gmail.com",
  workLocation: { "@type": "Place", name: "Hyderabad, India" },
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Gokaraju Rangaraju Institute of Engineering and Technology",
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Data engineer and full-stack developer. B.Tech Computer Science. Building scalable systems and data pipelines." />
        <meta name="keywords" content="data engineer, developer, full-stack, machine learning, python, sql, fintech" />
        <meta name="author" content="Veeraj Thota" />
        <meta property="og:title" content="Veeraj Thota | Data Engineer and Developer" />
        <meta property="og:description" content="Data engineer and developer. Building scalable data systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-sandy-two-27.vercel.app" />
        <meta property="og:image" content="https://portfolio-sandy-two-27.vercel.app/self.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#ffffff" />
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
