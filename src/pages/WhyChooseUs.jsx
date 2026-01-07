import { Link } from "react-router-dom";

const Whychooseus = () => {
  return (
    <div className="font-sans text-green-950">

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
            <Link to="/WhyChooseUs" className="hover:text-green-400 transition">WhyChooseUs</Link>
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

      {/* ================= PAGE HERO ================= */}
      <section className="bg-green-950 text-white py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
          Why Choose <span className="text-gray-400">GREENVOLT</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Discover what sets GREENVOLT apart as your trusted partner in electric
          mobility in Gujarat.
        </p>
      </section>

      {/* ================= CORE REASONS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Advanced Technology",
              desc: "Latest EV technology with smart features for a superior riding experience.",
              icon: "⚡",
            },
            {
              title: "Eco-Friendly",
              desc: "Zero emissions for a cleaner environment and reduced carbon footprint.",
              icon: "🌿",
            },
            {
              title: "Safety First",
              desc: "Comprehensive safety features built into every vehicle we offer.",
              icon: "🛡️",
            },
            {
              title: "Premium Quality",
              desc: "High-quality materials and craftsmanship you can rely on.",
              icon: "🏆",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex gap-6"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-gray-900 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-90 mb-10">
            Trusted by Customers
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["500+", "Happy Customers"],
              ["3+ yrs", "Years of Excellence"],
              ["24/7", "Customer Support"],
              ["100%", "Customer Satisfaction"],
            ].map(([value, label], i) => (
              <div
                key={i}
                className="bg-green-950 text-white rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <h3 className="text-3xl font-extrabold text-white mb-2">
                  {value}
                </h3>
                <p className="text-white text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DIFFERENTIATORS ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            At GREENVOLT, we combine technology, sustainability, and customer-first
            values to deliver an unmatched electric vehicle experience.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Personalized Customer Service",
              "Flexible Financing Solutions",
              "Extensive EV Knowledge",
              "Local Market Expertise",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700 text-sm font-medium">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white text-green-900 font-bold py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Go Electric?
        </h2>
        <p className="text-green-900 mb-8 max-w-3xl mx-auto">
          Experience the future of transportation with GREENVOLT.
          Visit our showroom or schedule a test drive today.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/vehicles"
            className=" border border-gray-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 hover:bg-green-900 transition"
          >
            Explore Vehicles
          </a>
          <a
            href="/contact"
            className="border border-gray-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 hover:bg-green-900 transition"
          >
            Visit Showroom
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      {/* ===== FOOTER ===== */}
      <footer className="bg-green-950 text-white">
  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

    {/* LEFT */}
    <div>
      <div className="flex items-center gap-3 mb-5">
        <img
          src="/image/logo.png"
          alt="Greenvolt Logo"
          className="w-12 h-12 rounded-full object-contain"
        />
        <div>
          <h3 className="text-white text-xl font-bold tracking-wide">
            GREENVOLT
          </h3>
          <p className="text-sm text-gray-400">Mahesana, Gujarat</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed max-w-sm">
        Leading the electric revolution in Gujarat with sustainable,
        stylish, and reliable electric vehicles.
      </p>
    </div>

    {/* MIDDLE */}
    <div>
      <h4 className="text-white font-semibold text-lg mb-5">
        Quick Links
      </h4>
      <ul className="space-y-3 text-sm">
        <li><Link to="/" className="hover:text-green-400">About Us</Link></li>
        <li><Link to="/vehicles" className="hover:text-green-400">Our Vehicles</Link></li>
        <li><Link to="/whychooseus" className="hover:text-green-400">Why Choose Us</Link></li>
        <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
      </ul>
    </div>

    {/* RIGHT */}
    <div>
      <h4 className="text-white font-semibold text-lg mb-5">
        Contact Info
      </h4>

      <ul className="space-y-4 text-sm">
        <li className="flex gap-3">
          <span className="text-green-400">📍</span>
          <span>
            10, Dediyasan G.I.D.C., Opp. Swagat Residency,
            Modhera Road, Mehsana — 384 002
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-green-400">📞</span>
          <span>9712304660</span>
        </li>

        <li className="flex gap-3">
          <span className="text-green-400">📞</span>
          <span>9974451950</span>
        </li>

        <li className="flex gap-3">
          <span className="text-green-400">✉️</span>
          <span>info@greenvoltev.in</span>
        </li>
      </ul>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-white/10 text-center text-sm text-white py-6 px-6">
    © 2024 GREENVOLT. All rights reserved | Electric Vehicles in Mahesana | EV Showroom Gujarat
  </div>
</footer>


    </div>
  );
};

export default Whychooseus;