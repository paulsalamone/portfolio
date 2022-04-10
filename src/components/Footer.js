const Footer = () => {
  return (
    <>
      {/* <footer className="
      // bg-stone-900 border-t-[1px] border-yellow-300 
      text-white p-5"> */}
      <footer className="text-white p-5 text-center">
        <p class="mb-2">
          ©2022 Paul Salamone Development & Design <br />
          Tech Stack: React.js, TailwindCSS
        </p>
        <br />
        <p class="text-xs">
          Microphone photo by{" "}
          <a href="https://unsplash.com/@bogomi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Bogomil Mihaylov
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/comedy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
