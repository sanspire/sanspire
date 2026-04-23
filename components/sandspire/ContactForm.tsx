"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  const field =
    "h-[52px] w-full rounded-[22px] border border-transparent bg-[rgba(119,119,119,0.14)] px-6 text-[12px] font-medium text-[#e6ddd0] placeholder:text-[#777777] outline-none transition-[border-color,background-color,box-shadow] duration-200 focus:border-white/25 focus:bg-[rgba(119,119,119,0.2)] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">First Name</span>
          <input name="firstName" placeholder="First Name" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">Last Name</span>
          <input name="lastName" placeholder="Last Name" className={field} />
        </label>
      </div>

      <div className="flex flex-col gap-7">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">Email</span>
          <input
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className={field}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">Message</span>
          <textarea
            name="message"
            placeholder="Type your message here"
            rows={5}
            className={`min-h-[121px] resize-none py-[19px] ${field}`}
          />
        </label>

        <button
          type="submit"
          className="flex h-[52px] w-full items-center justify-center rounded-[22px] bg-[#ff5e00] text-[12px] font-semibold tracking-[-0.02em] text-[#faf3e8] shadow-[0_6px_24px_rgba(255,94,0,0.35)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_32px_rgba(255,94,0,0.45)] active:translate-y-0 active:scale-[0.99] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:brightness-100"
          disabled={status === "submitted"}
        >
          Submit
        </button>
      </div>

      {status === "submitted" ? (
        <p className="pt-1 text-center text-sm text-[#e6ddd0]/80">Thanks! Your message is ready to send.</p>
      ) : null}
    </form>
  );
}
