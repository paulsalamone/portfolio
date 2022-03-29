const WebDev = () => {
  return (
    <section>
      <div class="flex flex-column justify-center ">
        {/* TITLE BAR */}
        <div class="flex flex-row w-full items-center mx-7">
          <div class="flex flex-row border-t-2 border-dotted w-2/5 border-white h-1"></div>
          <h1 class="text-white text-2xl text-center w-1/5">
            {" "}
            &nbsp; WEB DEV &nbsp;
          </h1>
          <div class="flex flex-row border-t-2 border-dotted w-2/5 border-white h1"></div>
        </div>
        {/* CONTENT */}
        <div class="grid grid-cols-2">
          <div class="bg-yellow-300">xxx</div>
          <div class="bg-yellow-300">xxx</div>
          <div class="bg-yellow-300">xxx</div>
          <div class="bg-yellow-300">xxx</div>
        </div>
      </div>
    </section>
  );
};

export default WebDev;
