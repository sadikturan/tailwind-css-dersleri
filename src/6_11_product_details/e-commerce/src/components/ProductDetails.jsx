import AddToCartButton from "./AddToCartButton";
import AddToFavouriteButton from "./AddToFavouriteButton";

export default function ProductDetails() {
  return (
    <section className="py-8 bg-white md:py-16">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="max-w-md lg:max-w-lg mx-auto">
            <img className="h-full" src="/img/p2.jpg" alt="" />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Apple Watch Series 10 GPS 42mm Rose Gold Aluminium Case with Light
              Blush Sport Band - S/M
            </h1>
            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                $1,249.99
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-500">(5.0)</p>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline"
                >
                  356 Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:flex sm:items-center sm:gap-4 sm:mt-8 space-y-2 sm:space-y-0">
              <AddToFavouriteButton />
              <AddToCartButton />
            </div>

            <hr className="my-6 md:my-8 border-gray-200" />

            <p className="mb-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              deserunt quisquam obcaecati dignissimos, asperiores mollitia
              deleniti aperiam non voluptate suscipit ut modi culpa. Numquam
              autem maxime est nesciunt molestiae fuga!
            </p>
            <p className="mb-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              deserunt quisquam obcaecati dignissimos, asperiores mollitia
              deleniti aperiam non voluptate suscipit ut modi culpa. Numquam
              autem maxime est nesciunt molestiae fuga!
            </p>
            <p className="mb-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              deserunt quisquam obcaecati dignissimos, asperiores mollitia
              deleniti aperiam non voluptate suscipit ut modi culpa. Numquam
              autem maxime est nesciunt molestiae fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
