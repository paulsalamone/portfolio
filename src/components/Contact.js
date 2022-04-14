import { useState } from "react";
import SectionHead from "./SectionHead";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/d5583de0-b8ee-11ec-bf6a-51abb0925361";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div id="contact" className="h-16"></div>

        <section className="flex flex-col items-center mt-8  mb-20 bg-yellow-300 w-[60%] p-10">
          <h2 class="text-2xl text-black font-heading font-light">
            Message sent!
          </h2>
        </section>
      </>
    );
  }
  return (
    <>
      <div id="contact" className="h-16"></div>

      <section className="flex flex-col items-center mt-8 w-full">
        <SectionHead name="CONTACT" dots={true} />

        {/* CONTACT FORM */}
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          className="flex flex-col items-center w-full mb-10"
        >
          <input
            type="text"
            name="name"
            placeholder="your name"
            required
            className="border-2 border-yellow-300 bg-stone-800 p-4 m-3 text-white font-heading w-96"
          />
          <input
            type="text"
            name="email"
            placeholder="email address"
            required
            className="border-2 border-yellow-300 bg-stone-800 p-4 m-3 text-white font-heading w-96"
          />
          <textarea
            cols="30"
            rows="5"
            name="message"
            placeholder="write me a message!"
            required
            className="border-2 border-yellow-300 bg-stone-800 p-4 m-3 text-white font-heading w-96 "
          ></textarea>
          <button
            type="submit"
            className="border-2 border-yellow-600 bg-yellow-300 p-3 rounded-md  m-3 text-stone-800 font-bold font-heading w-48 text-lg hover:bg-yellow-200 bg:border-yellow-500
            hover:translate-x-[-1px] 
            hover:translate-y-[-1px] 
            active:translate-x-[1px] 
            active:translate-y-[1px] 
            transition-all
            cursor-pointer"
          >
            {" "}
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
