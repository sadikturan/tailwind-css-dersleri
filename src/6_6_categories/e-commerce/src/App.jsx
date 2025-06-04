function App() {
  return (
    <>
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
              <button className="flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
              </button>

              <button
                data-dropdown-toggle="userDropdown"
                className="flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
                <span className="hidden sm:flex">My Account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </button>

              <div
                id="userDropdown"
                className="hidden w-56 bg-white z-10 overflow-hidden overflow-y-auto rounded-lg shadow"
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900">
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100"
                    >
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>

              {/* mobile button */}
              <button
                className="inline-flex lg:hidden p-2 hover:bg-gray-100 text-sm font-medium text-gray-900"
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
            className="bg-gray-50 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
          >
            <ul className="text-gray-900 text-sm font-medium space-y-3">
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
      <header className="bg-white py-8 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 pb-4 lg:pb-10 grid grid-cols-1 md:grid-cols-12">
          <div className="content-center md:col-span-7">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
              Limited Time Offer! <br />
              Up to 50% OFF!
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
              Don't Wait - Limited Stock at Unbeatable Prices!
            </p>
          </div>
          <div className="md:col-span-5 hidden md:flex md:mt-0">
            <img src="/img/shopping-list.svg" alt="" />
          </div>
        </div>
      </header>
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="mb-4 flex items-center justify-end md:mb-8">
            <a
              href="#"
              className="flex items-center font-medium text-blue-700 hover:underline"
            >
              See more categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">
                Computers
              </span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">TV</span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-600q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">Phone</span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">Audio</span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">
                Printers
              </span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">Books</span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M280-160q-45 0-78.5-28.5T162-262q-38-20-60-57t-22-81q0-53 30.5-94.5T192-552l-72-72-12 12q-11 11-28 11t-28-11q-11-11-11-28t11-28l80-80q11-11 28-11t28 11q11 11 11 28t-11 28l-12 12 56 56 32-94q12-37 43.5-59.5T378-800h204q39 0 70.5 22.5T696-718l54 162q57 11 93.5 55T880-400q0 44-22 81t-60 57q-6 45-39.5 73.5T680-160q-38 0-68.5-22T568-240H392q-13 36-43.5 58T280-160Zm16-400h144v-160h-62q-13 0-23 7.5T340-692l-44 132Zm224 0h144l-44-132q-5-13-15-20.5t-23-7.5h-62v160ZM392-320h176q13-36 43.5-58t68.5-22q30 0 56 14t44 38q9-11 14.5-24.5T800-400q0-33-23.5-56.5T720-480H240q-33 0-56.5 23.5T160-400q0 14 5.5 27.5T180-348q18-24 44-38t56-14q38 0 68.5 22t43.5 58Zm-112 80q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240ZM480-400Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">Toys</span>
            </div>
            <div
              className="flex
             flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer border border-gray-200 hover:shadow hover:bg-gray-100"
            >
              <svg
                className="h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM200-160v-640h80v80h80v80h-80v80h80v80h-80v320h-80Zm400-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z" />
              </svg>
              <span className="text-base lg:text-lg font-semibold">Sport</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
