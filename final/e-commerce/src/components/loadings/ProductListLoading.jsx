export default function ProductListLoading() {
  const PAGE_SIZE = 8;

  return (
    <section className="py-8 bg-white md:py-16">
      <div className="max-w-screen-xl px-4 mx-auto space-y-8">
        {/* ProductList skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div
              key={i}
              className="h-48 bg-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
