import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Form from "./Form";

export default function ContactPage() {
  const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <div
      id="contactpage"
      className="h-screen max-h-screen snap-center snap-always text-white bg-gray-900"
    >
      <div className="flex flex-row w-full h-full gap-10 items-center justify-center p-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl tracking-wide mb-10 whitespace-nowrap">
            Let&apos;s Talk!
          </h1>
          <p className="text-lg mb-6">
            Have a question or want to collaborate? Feel free to reach out to
            me.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
