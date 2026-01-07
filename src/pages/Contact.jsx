import { Link } from "react-router-dom";

const Contact = () => {
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

      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-green-950 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-4">
            Ready to Go Electric? <br />
            <span className="text-white">Let’s Connect!</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto mt-4">
            Visit our state-of-the-art showroom in Mahesana or reach out to us
            for test drives, pricing, and expert guidance on electric vehicles.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "Schedule Test Drive",
              "Get Price Quote",
              "Showroom Visit",
              "Speak to Expert",
            ].map((item, i) => (
              <button
                key={i}
                className="bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-200 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HELP OPTIONS SECTION ================= */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      How Can We Help You Today?
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-lg">
      Choose from these quick options to get the assistance you need,
      or scroll down for detailed contact information.
    </p>

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-4">

      {/* MOST POPULAR */}
      <div className="relative bg-white border-2 border-green-500 rounded-2xl shadow-lg p-8 flex flex-col justify-between">

        {/* Ribbon */}
        <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-sm font-semibold py-2 rounded-t-xl">
          Most Popular
        </div>

        <div className="pt-10">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl">
            🚗
          </div>

          <h3 className="text-xl font-bold mb-2">
            Schedule Test Drive
          </h3>

          <p className="text-gray-600 mb-8 text-sm">
            Experience our vehicles firsthand
          </p>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
          Book Now
        </button>
      </div>

      {/* GET PRICE QUOTE */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition">
        <div>
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl">
            💬
          </div>

          <h3 className="text-xl font-bold mb-2">
            Get Price Quote
          </h3>

          <p className="text-gray-600 mb-8 text-sm">
            Detailed pricing with financing options
          </p>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
          Request Quote
        </button>
      </div>

      {/* SHOWROOM VISIT */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition">
        <div>
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl">
            📅
          </div>

          <h3 className="text-xl font-bold mb-2">
            Showroom Visit
          </h3>

          <p className="text-gray-600 mb-8 text-sm">
            Plan your visit to our showroom
          </p>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
          Schedule Visit
        </button>
      </div>

      {/* SPEAK TO EXPERT */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition">
        <div>
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl">
            📞
          </div>

          <h3 className="text-xl font-bold mb-2">
            Speak to Expert
          </h3>

          <p className="text-gray-600 mb-8 text-sm">
            Talk to our EV specialists
          </p>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
          Call Now
        </button>
      </div>

    </div>
  </div>
</section>


      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14">
            <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>

            <div className="space-y-5 text-gray-700">
              <p>
                <strong>GREENVOLT</strong> <br />
                10, Dediyasan GIDC, Opp. Swagat Residency, <br />
                Modhera Road, Mahesana – 384002, Gujarat, India
              </p>

              <p>
                📞 <strong>Phone:</strong> <br />
                +91 99744 51950 <br />
                +91 97123 04660
              </p>

              <p>
                ✉️ <strong>Email:</strong> <br />
                info@greenvoltev.in <br />
                sales@greenvoltev.in
              </p>

              <p>
                ⏰ <strong>Working Hours:</strong> <br />
                Monday – Saturday : 9:30 AM – 7:30 PM
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400">
                <option>General Inquiry</option>
                <option>Vehicle Purchase</option>
                <option>Test Drive Booking</option>
                <option>Service & Support</option>
                <option>Financing Options</option>
                <option>Corporate Sales</option>
              </select>

              <textarea
                rows="4"
                placeholder="Message *"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-950 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
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

    </>
  );
};

export default Contact;
