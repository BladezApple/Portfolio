export const metadata = {
  title: "Past Projects",
  description:
    "Explore my designs and development work featuring work with various startups, influencers and more. See how I approach user-centered design challenges and deliver impactful output.",
  openGraph: {
    title: "Past Projects | BladeZ",
    description:
      "Explore my websites and designs featuring work with various startups, influencers and more. See how I approach user-centered design challenges and deliver impactful output.",
    images: [
      {
        url: "/trail-images/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Dev and Design Projects | BladeZ",
      },
    ],
  },
  twitter: {
    title: "Dev and Design Projects | BladeZ",
    description:
      "Explore my websites and designs featuring work with various startups, influencers and more. See how I approach user-centered design challenges and deliver impactful output.",
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
