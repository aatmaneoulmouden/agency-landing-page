const MobileMenu = (props) => {
  return (
    <div className="mobile-menu fixed top-20 left-0 w-full z-20 px-6">
      <ul className="mobile-menu-list flex flex-col gap-10 items-center bg-neutral-white py-9">
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
            className="font-fraunces py-4 px-8 bg-primary-yellow text-neutral-white rounded-full border-primary-light-blue border-1 uppercase hover:bg-neutral-white/30"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
