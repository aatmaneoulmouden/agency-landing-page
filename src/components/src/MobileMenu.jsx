const MobileMenu = () => {
  return (
    <div className="mobile-menu fixed top-24 left-0 w-full z-20 px-6">
      <ul className="mobile-menu-list flex flex-col gap-10 items-center bg-neutral-white py-9 relative">
        <div className="triangle absolute w-5 h-5 -top-5 right-0 z-30 bg-triangle"></div>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li className="">
          <a
            href=""
            className="font-fraunces py-4 px-8 bg-primary-yellow rounded-full border-primary-light-blue border-1 uppercase hover:bg-neutral-white/30 font-semibold"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
