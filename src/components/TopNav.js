const TopNav = () => {
  return (
    <>
      <header>
        <nav className="bg-gray-900 flex w-f justify-between items-center cursor-pointer">
          <div className="bg-yellow-300 p-3">
            <h1 class="text-2xl font-heading font-black h-full border-b-2 border-yellow-300 hover:border-gray-900">
              P
              <span class="font-sans" style={{ fontSize: "1.7rem" }}>
                S
              </span>
            </h1>
          </div>
          <div className="bg-gray-900 flex font-bold ">
            <a
              href="#"
              class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-2 border-gray-900 hover:border-yellow-300"
            >
              Home
            </a>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide hover:border-solid hover:border-b-2 hover:border-yellow-300 "
              >
                Web Dev
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide hover:border-solid hover:border-b-2 hover:border-yellow-300"
              >
                Design
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide hover:border-solid hover:border-b-2 hover:border-yellow-300"
              >
                Skills
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide hover:border-solid hover:border-b-2 hover:border-yellow-300"
              >
                Contact
              </a>
            </div>
            <div class="text-white text-xs align-middle pt-3 px-4">
              ...icons
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TopNav;
