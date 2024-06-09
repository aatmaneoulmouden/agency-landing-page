const Nav = () => {
  return (
    <div className="container">
      <div className="nav flex justify-between items-center py-8">
        <a href="" className="logo">
          <img src="./logo.svg" alt="Sunnyside" />
        </a>
        <ul className="nav-list flex gap-11">
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
            <a href="" className="font-fraunces py-4 px-8 bg-neutral-white rounded-full border-primary-light-blue border-1 uppercase">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
