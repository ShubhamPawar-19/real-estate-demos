export type Property = {
  title: string;
  location: string;
  price: string;
  type: string;
  beds?: number;
  baths?: number;
  area?: string;
  image: string;
  featured?: boolean;
};

export type Listing = {
  id: string;

  category: "sale" | "rent" | "residential" | "commercial";

  title: string;
  location: string;
  price: string;

  type: string;
  beds?: number;
  baths?: number;
  area?: string;

  description: string;

  features: string[];

  images: string[];

  featured?: boolean;
};

export type RealEstateDemo = {
    slug: string;

    business: {
        name: string;
        tagline: string;
        description: string;
        logo?: string;
        phone: string;
        whatsapp: string;
        email?: string;
        address: string;
    };

    hero: {
        title: string;
        subtitle: string;
        image: string;
    };

    stats?: {
        value: string;
        label: string;
    }[];

    listings: Listing[];

    gallery?: {
        image: string;
        label: string;
    }[];

    about?: {
        title: string;
        description: string;
        image?: string;
    };

    services?: {
        title: string;
        description: string;
    }[];

    social?: {
        instagram?: string;
        facebook?: string;
        linkedin?: string;
        x?: string;
    };
};