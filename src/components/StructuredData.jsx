export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "BladeZ",
    jobTitle: "Web Developer, Minecraft Server Setup and Design Specialist",
    description:
      "Pakistan-based Product Designer and Software Engineer with 3+ years of experience creating digital products",
    url: "https://bladezdoesstuff.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "pakistan",
      addressCountry: "GB",
    },
    email: "bladezapple@gmail.com",
    knowsAbout: [
      "Product Design",
      "User Experience Design",
      "User Interface Design",
      "Design Systems",
      "Frontend Development",
      "Sofware Engineer",
      "React",
      "Next.js",
      "Figma",
      "Mobile App Design",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "3+ Years Product Design Experience",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
