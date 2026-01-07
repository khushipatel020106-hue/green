import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaBolt,
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaRupeeSign,
} from "react-icons/fa";

import { MdBatteryChargingFull } from "react-icons/md";




const vehicles = [
  {
    id: 1,
    name: "GreenVolt Scooter",
    image: "/image/i1.png",
    description: "Smart electric scooter designed for modern urban mobility.",
    range: "120 km",
    charging: "Fast Charging – 1.5 hrs",
    price: "₹1.2 Lakhs",
  },
  {
    id: 2,
    name: "GreenVolt Bike",
    image: "/image/i2.png",
    description: "High performance EV bike with premium comfort and safety.",
    range: "150 km",
    charging: "Fast Charging – 2 hrs",
    price: "₹2.5 Lakhs",
  },
  {
    id: 3,
    name: "GreenVolt Cargo",
    image: "/image/i3.png",
    description: "Luxury electric cargo vehicle built for commercial use.",
    range: "180 km",
    charging: "Ultra Fast – 1 hr",
    price: "₹3.8 Lakhs",
  },
];

const Home = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-green-950 text-green-50 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/image/logo.png"
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
            <Link to="/whyus" className="hover:text-green-400 transition">WhyChooseUs</Link>
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

    {/* WHY ELECTRIC CARD */}
    <div className="hidden md:block bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaBolt className="text-green-400" />
        Why Electric?
      </h4>

      <ul className="space-y-3 text-green-100 text-sm">
        <li className="flex items-center gap-3">
          <FaBolt className="text-green-400" />
          Zero Emissions
        </li>
        <li className="flex items-center gap-3">
          <MdBatteryChargingFull className="text-green-400" />
          Advanced Battery Technology
        </li>
        <li className="flex items-center gap-3">
          <FaRupeeSign className="text-green-400" />
          Low Running Cost
        </li>
        <li className="flex items-center gap-3">
          <FaLeaf className="text-green-400" />
          Sustainable Mobility
        </li>
      </ul>
    </div>
  </div>
</section>

        {/* ================= WHY CHOOSE ELECTRIC ================= */}
        <section className="py-24 bg-green-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4 text-green-950 flex items-center justify-center gap-3">
      <FaBolt className="text-green-600" />
      Why Choose Electric?
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-16">
      Smart innovation meets sustainability and performance.
    </p>

    <div className="grid md:grid-cols-4 gap-10">
      {[
        { icon: <FaBolt />, title: "Advanced Technology" },
        { icon: <FaLeaf />, title: "Eco Friendly" },
        { icon: <FaShieldAlt />, title: "Safety First" },
        { icon: <FaStar />, title: "Premium Quality" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
        >
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 text-green-600 rounded-2xl text-3xl">
            {item.icon}
          </div>

          <h4 className="font-semibold text-lg text-green-950 flex items-center justify-center gap-2">
            {item.title}
          </h4>

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
        <section className="py-28 max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16 text-green-950">
            Our Electric Vehicles
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="h-56 bg-green-100 flex items-center justify-center">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-44 object-contain group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold mb-3 text-green-950">
                    {v.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {v.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-5">⚡ Range: {v.range}</p>

                  <button
                    onClick={() => setSelectedVehicle(v)}
                    className="mt-2 w-full bg-green-900 text-green-50 py-3 rounded-xl hover:bg-green-700 transition"
                  >
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

      {/* ================= POPUP MODAL ================= */}
      {selectedVehicle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelectedVehicle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-8 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <div className="h-56 bg-green-100 flex items-center justify-center rounded-2xl mb-6">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="h-44 object-contain"
              />
            </div>

            <h4 className="text-2xl font-bold mb-3 text-green-950">
              {selectedVehicle.name}
            </h4>

            <p className="text-gray-600 mb-4">
              {selectedVehicle.description}
            </p>

            <div className="space-y-2 text-sm text-gray-800">
              <p><strong>Range:</strong> {selectedVehicle.range}</p>
              <p><strong>Charging:</strong> {selectedVehicle.charging}</p>
              <p><strong>Price:</strong> {selectedVehicle.price}</p>
            </div>

            <Link
              to="/contact"
              className="mt-6 block text-center bg-green-900 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              Book Test Ride
            </Link>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
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
              <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
              <li><Link to="/vehicles" className="hover:text-green-400 transition">Our Vehicles</Link></li>
              <li><Link to="/whyus" className="hover:text-green-400 transition">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
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

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes scaleUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
};

export default Home;