import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://biniyam.withunion.net"),
  title: {
    default: "Biniyam Samuel Yaya | Computer Engineer & Full-Stack Developer",
    template: "%s | Biniyam Samuel Yaya",
  },
  description:
    "Biniyam Samuel Yaya is a computer engineering student and full-stack developer with interests spanning software, PCB design, embedded systems, robotics, and IoT.",
  applicationName: "Biniyam Samuel Yaya Engineering Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Biniyam Samuel Yaya Engineering Portfolio",
    locale: "en_US",
    title: "Biniyam Samuel Yaya | Computer Engineer & Full-Stack Developer",
    description:
      "A balanced exploration of software and hardware engineering, including embedded systems, PCB design, robotics, and IoT.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Biniyam Samuel Yaya — Computer Engineer and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biniyam Samuel Yaya | Computer Engineer & Full-Stack Developer",
    description:
      "A balanced exploration of software and hardware engineering, including embedded systems, PCB design, robotics, and IoT.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
