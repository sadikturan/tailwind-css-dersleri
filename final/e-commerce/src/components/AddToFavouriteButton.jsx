export default function AddToFavouriteButton() {
  return (
    <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 hover:text-blue-700 rounded-lg bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 focus:outline-none w-full sm:w-auto">
      <svg
        class="me-2 h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
        />
      </svg>

      <span>Add to Favourite</span>
    </button>
  );
}
