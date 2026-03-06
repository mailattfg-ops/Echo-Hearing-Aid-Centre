import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Echo Hearing Aid Centre - Expert Hearing Care in Kakkanad & Aluva",
        template: "%s | Echo Hearing Aid Centre"
    },
    description: "Echo Hearing Aid Centre offers expert hearing assessments, premium hearing aids, and personalized audiology solutions in Kakkanad and Aluva. Rediscover the joy of hearing with our certified experts.",
    keywords: ["hearing aid centre", "audiology", "hearing test", "Kakkanad", "Aluva", "hearing aids Kerala", "invisible hearing aids", "rechargeable hearing aids"],
    authors: [{ name: "Echo Hearing Aid Centre" }],
    creator: "Echo Hearing Aid Centre",
    publisher: "Echo Hearing Aid Centre",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://echohearing.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Echo Hearing Aid Centre - Where every sound matters",
        description: "Expert hearing care and advanced audiology solutions in Kakkanad & Aluva.",
        url: 'https://echohearing.com',
        siteName: 'Echo Hearing Aid Centre',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Echo Hearing Aid Centre - Expert Hearing Care",
        description: "Advanced audiology solutions and premium hearing aids in Kochi.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Echo Hearing Aid Centre",
        "image": "https://echohearing.com/Images/Navbar.png",
        "@id": "https://echohearing.com",
        "url": "https://echohearing.com",
        "telephone": "+919061135961",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "Kakkanad",
                "addressLocality": "Kochi",
                "addressRegion": "Kerala",
                "postalCode": "682030",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Aluva",
                "addressLocality": "Kochi",
                "addressRegion": "Kerala",
                "postalCode": "683101",
                "addressCountry": "IN"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.0261,
            "longitude": 76.3125
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:30",
            "closes": "18:30"
        },
        "sameAs": [
            "https://www.facebook.com/echohearing",
            "https://www.instagram.com/echohearing"
        ]
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
