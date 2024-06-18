import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleMenuToggler = () => {
    if (menuStatus === false) {
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
    }
  };

  const displayMobileMenu = menuStatus && <MobileMenu />;

  return (
    <nav className="absolute top-0 left-0 right-0">
      <div className="container">
        <div className="nav flex justify-between items-center py-8">
          <a href="" className="logo">
            <img src="./logo.svg" alt="Sunnyside" />
          </a>
          <button onClick={handleMenuToggler}>
            <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          {displayMobileMenu}
          <ul className="nav-list hidden gap-11 lg:flex">
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
                className="font-fraunces py-4 px-8 bg-neutral-white rounded-full border-primary-light-blue border-1 uppercase hover:bg-neutral-white/30"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
