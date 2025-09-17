export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Kayıt Ol
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ad
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="Adınız"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Soyad
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Soyadınız"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="05xx xxx xx xx"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-posta
            </label>
            <input
              type="email"
              name="email"
              placeholder="ornek@email.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre (Tekrar)
            </label>
            <input
              type="password"
              name="password2"
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 px-4 py-2 text-white font-medium hover:bg-green-600 transition disabled:opacity-50"
          >
            Kayıt Ol
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Zaten hesabın var mı?{" "}
          <a
            href="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Giriş Yap
          </a>
        </p>
      </div>
    </div>
  );
}
