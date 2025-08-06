import womanHoldingCloth from "../assets/images/woman-holding-cloth-prepared-wash-blue.jpg";
import pexelsDomJ from "../assets/images/pexels-dom-j-7304-45980.jpg";
import pexelsPolina from "../assets/images/pexels-polina-tankilevitch-4440652.jpg";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-neutral-50 text-neutral-900">
      <section className="w-full max-w-5xl px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-2">
            Laundry Kilat
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-4 text-neutral-700">
            <span className="font-medium">Cepat, bersih, terpercaya.</span>{" "}
            Solusi laundry modern untuk kebutuhan harian Anda. Nikmati layanan
            profesional, harga terjangkau, dan hasil maksimal—semua dengan
            sentuhan modern, seperti pengalaman di Apple Store.
          </p>
          <a
            href="/register"
            className="inline-block bg-neutral-900 text-white rounded px-6 py-3 font-semibold text-base shadow hover:bg-neutral-700 transition-colors"
          >
            Daftar Sekarang
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={womanHoldingCloth}
            alt="Laundry Kilat Basket"
            className="rounded-2xl shadow-xl w-full max-w-xs object-cover border border-neutral-200"
          />
        </div>
      </section>
      <section className="w-full max-w-6xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center bg-white/80 rounded-xl p-6 shadow-sm border border-neutral-100">
          <img
            src={pexelsPolina}
            alt="Clean Laundry"
            className="w-24 h-24 object-cover rounded-full mb-4 border border-neutral-200"
          />
          <h2 className="font-semibold text-lg mb-2">Hasil Bersih & Wangi</h2>
          <p className="text-neutral-600 text-sm">
            Pakaian dicuci dengan mesin modern & deterjen premium.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white/80 rounded-xl p-6 shadow-sm border border-neutral-100">
          <img
            src={womanHoldingCloth}
            alt="Fast Service"
            className="w-24 h-24 object-cover rounded-full mb-4 border border-neutral-200"
          />
          <h2 className="font-semibold text-lg mb-2">Proses Kilat</h2>
          <p className="text-neutral-600 text-sm">
            Layanan 24 jam selesai, cocok untuk kebutuhan mendesak.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white/80 rounded-xl p-6 shadow-sm border border-neutral-100">
          <img
            src={pexelsDomJ}
            alt="Trusted"
            className="w-24 h-24 object-cover rounded-full mb-4 border border-neutral-200"
          />
          <h2 className="font-semibold text-lg mb-2">Terpercaya & Aman</h2>
          <p className="text-neutral-600 text-sm">
            Dipercaya ratusan pelanggan, dengan sistem tracking digital.
          </p>
        </div>
      </section>
    </main>
  );
}
