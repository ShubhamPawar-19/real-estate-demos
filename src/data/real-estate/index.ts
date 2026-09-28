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

        listings: [],

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
        slug: "sairaj-agency",

        business: {
            name: "Sairaj Real Estate",
            tagline: "Residential & Commercial Property Solutions in Pune",
            description:
                "Sairaj Real Estate helps buyers, sellers, tenants, and property owners explore residential and commercial real estate opportunities across Pune.",
            phone: "+91 98227 87870",
            whatsapp: "919822787870",
            email: "rahul787870@yahoo.co.in",
            address:
                "Shop No. 4, Pushkar-2, Paud Road, Opp. Maharaja Complex, Bhusari Colony, Kothrud, Pune, Maharashtra 411038",
        },

        hero: {
            title: "Find the Right Property in Pune",
            subtitle:
                "Explore residential and commercial properties for sale, rent, and lease with local property guidance.",
            image: "/demos/sairaj-agency/hero.jpg",
        },

        stats: [
            {
                value: "Pune",
                label: "Local Market",
            },
            {
                value: "Buy",
                label: "Sell & Purchase",
            },
            {
                value: "Rent",
                label: "Rental & Leasing",
            },
        ],

        listings: [
            {
                id: "sairaj-1",
                category: "rent",
                title: "2 BHK Modern Apartment",
                location: "Kothrud, Pune",
                price: "₹32,000 / month",
                type: "Apartment",
                beds: 2,
                baths: 2,
                area: "1,050 sq.ft",
                description:
                    "A comfortable 2 BHK apartment suitable for families looking for a well-connected location in Kothrud.",
                features: [
                    "2 Bedrooms",
                    "2 Bathrooms",
                    "1,050 sq.ft",
                    "Residential Apartment",
                ],
                images: [
                    "/demos/sairaj-agency/property-1.jpg",
                ],
                featured: true,
            },

            {
                id: "sairaj-2",
                category: "sale",
                title: "3 BHK Family Apartment",
                location: "Bhusari Colony, Pune",
                price: "₹1.35 Cr",
                type: "Apartment",
                beds: 3,
                baths: 3,
                area: "1,450 sq.ft",
                description:
                    "A spacious 3 BHK family apartment in Bhusari Colony with generous living areas and a convenient Pune location.",
                features: [
                    "3 Bedrooms",
                    "3 Bathrooms",
                    "1,450 sq.ft",
                    "Residential Apartment",
                ],
                images: [
                    "/demos/sairaj-agency/property-2.jpg",
                ],
            },

            {
                id: "sairaj-3",
                category: "commercial",
                title: "Premium Commercial Office",
                location: "Kothrud, Pune",
                price: "₹65,000 / month",
                type: "Commercial Office",
                area: "1,200 sq.ft",
                description:
                    "A commercial office space suitable for businesses looking for a professional workspace in Kothrud.",
                features: [
                    "1,200 sq.ft",
                    "Commercial Office",
                    "Kothrud Location",
                    "Suitable for Business Use",
                ],
                images: [
                    "/demos/sairaj-agency/property-3.jpg",
                ],
            },

            {
                id: "sairaj-4",
                category: "sale",
                title: "3 BHK Spacious Residence",
                location: "Karve Nagar, Pune",
                price: "₹1.55 Cr",
                type: "Residential Apartment",
                beds: 3,
                baths: 3,
                area: "1,650 sq.ft",
                description:
                    "A spacious 3 BHK residence in Karve Nagar offering generous living space for families.",
                features: [
                    "3 Bedrooms",
                    "3 Bathrooms",
                    "1,650 sq.ft",
                    "Residential Apartment",
                ],
                images: [
                    "/demos/sairaj-agency/property-4.jpg",
                ],
            },
        ],

        about: {
            title: "Local Property Guidance. Straightforward Service.",
            description:
                "Whether you are looking to buy, sell, rent, or lease, our approach is focused on understanding your requirements and helping you explore suitable property opportunities across Pune.",
            image: "/demos/sairaj-agency/about.jpg",
        },

        services: [
            {
                title: "Buy Property",
                description:
                    "Explore residential and commercial properties based on your location, budget, and requirements.",
            },
            {
                title: "Sell Property",
                description:
                    "Discuss your property requirements and connect with potential buyers in the Pune market.",
            },
            {
                title: "Rent & Lease",
                description:
                    "Find residential rentals and commercial spaces suited to your preferred location and budget.",
            },
        ],
    },
    {
    slug: "multi-bhk",

    business: {
        name: "MultiBhk",
        tagline: "Real Estate Consultant in Kalyani Nagar, Pune",
        description:
            "MultiBhk is a real estate consultancy based in Kalyani Nagar, Pune, providing local property guidance for buyers, sellers, and investors.",
        phone: "098220 10548",
        whatsapp: "919822010548",
        address:
            "MultiBhk",
    },

    hero: {
        title: "Real Estate Consultant in Kalyani Nagar, Pune",
        subtitle:
            "Local real estate guidance for buyers, sellers, and investors looking for property opportunities across Pune.",
        image: "/demos/multi-bhk/hero.jpg",
    },

    stats: [
        {
            value: "5.0★",
            label: "Google Rating",
        },
        {
            value: "799+",
            label: "Google Reviews",
        },
        {
            value: "Pune",
            label: "Local Market",
        },
    ],

    listings: [
        {
            id: "multi-bhk-1",
            category: "rent",
            title: "2 BHK Modern Apartment",
            location: "Kothrud, Pune",
            price: "₹32,000 / month",
            type: "Apartment",
            beds: 2,
            baths: 2,
            area: "1,050 sq.ft",
            description:
                "A comfortable 2 BHK apartment suitable for families looking for a well-connected location in Kothrud.",
            features: [
                "2 Bedrooms",
                "2 Bathrooms",
                "1,050 sq.ft",
                "Residential Apartment",
            ],
            images: [
                "/demos/multi-bhk/property-1.jpg",
            ],
            featured: true,
        },

        {
            id: "multi-bhk-2",
            category: "sale",
            title: "3 BHK Family Apartment",
            location: "Bhusari Colony, Pune",
            price: "₹1.35 Cr",
            type: "Apartment",
            beds: 3,
            baths: 3,
            area: "1,450 sq.ft",
            description:
                "A spacious 3 BHK family apartment in Bhusari Colony with generous living areas and a convenient Pune location.",
            features: [
                "3 Bedrooms",
                "3 Bathrooms",
                "1,450 sq.ft",
                "Residential Apartment",
            ],
            images: [
                "/demos/multi-bhk/property-2.jpg",
            ],
        },

        {
            id: "multi-bhk-3",
            category: "commercial",
            title: "Premium Commercial Office",
            location: "Kothrud, Pune",
            price: "₹65,000 / month",
            type: "Commercial Office",
            area: "1,200 sq.ft",
            description:
                "A commercial office space suitable for businesses looking for a professional workspace in Kothrud.",
            features: [
                "1,200 sq.ft",
                "Commercial Office",
                "Kothrud Location",
                "Suitable for Business Use",
            ],
            images: [
                "/demos/multi-bhk/property-3.jpg",
            ],
        },

        {
            id: "multi-bhk-4",
            category: "sale",
            title: "3 BHK Spacious Residence",
            location: "Karve Nagar, Pune",
            price: "₹1.55 Cr",
            type: "Residential Apartment",
            beds: 3,
            baths: 3,
            area: "1,650 sq.ft",
            description:
                "A spacious 3 BHK residence in Karve Nagar offering generous living space for families.",
            features: [
                "3 Bedrooms",
                "3 Bathrooms",
                "1,650 sq.ft",
                "Residential Apartment",
            ],
            images: [
                "/demos/multi-bhk/property-4.jpg",
            ],
        },
    ],

    about: {
        title: "Local Real Estate Expertise in Pune.",
        description:
            "MultiBhk provides local real estate guidance for buyers, sellers, and investors. Visit the office in Kalyani Nagar to discuss your property requirements and explore suitable opportunities.",
        image: "/demos/multi-bhk/about.jpg",
    },

    services: [
        {
            title: "Buy Property",
            description:
                "Discuss your requirements and explore residential and commercial property opportunities across Pune.",
        },
        {
            title: "Sell Property",
            description:
                "Get local guidance when looking to sell your property in the Pune market.",
        },
        {
            title: "Property Investment",
            description:
                "Discuss property opportunities and investment requirements with a local real estate consultant.",
        },
    ],
},
];