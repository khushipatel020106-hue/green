import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-green-950 text-green-50 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
      <img
        src="/image/logo.png"   // 🔁 replace with your actual path
        alt="GreenVolt Logo"
        className="w-10 h-10 rounded-full object-contain"
      />
      <h1 className="text-2xl font-bold tracking-widest">
        GREEN<span className="text-gray-400">VOLT</span>
      </h1>
    </div>


          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-green-400 transition">Home</Link>
            <Link to="/about" className="hover:text-green-400 transition">About</Link>
            <Link to="/vehicles" className="hover:text-green-400 transition">Vehicles</Link>
            <Link to="/whychooseus" className="hover:text-green-400 transition">WhyChooseUs</Link>
            <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
          </nav>

          <Link
            to="/contact"
            className="bg-green-500 text-green-950 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-400 transition"
          >
            Visit Showroom
          </Link>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main>

        {/* ================= HERO ================= */}
        <section className="relative h-[85vh] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
            alt="Electric Vehicle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-950/80"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-green-50">
            <div>
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                Powering the <br />
                <span className="text-green-400">Electric Future</span>
              </h2>

              <p className="text-green-100 mb-8 text-lg max-w-xl">
                GREENVOLT delivers smart, sustainable and premium electric
                mobility solutions designed for India.
              </p>

              <div className="flex gap-5">
                <Link
                  to="/vehicles"
                  className="bg-green-500 text-green-950 px-7 py-3 rounded-full font-semibold hover:bg-green-400 transition"
                >
                  Explore Vehicles
                </Link>
                <Link
                  to="/contact"
                  className="border border-green-400 px-7 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-green-950 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hidden md:block bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-4">Why Electric?</h4>
              <ul className="space-y-3 text-green-100 text-sm">
                <li>⚡ Zero Emissions</li>
                <li>🔋 Advanced Battery Technology</li>
                <li>💰 Low Running Cost</li>
                <li>🌍 Sustainable Mobility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE ELECTRIC ================= */}
        <section className="py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-green-950">
              Why Choose Electric?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              Smart innovation meets sustainability and performance.
            </p>

            <div className="grid md:grid-cols-4 gap-10">
              {[
                ["⚡", "Advanced Technology"],
                ["🌿", "Eco Friendly"],
                ["🛡️", "Safety First"],
                ["⭐", "Premium Quality"],
              ].map(([icon, title], i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 text-green-600 rounded-2xl text-3xl">
                    {icon}
                  </div>
                  <h4 className="font-semibold text-lg text-green-950">{title}</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Built with next-gen electric innovation.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="bg-green-900 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-green-50">
            {[
              ["500+", "Happy Customers"],
              ["3+", "Years of Excellence"],
              ["24/7", "Customer Support"],
              ["100%", "Satisfaction"],
            ].map(([num, text], i) => (
              <div key={i}>
                <h3 className="text-5xl font-extrabold mb-2">{num}</h3>
                <p className="opacity-90">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VEHICLES ================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-14 text-green-950">
            Our Electric Vehicles
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "GreenVolt Scooter", img: "/image/i1.png", range: "120 km" },
              { name: "GreenVolt Bike", img: "/image/i2.png", range: "150 km" },
              { name: "GreenVolt Cargo", img: "/image/i3.png", range: "180 km" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-3xl shadow hover:shadow-2xl transition overflow-hidden">
                <div className="h-56 bg-green-100 flex items-center justify-center">
                  <img src={v.img} alt={v.name} className="h-44 object-contain hover:scale-110 transition" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl text-green-950">{v.name}</h4>
                  <p className="text-sm text-gray-500 mt-2">⚡ Range: {v.range}</p>
                  <button className="mt-6 w-full bg-green-900 text-green-50 py-3 rounded-xl hover:bg-green-700 transition">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-32 bg-black text-green-50 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.25),transparent_70%)]"></div>
          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-6">Visit Our Showroom</h2>
            <p className="text-gray-300 mb-10">
              Experience electric mobility with confidence.
            </p>
            <div className="flex justify-center gap-6">
              <a href="tel:+919999999999" className="bg-green-500 text-green-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition">
                Call Us
              </a>
              <Link to="/contact" className="bg-green-50 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-white transition">
                Contact
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-green-950 text-green-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl">GREENVOLT</h3>
            <p className="text-sm mt-2">Driving India’s electric future.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Vehicles</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">Mahesana, Gujarat</p>
            <p className="text-sm">📞 +91 XXXXX XXXXX</p>
          </div>
        </div>

        <p className="text-center text-xs text-green-400 mt-8">
          © 2025 GREENVOLT. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
