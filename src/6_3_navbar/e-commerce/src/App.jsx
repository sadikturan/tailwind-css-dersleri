function App() {
  return (
    //  Navbar
    <nav className="bg-white border-b-1 border-b-gray-300">
      <div className="max-w-screen-xl px-4 mx-auto py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div>
              <a href="#" className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" />
                </svg>
                <span>E-Commerce</span>
              </a>
            </div>
            <ul className="hidden lg:flex items-center justify-start gap-4 md:gap-6 py-3 sm:justify-center">
              <li>
                <a
                  href="#"
                  className="block text-sm font-medium text-gray-900 hover:text-red-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-sm font-medium text-gray-900 hover:text-red-500"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-sm font-medium text-gray-900 hover:text-red-500"
                >
                  Discounts
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              className="inline-flex lg:hidden"
              data-collapse-toggle="navbar-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#666666"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-menu"
          className="bg-gray-500 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
        >
          <ul className="text-gray-200 text-sm font-medium space-y-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">Discounts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
