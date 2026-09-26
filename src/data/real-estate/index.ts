import type { RealEstateDemo } from "./types";

export const realEstateDemos: RealEstateDemo[] = [
  {
  slug: "property-market-india",

  business: {
    name: "Property Market India",
    tagline: "Best Real Estate Consultants Property Brokers in Pune",
    description:
      "Property Market India is a real estate consultancy and property brokerage based in Pune.",
    phone: "077678 88881",
    whatsapp: "917767888881",
    address:
      "Property Market India - Best Real Estate Consultants Property Brokers in Pune",
  },

  hero: {
    title: "Real Estate Consultants & Property Brokers in Pune",
    subtitle:
      "Property Market India — helping you explore property opportunities across Pune.",
    image: "/demos/property-market-india/exterior-2.jpg",
  },

  stats: [
    { value: "5.0★", label: "Google Rating" },
    { value: "135", label: "Google Reviews" },
  ],

  properties: [],

  gallery: [
    {
      image: "/demos/property-market-india/exterior-1.jpg",
      label: "Exterior",
    },
    {
      image: "/demos/property-market-india/interior-1.jpg",
      label: "Interior",
    },
    {
      image: "/demos/property-market-india/interior-2.jpg",
      label: "Interior",
    },
    {
      image: "/demos/property-market-india/exterior-2.jpg",
      label: "Exterior",
    },
  ],

  about: {
    title: "A simpler way to navigate property in Pune.",
    description:
      "Property Market India brings property consultation and brokerage services together in one place, helping buyers and property seekers explore opportunities across Pune.",
    image: "/demos/property-market-india/interior-2.jpg",
  },

  services: [
    {
      title: "Property Consultation",
      description:
        "Get guidance when exploring property opportunities and making your next move.",
    },
    {
      title: "Residential Properties",
      description:
        "Explore residential spaces suited to different requirements, preferences, and budgets.",
    },
    {
      title: "Property Brokerage",
      description:
        "Connect with a property consultant to discuss your requirements and available opportunities.",
    },
  ],
},
    {
        slug: "sharma-properties",

        business: {
            name: "Sharma Properties",
            tagline: "Trusted property solutions across Pune.",
            description:
                "Helping buyers, sellers, and investors find the right residential and commercial properties across Pune.",
            phone: "+91 91234 56789",
            whatsapp: "919123456789",
            email: "hello@sharmaproperties.com",
            address: "Wakad, Pune",
        },

        hero: {
            title: "Properties That Fit Your Plans",
            subtitle:
                "Explore residential and commercial properties selected for your needs and budget.",
            image: "/demos/sharma-properties/hero.jpg",
        },

        stats: [
            {
                value: "8+",
                label: "Years Experience",
            },
            {
                value: "300+",
                label: "Happy Clients",
            },
            {
                value: "4.8★",
                label: "Client Rating",
            },
        ],

        properties: [
            {
                title: "3 BHK Premium Apartment",
                location: "Wakad, Pune",
                price: "₹1.15 Cr",
                type: "Apartment",
                beds: 3,
                baths: 3,
                area: "1,420 sq.ft",
                image: "/demos/sharma-properties/property-1.jpg",
                featured: true,
            },
            {
                title: "2 BHK Modern Apartment",
                location: "Hinjewadi, Pune",
                price: "₹78 Lakh",
                type: "Apartment",
                beds: 2,
                baths: 2,
                area: "1,020 sq.ft",
                image: "/demos/sharma-properties/property-2.jpg",
            },
            {
                title: "4 BHK Independent Villa",
                location: "Baner, Pune",
                price: "₹2.35 Cr",
                type: "Villa",
                beds: 4,
                baths: 4,
                area: "2,600 sq.ft",
                image: "/demos/sharma-properties/property-3.jpg",
            },
            {
                title: "Commercial Office",
                location: "Balewadi, Pune",
                price: "₹1.25 Cr",
                type: "Commercial",
                area: "1,500 sq.ft",
                image: "/demos/sharma-properties/property-4.jpg",
            },
        ],

        about: {
            title: "Local Knowledge. Personal Service.",
            description:
                "We help clients make confident property decisions with local market knowledge and personalized guidance.",
            image: "/demos/sharma-properties/about.jpg",
        },

        services: [
            {
                title: "Buy Property",
                description:
                    "Discover residential and commercial properties that match your requirements.",
            },
            {
                title: "Sell Property",
                description:
                    "Connect your property with interested buyers and investors.",
            },
            {
                title: "Investment Advisory",
                description:
                    "Explore property opportunities based on your investment goals.",
            },
        ],
    },

    {
        slug: "abc-realty",

        business: {
            name: "ABC Realty",
            tagline: "Find a place you'll love to call home.",
            description:
                "Helping families find residential and investment properties across Pune.",
            phone: "+91 98765 43210",
            whatsapp: "919876543210",
            email: "hello@abcrealty.com",
            address: "Baner, Pune",
        },

        hero: {
            title: "Find Your Next Home in Pune",
            subtitle:
                "Explore carefully selected residential and investment properties.",
            image: "/demos/abc-realty/hero.jpg",
        },

        stats: [
            {
                value: "10+",
                label: "Years Experience",
            },
            {
                value: "500+",
                label: "Properties Sold",
            },
            {
                value: "4.9★",
                label: "Client Rating",
            },
        ],

        properties: [
            {
                title: "3 BHK Premium Apartment",
                location: "Baner, Pune",
                price: "₹1.25 Cr",
                type: "Apartment",
                beds: 3,
                baths: 3,
                area: "1,450 sq.ft",
                image: "/demos/abc-realty/property-1.jpg",
                featured: true,
            },
            {
                title: "2 BHK Modern Apartment",
                location: "Wakad, Pune",
                price: "₹82 Lakh",
                type: "Apartment",
                beds: 2,
                baths: 2,
                area: "1,050 sq.ft",
                image: "/demos/abc-realty/property-2.jpg",
            },
            {
                title: "3 BHK Luxury Villa",
                location: "Kothrud, Pune",
                price: "₹2.1 Cr",
                type: "Villa",
                beds: 3,
                baths: 4,
                area: "2,400 sq.ft",
                image: "/demos/abc-realty/property-3.jpg",
            },

            {
                title: "2 BHK Family Home",
                location: "Aundh, Pune",
                price: "₹95 Lakh",
                type: "Apartment",
                beds: 2,
                baths: 2,
                area: "1,180 sq.ft",
                image: "/demos/abc-realty/property-4.jpg",
            },

            {
                title: "4 BHK Premium Residence",
                location: "Balewadi, Pune",
                price: "₹1.85 Cr",
                type: "Apartment",
                beds: 4,
                baths: 4,
                area: "2,100 sq.ft",
                image: "/demos/abc-realty/property-5.jpg",
            },

            {
                title: "Commercial Office Space",
                location: "Baner, Pune",
                price: "₹1.4 Cr",
                type: "Commercial",
                area: "1,650 sq.ft",
                image: "/demos/abc-realty/property-6.jpg",
            },
        ],

        about: {
            title: "Local Expertise. Better Properties.",
            description:
                "We help buyers and investors discover properties that match their requirements and budget.",
            image: "/demos/abc-realty/about.jpg",
        },

        services: [
            {
                title: "Buy Property",
                description:
                    "Find residential properties matching your requirements.",
            },
            {
                title: "Sell Property",
                description:
                    "Connect your property with serious buyers.",
            },
            {
                title: "Property Investment",
                description:
                    "Explore opportunities for long-term real estate investment.",
            },
        ],
        social: {
            instagram: "https://instagram.com/abcrealty",
            facebook: "https://facebook.com/abcrealty",
            linkedin: "https://linkedin.com/company/abcrealty",
            x: "https://x.com/abcrealty",
        },
    },
];