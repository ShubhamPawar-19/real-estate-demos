import {
    ArrowUpRight,
    ChevronRight,
    MapPin,
    Phone,
} from "lucide-react";

import type { RealEstateDemo as RealEstateDemoData } from "@/data/real-estate/types";

import { LeadForm } from "./LeadForm";
import { PropertyGallery } from "./PropertyGallery";
import { PropertyListings } from "./PropertyListings";
import { WhatsAppButton } from "./WhatsAppButton";

type Props = {
    demo: RealEstateDemoData;
};

export function RealEstateDemo({ demo }: Props) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        demo.business.address
    )}`;

    const whatsappUrl = `https://wa.me/${demo.business.whatsapp}`;

    const hasListings =
        demo.listings && demo.listings.length > 0;

    const hasGallery =
        demo.gallery && demo.gallery.length > 0;

    return (
        <main
            id="top"
            className="min-h-screen bg-[#f7f6f2] text-[#181816]"
        >
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/95 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-350 items-center justify-between px-5 sm:px-8 lg:px-10">
                    <a href="#top" className="group">
                        <div className="font-serif text-xl tracking-[-0.03em] sm:text-2xl">
                            {demo.business.name}
                        </div>

                        <div className="mt-0.5 hidden max-w-md text-[10px] uppercase tracking-[0.22em] text-black/45 sm:block">
                            {demo.business.tagline}
                        </div>
                    </a>

                    <nav className="hidden items-center gap-8 text-sm text-black/65 md:flex">
                        {hasListings && (
                            <a
                                href="#properties"
                                className="transition hover:text-black"
                            >
                                Properties
                            </a>
                        )}

                        {hasGallery && (
                            <a
                                href="#gallery"
                                className="transition hover:text-black"
                            >
                                Gallery
                            </a>
                        )}

                        {demo.about && (
                            <a
                                href="#about"
                                className="transition hover:text-black"
                            >
                                About
                            </a>
                        )}

                        {demo.services &&
                            demo.services.length > 0 && (
                                <a
                                    href="#services"
                                    className="transition hover:text-black"
                                >
                                    Services
                                </a>
                            )}

                        <a
                            href="#contact"
                            className="transition hover:text-black"
                        >
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={`tel:${demo.business.phone}`}
                            className="hidden items-center gap-2 text-sm font-medium text-black/70 transition hover:text-black sm:flex"
                        >
                            <Phone className="h-3.5 w-3.5" />
                            {demo.business.phone}
                        </a>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-[#181816] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black/75"
                        >
                            Enquire
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="border-b border-black/10">
                <div className="mx-auto max-w-350 px-5 pb-8 pt-6 sm:px-8 lg:px-10 lg:pb-10 lg:pt-8">
                    <div className="relative overflow-hidden rounded-2xl">
                        <img
                            src={demo.hero.image}
                            alt={demo.hero.title}
                            className="h-130 w-full object-cover sm:h-150 lg:h-165"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                            <div className="max-w-5xl text-white">
                                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/75">
                                    {demo.business.address}
                                </p>

                                <h1 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                                    {demo.hero.title}
                                </h1>

                                <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                                    <p className="max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                                        {demo.hero.subtitle}
                                    </p>

                                    {hasListings ? (
                                        <a
                                            href="#properties"
                                            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-white/60 pb-2 text-sm font-medium text-white transition hover:border-white"
                                        >
                                            Explore properties

                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                    ) : hasGallery ? (
                                        <a
                                            href="#gallery"
                                            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-white/60 pb-2 text-sm font-medium text-white transition hover:border-white"
                                        >
                                            View gallery

                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction / Stats */}
            <section className="border-b border-black/10">
                <div className="mx-auto grid max-w-350 lg:grid-cols-[1.3fr_1fr]">
                    <div className="border-b border-black/10 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-24">
                        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
                            {demo.business.name}
                        </p>

                        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                            {demo.business.tagline}
                        </h2>

                        {demo.about && (
                            <a
                                href="#about"
                                className="group mt-9 inline-flex items-center gap-2 border-b border-black/30 pb-1.5 text-sm font-medium transition hover:border-black"
                            >
                                Discover more

                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        )}
                    </div>

                    {demo.stats && demo.stats.length > 0 && (
                        <div className="grid grid-cols-2 lg:grid-cols-1">
                            {demo.stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`px-5 py-10 sm:px-8 lg:px-10 lg:py-10 ${
                                        index !== 0
                                            ? "border-l border-black/10 lg:border-l-0 lg:border-t"
                                            : ""
                                    }`}
                                >
                                    <p className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                                        {stat.value}
                                    </p>

                                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-black/45">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Property Listings */}
            {hasListings && (
                <PropertyListings listings={demo.listings!} />
            )}

            {/* Gallery */}
            {hasGallery && (
                <section
                    id="gallery"
                    className="scroll-mt-20 border-b border-black/10"
                >
                    <div className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                        <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-8 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
                                    Gallery
                                </p>

                                <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                                    A closer look.
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-6 text-black/55">
                                Explore property spaces and imagery from the
                                business.
                            </p>
                        </div>

                        <PropertyGallery gallery={demo.gallery!} />
                    </div>
                </section>
            )}

            {/* About */}
            {demo.about && (
                <section
                    id="about"
                    className="scroll-mt-20 border-b border-black/10"
                >
                    <div className="mx-auto grid max-w-350 lg:grid-cols-[1fr_1fr]">
                        {demo.about.image && (
                            <div className="min-h-125 overflow-hidden lg:min-h-170">
                                <img
                                    src={demo.about.image}
                                    alt={demo.about.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}

                        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
                            <div className="max-w-xl">
                                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
                                    About {demo.business.name}
                                </p>

                                <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                                    {demo.about.title}
                                </h2>

                                <p className="mt-8 text-base leading-8 text-black/60 sm:text-lg">
                                    {demo.about.description}
                                </p>

                                <div className="mt-10 flex items-start gap-3 border-t border-black/15 pt-6">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-black/50" />

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                                            Visit us
                                        </p>

                                        <a
                                            href={mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 block text-sm text-black/70 underline-offset-4 hover:underline"
                                        >
                                            {demo.business.address}
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#181816] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-black/75"
                                >
                                    WhatsApp us

                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Services */}
            {demo.services && demo.services.length > 0 && (
                <section
                    id="services"
                    className="scroll-mt-20 border-b border-black/10"
                >
                    <div className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
                                    Services
                                </p>

                                <h2 className="mt-5 max-w-md font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                                    How we help
                                </h2>
                            </div>

                            <div className="border-t border-black/15">
                                {demo.services.map((service, index) => (
                                    <div
                                        key={service.title}
                                        className="grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[70px_1fr] sm:gap-8"
                                    >
                                        <span className="text-xs text-black/35">
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-10">
                                            <h3 className="font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                                                {service.title}
                                            </h3>

                                            <p className="max-w-md text-sm leading-6 text-black/55">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Contact */}
            <section
                id="contact"
                className="scroll-mt-20 border-b border-black/10 bg-[#eae8e1]"
            >
                <div className="mx-auto grid max-w-350 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/45">
                            Enquiry
                        </p>

                        <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
                            Tell us what you need.
                        </h2>

                        <p className="mt-7 max-w-md text-base leading-7 text-black/55">
                            Share your property requirement directly with{" "}
                            {demo.business.name}.
                        </p>

                        <div className="mt-10 space-y-5 border-t border-black/15 pt-7">
                            <a
                                href={`tel:${demo.business.phone}`}
                                className="flex items-center gap-3 text-sm text-black/70 transition hover:text-black"
                            >
                                <Phone className="h-4 w-4" />
                                {demo.business.phone}
                            </a>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm font-medium text-black/70 transition hover:text-black"
                            >
                                <ArrowUpRight className="h-4 w-4" />
                                Continue on WhatsApp
                            </a>

                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 text-sm text-black/70 transition hover:text-black"
                            >
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                                <span className="underline-offset-4 hover:underline">
                                    {demo.business.address}
                                </span>
                            </a>
                        </div>
                    </div>

                    <LeadForm
                        whatsapp={demo.business.whatsapp}
                        businessName={demo.business.name}
                    />
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-[#181816] text-white">
                <div className="mx-auto flex max-w-350 flex-col justify-between gap-10 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:px-10 lg:py-20">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                            {demo.business.name}
                        </p>

                        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                            Start a conversation about your property needs.
                        </h2>
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm font-medium transition hover:border-white"
                    >
                        WhatsApp us

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#181816] text-white/45">
                <div className="mx-auto max-w-350 px-5 py-10 sm:px-8 lg:px-10">
                    <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <span className="font-serif text-xl text-white/90">
                                {demo.business.name}
                            </span>

                            <p className="mt-2 max-w-sm text-xs leading-6 text-white/40">
                                {demo.business.tagline}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-white"
                        >
                            {demo.business.address}
                        </a>

                        <a
                            href={`tel:${demo.business.phone}`}
                            className="transition hover:text-white"
                        >
                            {demo.business.phone}
                        </a>
                    </div>
                </div>
            </footer>

            <WhatsAppButton whatsapp={demo.business.whatsapp} />
        </main>
    );
}