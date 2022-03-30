const TopNav = () => {
  return (
    <>
      <header className="fixed top z-50 shadow-lg w-full border-b-[1px] border-yellow-300">
        <nav className="bg-stone-900 flex justify-between items-center cursor-pointer transition-all">
          <div className="bg-yellow-300 p-3">
            <h1 class="text-2xl font-heading font-black h-full border-b-2 border-yellow-300 hover:border-stone-900">
              P
              <span class="font-sans" style={{ fontSize: "1.7rem" }}>
                S
              </span>
            </h1>
          </div>
          <div className="bg-gray-900 flex font-bold ">
            <div class="border-l-2 border-gray-900 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 
				hover:text-yellow-300
				transition-all "
              >
                Home
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
              >
                Web Dev
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
              >
                Design
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
              >
                Skills
              </a>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <a
                href="#"
                class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
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
