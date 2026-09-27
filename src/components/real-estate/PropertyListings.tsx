"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";

import type { Listing } from "@/data/real-estate/types";

type Props = {
    listings: Listing[];
};

const categories = [
    { value: "sale", label: "For Sale" },
    { value: "rent", label: "For Rent" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
] as const;

export function PropertyListings({ listings }: Props) {
    const [activeCategory, setActiveCategory] =
        useState<(typeof categories)[number]["value"]>("sale");

    const filteredListings = useMemo(
        () =>
            listings.filter(
                (listing) => listing.category === activeCategory
            ),
        [activeCategory, listings]
    );

    return (
        <section
            id="properties"
            className="scroll-mt-20 border-b border-black/10"
        >
            <div className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                {/* Section header */}
                <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-8 lg:flex-row lg:items-end">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
                            Properties
                        </p>

                        <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            Find a place that fits.
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-black/55">
                        Explore available properties and find an option that
                        matches your requirements.
                    </p>
                </div>

                {/* Category filters */}
                <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => {
                        const isActive =
                            activeCategory === category.value;

                        const count = listings.filter(
                            (listing) =>
                                listing.category === category.value
                        ).length;

                        return (
                            <button
                                key={category.value}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(category.value)
                                }
                                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition ${
                                    isActive
                                        ? "border-[#181816] bg-[#181816] text-white"
                                        : "border-black/15 bg-transparent text-black/60 hover:border-black/30 hover:text-black"
                                }`}
                            >
                                <span>{category.label}</span>

                                <span
                                    className={`text-[10px] ${
                                        isActive
                                            ? "text-white/60"
                                            : "text-black/35"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Property cards */}
                {filteredListings.length > 0 ? (
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {filteredListings.map((listing) => (
                            <article
                                key={listing.id}
                                className="group overflow-hidden border border-black/10 bg-white"
                            >
                                {/* Property image */}
                                <div className="relative overflow-hidden bg-black/5">
                                    <img
                                        src={listing.images[0]}
                                        alt={listing.title}
                                        className="aspect-[16/10] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                                    />

                                    {/* Category */}
                                    <div className="absolute left-4 top-4">
                                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-black/70 backdrop-blur">
                                            {listing.category === "sale"
                                                ? "For Sale"
                                                : listing.category === "rent"
                                                  ? "For Rent"
                                                  : listing.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Property information */}
                                <div className="p-6 sm:p-7">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="min-w-0">
                                            <h3 className="font-serif text-2xl tracking-[-0.025em] sm:text-3xl">
                                                {listing.title}
                                            </h3>

                                            <div className="mt-3 flex items-center gap-2 text-sm text-black/50">
                                                <MapPin className="h-3.5 w-3.5 shrink-0" />

                                                <span>
                                                    {listing.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="shrink-0 text-sm font-medium text-black/75">
                                            {listing.price}
                                        </p>
                                    </div>

                                    {/* Property metadata */}
                                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-y border-black/10 py-4 text-xs uppercase tracking-[0.12em] text-black/45">
                                        {listing.beds !== undefined && (
                                            <span>
                                                {listing.beds}{" "}
                                                {listing.beds === 1
                                                    ? "Bedroom"
                                                    : "Bedrooms"}
                                            </span>
                                        )}

                                        {listing.baths !== undefined && (
                                            <span>
                                                {listing.baths}{" "}
                                                {listing.baths === 1
                                                    ? "Bathroom"
                                                    : "Bathrooms"}
                                            </span>
                                        )}

                                        {listing.area && (
                                            <span>{listing.area}</span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    {listing.description && (
                                        <p className="mt-5 line-clamp-2 text-sm leading-6 text-black/55">
                                            {listing.description}
                                        </p>
                                    )}

                                    {/* CTA */}
                                    <a
                                        href="#contact"
                                        className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium"
                                    >
                                        Enquire about property

                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <div className="mt-10 border border-dashed border-black/15 px-6 py-16 text-center">
                        <p className="font-serif text-2xl">
                            More properties coming soon.
                        </p>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/50">
                            No properties are currently listed in this
                            category. Contact us to discuss your requirements.
                        </p>

                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                        >
                            Discuss your requirement

                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}