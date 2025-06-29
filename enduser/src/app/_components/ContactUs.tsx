"use client";
import React from "react";
import TextMask from "@/components/animate/TextMask";
import { FormContact } from "@/components/form";

const contactDetails = {
  title: "Contact Me",
  description: "I'm available for questions, feedback, or collaboration opportunities. Let me know how I can help!",
  phone: "(089) 532 098 7471",
  email: "kusuma.nayr@gmail.com",
  web: { label: "kusumanayr.vercel.app", url: "https://kusumanayr.vercel.app" },
}

const Contact2 = () => {
  const { title, description, phone, email, web } = contactDetails;

  const listContactDetails = [
    <li key={phone}>
      <span className="font-semibold">Phone: </span>
      {phone}
    </li>,
    <li key={email}>
      <span className="font-semibold">Email: </span>
      <a href={`mailto:${email}`} className="underline">
        {email}
      </a>
    </li>,
    <li key={web.label}>
      <span className="font-semibold">Web: </span>
      <a href={web.url} target="_blank" className="underline">
        {web.label}
      </a>
    </li>
  ]

  return (
    <section className="py-16 md:py-32 px-5 md:px-10 scroll-mt-20" id="contact-us">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left space-y-6">
              <TextMask phrases={[title]} className="text-3xl font-semibold lg:text-5xl uppercase" tag="h2" />
              <TextMask phrases={[description]} className="text-muted-foreground/70 text-sm md:text-lg" tag="p" />
            </div>
            <div className="mx-auto w-fit lg:mx-0 space-y-5 pb-10">
              <TextMask phrases={["Contact Details"]} className="text-center text-2xl font-semibold lg:text-left" tag="h3" />
              <div className="ml-4 text-sm md:text-base list-disc text-black/80 space-y-1">
                <TextMask phrases={listContactDetails} tag="div" />
              </div>
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export { Contact2 };
