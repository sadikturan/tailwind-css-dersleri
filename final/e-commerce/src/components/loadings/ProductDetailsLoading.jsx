// app/products/[slug]/loading.js
export default function ProductDetailsLoading() {
  return (
    <section className="py-8 bg-white md:py-16">
      <div className="max-w-screen-xl px-4 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Sol kolon - image skeleton */}
        <div className="lg:col-span-1 h-80 bg-gray-200 rounded-lg animate-pulse"></div>

        {/* Sağ kolon - detay skeleton */}
        <div className="lg:col-span-2 space-y-4">
          {/* Ürün başlığı */}
          <div className="h-8 bg-gray-200 rounded w-2/3 animate-pulse"></div>

          {/* Fiyat */}
          <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>

          {/* Yıldız ve yorumlar */}
          <div className="flex gap-2 items-center mt-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"
                ></div>
              ))}
            </div>
            <div className="h-4 bg-gray-200 rounded w-12 animate-pulse ml-2"></div>
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse ml-2"></div>
          </div>

          {/* Butonlar */}
          <div className="flex gap-4 mt-4">
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>

          {/* Açıklama */}
          <div className="space-y-2 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 rounded w-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
