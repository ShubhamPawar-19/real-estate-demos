"use client";

import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import type { Property } from "@/data/real-estate/types";

type Props = {
    properties: Property[];
    whatsapp: string;
};

const filters = ["All", "Apartment", "Villa", "Commercial"] as const;

export function PropertyGrid({ properties, whatsapp }: Props) {
    const [activeFilter, setActiveFilter] =
        useState<(typeof filters)[number]>("All");

    const filteredProperties = useMemo(() => {
        if (activeFilter === "All") {
            return properties;
        }

        return properties.filter(
            (property) => property.type === activeFilter
        );
    }, [activeFilter, properties]);

    return (
        <div className="mt-10">
            {/* Filter */}
            <div className="flex items-center gap-6 overflow-x-auto border-b border-black/10 pb-4">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`shrink-0 text-sm transition ${activeFilter === filter
                                ? "font-medium text-black"
                                : "text-black/40 hover:text-black"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Listings */}
            <div className="grid gap-x-7 gap-y-14 pt-10 md:grid-cols-2">
                {filteredProperties.map((property, index) => (
                    <article key={property.title} className="group">
                        <a
                            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                                `Hi, I'm interested in ${property.title} in ${property.location}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="relative overflow-hidden rounded-xl bg-black/5">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="aspect-4/3 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                                />

                                {property.featured && (
                                    <span className="absolute left-4 top-4 rounded-md bg-[#f7f6f2] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em]">
                                        Featured
                                    </span>
                                )}

                                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#181816] text-white opacity-0 transition duration-300 group-hover:opacity-100">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </div>

                            <div className="mt-5">
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.16em] text-black/40">
                                            {property.type} · {property.location}
                                        </p>

                                        <h3 className="mt-2 font-serif text-2xl tracking-[-0.02em]">
                                            {property.title}
                                        </h3>
                                    </div>

                                    <p className="shrink-0 text-sm font-medium">
                                        {property.price}
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-black/45">
                                    {property.beds && (
                                        <span>{property.beds} Bedrooms</span>
                                    )}

                                    {property.baths && (
                                        <span>{property.baths} Bathrooms</span>
                                    )}

                                    {property.area && <span>{property.area}</span>}
                                </div>
                            </div>
                        </a>

                        {index < filteredProperties.length - 1 && (
                            <div className="mt-10 border-b border-black/10 md:hidden" />
                        )}
                    </article>
                ))}
            </div>

            {filteredProperties.length === 0 && (
                <div className="py-20 text-center">
                    <p className="font-serif text-2xl">No properties found.</p>

                    <p className="mt-2 text-sm text-black/45">
                        Try another category.
                    </p>
                </div>
            )}
        </div>
    );
}
