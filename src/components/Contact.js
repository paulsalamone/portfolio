import { useState } from "react";

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
        <section
          id="contact"
          className="flex flex-col items-center mt-8  mb-20 bg-yellow-300 w-[60%] p-10"
        >
          <h2 class="text-3xl text-black font-heading font-light">
            Thanks for the message!{" "}
          </h2>

          <br />
          <h3 class="text-xl text-black font-heading font-light">
            I'll get back to you ASAP. 🥨🥨🥨
          </h3>
        </section>
      </>
    );
  }
  return (
    <>
      <section id="contact" className="flex flex-col items-center mt-8 w-full">
        <div className="flex flex-row items-center w-[90%] max-w-6xl align-middle ">
          <div className="border-b-2 border-dotted w-2/5"></div>
          <h2 className="text-white text-3xl text-center tracking-widest font-medium mt-5 mb-4 mx-3 w-1/5">
            CONTACT
          </h2>
          <div className="border-b-2 border-dotted w-2/5"></div>
        </div>
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
