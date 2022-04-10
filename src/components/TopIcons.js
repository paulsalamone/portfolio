import {
  AiFillTwitterCircle as Twitter,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
} from "react-icons/ai";

export default function TopIcons() {
  return (
    <>
      <div
        class="flex flex-row justify-around w-[80px] ] text-2xl text-stone-500 mr-8
	 
	  "
      >
        <a href="https://www.linkedin.com/in/paul-m-salamone/">
          <LinkedIn class="hover:text-white mx-2 " />
        </a>
        <a href="https://github.com/paulsalamone">
          <GitHub class="hover:text-white  mx-2" />
        </a>
        <a href="https://twitter.com/paulsaladev">
          <Twitter class="hover:text-white  mx-2" />
        </a>
      </div>
    </>
  );
}
