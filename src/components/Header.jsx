import Nav from "./src/Nav";

const Header = () => {
  return (
    <header className="w-full h-screen relative bg-cover bg-center bg-[url('./desktop/image-header.jpg')]">
      <Nav />
      <div className="flex flex-col items-center pt-44">
        <h1 className="uppercase font-fraunces font-extrabold text-neutral-white text-3xl text-center tracking-[8px] lg:text-6xl lg:tracking-[12px]">We are creatives</h1>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 -translate-y-1/2 mt-6">
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
