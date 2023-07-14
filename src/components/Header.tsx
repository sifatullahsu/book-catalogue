const Header = () => {
  const menu = () => {
    return (
      <>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>All Books</a>
        </li>
        <li>
          <a>SignIn</a>
        </li>
        <li>
          <a>SignUp</a>
        </li>
      </>
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu()}
              </ul>
            </div>
            <a className="normal-case text-lg font-medium">BookCatalogue</a>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal hidden lg:flex">{menu()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
