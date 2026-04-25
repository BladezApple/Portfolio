import "./globals.css";

import ClientLayout from "@/client-layout";
import { fontVariables } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: {
    template: "%s | BladeZ",
    default: "Portfolio",
  },
  description:
    "Pakistan based Product Designer and Developer with 3+ years of experience creating digital products across fintech, mobility, and consumer apps. Specialized in user-centered design, design systems, and front-end development.",
  keywords: [
    "Product Designer Pakistan",
    "UI/UX Designer",
    "Design Engineer",
    "Product Design",
    "User Experience Design",
    "Design Systems",
    "Frontend Developer",
    "Digital Product Designer",
    "Mobile App Designer",
    "React Developer",
    "Figma Expert",
  ],
  authors: [{ name: "BladeZ", url: "https://bladezdoesstuff.vercel.app/" }],
  creator: "BladeZ",
  publisher: "BladeZ",
  metadataBase: new URL("https://bladezdoesstuff.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bladezdoesstuff.vercel.app/",
    title: "BladeZ | Professional Developer and Design Specialist",
    description:
      "Pakistan based Product Designer and Developer with 3+ years of experience creating digital products across fintech, mobility, and consumer apps. Specialized in user-centered design, design systems, and front-end development.",
    siteName: "BladeZ Does Stuff",
    images: [
      {
        url: "/trail-images/img1.jpg",
        width: 1200,
        height: 630,
        alt: "BladeZ | Web Developer and Design Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BladeZ | Web Developer and Design Specialist",
    description:
      "Pakistan based Product Designer and Developer with 3+ years of experience creating digital products across fintech, mobility, and consumer apps. Specialized in user-centered design, design systems, and front-end development.",
    creator: "@BladeZ",
    images: ["/trail-images/img1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1a1a1a" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Design",
  classification: "Business",
  referrer: "origin-when-cross-origin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={fontVariables}>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
