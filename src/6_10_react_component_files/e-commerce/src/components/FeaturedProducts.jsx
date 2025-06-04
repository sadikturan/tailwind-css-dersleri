export default function FeaturedProducts() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-4 flex items-center justify-between md:mb-8">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Featured Products
          </h1>
          <a
            href="#"
            className="flex items-center font-medium text-blue-700 hover:underline"
          >
            See more products
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-4 md:mb-8">
          <div className="product border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="img/p1.jpg" alt="" />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  35% off
                </span>
                <div>
                  <button
                    data-tooltip-target="tooltip-add-to-favorites1"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#666666"
                    >
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  </button>

                  <div
                    id="tooltip-add-to-favorites1"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                  >
                    Add to favorites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
              >
                Apple Watch Series 10
              </a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">
                  $1,699
                </p>
                <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  <svg
                    className="me-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="product border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="img/p2.jpg" alt="" />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  35% off
                </span>
                <div>
                  <button
                    data-tooltip-target="tooltip-add-to-favorites2"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#666666"
                    >
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  </button>

                  <div
                    id="tooltip-add-to-favorites2"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                  >
                    Add to favorites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
              >
                Apple Watch Series 10
              </a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">
                  $1,699
                </p>
                <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  <svg
                    className="me-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="product border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="img/p3.jpg" alt="" />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  35% off
                </span>
                <div>
                  <button
                    data-tooltip-target="tooltip-add-to-favorites3"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#666666"
                    >
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  </button>

                  <div
                    id="tooltip-add-to-favorites3"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                  >
                    Add to favorites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
              >
                Apple Watch Series 10
              </a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">
                  $1,699
                </p>
                <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  <svg
                    className="me-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="product border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="img/p4.jpg" alt="" />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  35% off
                </span>
                <div>
                  <button
                    data-tooltip-target="tooltip-add-to-favorites4"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#666666"
                    >
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  </button>

                  <div
                    id="tooltip-add-to-favorites4"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                  >
                    Add to favorites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
              >
                Apple Watch Series 10
              </a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">
                  $1,699
                </p>
                <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  <svg
                    className="me-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
