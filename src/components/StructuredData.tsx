'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vendmat",
    "url": "https://vendmat.com",
    "logo": "https://vendmat.com/vendmat_logo/11.png",
    "description": "Revolutionary hot food vending machines with multiple restaurant partnerships per machine.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9403891737",
      "contactType": "Customer Service",
      "email": "contact@vendmat.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/90650036",
      "https://www.instagram.com/vendmat/"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hot Food Vending Machine Services",
    "description": "Revolutionary hot food vending machines with multiple restaurant partnerships per machine.",
    "provider": {
      "@type": "Organization",
      "name": "Vendmat"
    },
    "serviceType": "Food Court in a Vending Machine",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vendmat Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Office Food Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Institution Food Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transit Hub Food Solutions"
          }
        }
      ]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vendmat Hot Food Vending Machine",
    "description": "Smart vending machine that maintains food at 60°C, partners with 4 restaurants per machine, and replenishes fresh meals 4 times daily.",
    "brand": {
      "@type": "Brand",
      "name": "Vendmat"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Vendmat"
    },
    "category": "Food Service Equipment",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Temperature Control",
        "value": "60°C"
      },
      {
        "@type": "PropertyValue",
        "name": "Restaurant Partnerships",
        "value": "4 restaurants per machine"
      },
      {
        "@type": "PropertyValue",
        "name": "Replenishment Frequency",
        "value": "4 times daily"
      },
      {
        "@type": "PropertyValue",
        "name": "Food Rotation",
        "value": "3.5 hours maximum"
      },
      {
        "@type": "PropertyValue",
        "name": "Pre-order Window",
        "value": "Up to 2 hours in advance"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vendmat.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://vendmat.com/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Technology",
        "item": "https://vendmat.com/technology"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Menu",
        "item": "https://vendmat.com/menu"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Blog",
        "item": "https://vendmat.com/blog"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}