import womanHoldingCloth from "../assets/images/woman-holding-cloth-prepared-wash-blue.jpg";
import pexelsDomJ from "../assets/images/pexels-dom-j-7304-45980.jpg";

export default function About() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-neutral-50 text-neutral-900">
      <section className="w-full max-w-4xl px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2">
            Tentang Laundry Kilat
          </h1>
          <p className="text-base md:text-lg text-neutral-700 mb-2">
            <span className="font-medium">Laundry Kilat</span> adalah UMKM
            laundry modern yang berlokasi di Jakarta, melayani kebutuhan cuci
            harian dengan layanan cepat, bersih, dan profesional. Kami hadir
            untuk memudahkan hidup Anda dengan teknologi dan pelayanan terbaik.
          </p>
          <ul className="text-neutral-700 text-base mb-4 list-disc pl-5">
            <li>Buka setiap hari, 07.00 - 21.00</li>
            <li>Alamat: Jl. Contoh Raya No. 123, Jakarta</li>
            <li>Telepon: 0812-3456-7890</li>
            <li>Email: info@laundrykilat.com</li>
          </ul>
          <div className="flex gap-4">
            <img
              src={womanHoldingCloth}
              alt="Laundry Service"
              className="w-24 h-24 rounded-xl object-cover border border-neutral-200 shadow"
            />
            <img
              src={pexelsDomJ}
              alt="Laundry Team"
              className="w-24 h-24 rounded-xl object-cover border border-neutral-200 shadow"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl px-6 pb-16">
        <h2 className="text-xl font-semibold mb-2">Mengapa Memilih Kami?</h2>
        <ul className="list-disc pl-5 text-neutral-700 text-base space-y-1">
          <li>Proses kilat: selesai dalam 24 jam</li>
          <li>Harga transparan & terjangkau</li>
          <li>Tenaga kerja berpengalaman & ramah</li>
          <li>Teknologi tracking digital untuk setiap order</li>
          <li>Garansi pakaian bersih, rapi, dan wangi</li>
        </ul>
      </section>
    </main>
  );
}
