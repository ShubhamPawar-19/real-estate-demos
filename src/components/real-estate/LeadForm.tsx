"use client";

import { ArrowUpRight, Check, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

type Props = {
    whatsapp: string;
};

export function LeadForm({ whatsapp }: Props) {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const name = form.get("name");
        const phone = form.get("phone");
        const requirement = form.get("requirement");

        const message = encodeURIComponent(
            `Hi, I'm ${name}. My phone number is ${phone}. I'd like to discuss my property requirement: ${requirement}`
        );

        setSubmitted(true);

        window.open(
            `https://wa.me/${whatsapp}?text=${message}`,
            "_blank",
            "noopener,noreferrer"
        );
    }

    if (submitted) {
        return (
            <div className="border border-black/15 bg-[#f7f6f2] p-8 sm:p-10">
                <div className="flex h-10 w-10 items-center justify-center bg-[#181816] text-white">
                    <Check className="h-4 w-4" />
                </div>

                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                    Enquiry
                </p>

                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                    Enquiry prepared.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
                    Your enquiry has been prepared in WhatsApp. You can now
                    continue the conversation with Property Market India.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border border-black/15 bg-[#f7f6f2] p-6 sm:p-8 lg:p-10"
        >
            <div className="flex items-start justify-between gap-6 border-b border-black/15 pb-7">
                <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                        Property consultation
                    </p>

                    <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                        Tell us what you need.
                    </h3>
                </div>

                <Phone className="mt-1 hidden h-5 w-5 text-black/35 sm:block" />
            </div>

            <div className="mt-8 space-y-7">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-black/45"
                    >
                        Your name
                    </label>

                    <input
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-black/30 transition focus:border-black"
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-black/45"
                    >
                        Phone number
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-black/30 transition focus:border-black"
                    />
                </div>

                <div>
                    <label
                        htmlFor="requirement"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-black/45"
                    >
                        Your requirement
                    </label>

                    <textarea
                        id="requirement"
                        name="requirement"
                        required
                        rows={4}
                        placeholder="Tell us what kind of property you are looking for..."
                        className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm leading-6 text-black outline-none placeholder:text-black/30 transition focus:border-black"
                    />
                </div>

                <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-between bg-[#181816] px-5 py-4 text-sm font-medium text-white transition hover:bg-black/75"
                >
                    <span>Send enquiry on WhatsApp</span>

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
            </div>
        </form>
    );
}