import { Link } from "react-router-dom";

const Vehicles = () => {
  const vehicles = [
    {
      name: "Electric Scooter A",
      desc: "Fast Charging • Lightweight • Digital Display",
    },
    {
      name: "Electric Scooter B",
      desc: "High Range • Comfortable • Eco Friendly",
    },
    {
      name: "Electric Bike C",
      desc: "Sporty Design • Powerful Motor • Zero Emission",
    },
    {
      name: "Electric 3 Wheeler D",
      desc: "Heavy Duty • Cargo Ready • High Efficiency",
    },
  ];

  return (

    
    <div className="font-sans">

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

      
      {/* ================= ADVANCED FEATURES SECTION ================= */}
<section className="bg-[#FFF8E6] py-32">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Small Badge */}
    <span className="inline-block mb-6 px-5 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-full">
      Our Electric Vehicles
    </span>

    {/* Main Heading */}
    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
      Advanced Features for{" "}
      <span className="text-green-500">Modern Living</span>
    </h2>

    {/* Description */}
    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
      Experience the perfect blend of technology, style, and sustainability
      with our premium electric vehicles. Every feature is designed to enhance
      your journey while protecting our environment.
    </p>

    {/* CTA Button */}
    <button className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-green-500/30">
      Schedule Test Drive
      <span className="text-lg">📅</span>
    </button>

  </div>
</section>


{/* ================= CHOOSE VEHICLE SECTION ================= */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Choose Your Perfect Electric Vehicle
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-20">
      Explore our range of premium electric vehicles, each designed to meet
      different needs and preferences.
    </p>

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-3">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div className="h-56 bg-gray-50 flex items-center justify-center">
          <img
            src="/image/1.png"
            alt="GreenVolt Urban Pro"
            className="h-44 object-contain group-hover:scale-105 transition"
          />
        </div>

        <div className="p-6 text-left">
          <div className="flex justify-between items-center mb-3">
            <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
              Premium Scooter
            </span>
            <div className="text-yellow-400 text-sm">★★★★★</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            GreenVolt Urban Pro
          </h3>

          <p className="text-gray-600 text-sm mb-5">
            Perfect for city commuting with premium features and elegant design.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ 3.5–4 Hour Charging</li>
            <li>✔ 170kg Capacity</li>
            <li>✔ Digital Display</li>
            <li>✔ Keyless Entry</li>
          </ul>

          <p className="text-2xl font-bold text-green-600">₹85,000</p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div className="h-56 bg-gray-50 flex items-center justify-center">
          <img
            src="/image/2.png"
            alt="GreenVolt Eco Max"
            className="h-44 object-contain group-hover:scale-105 transition"
          />
        </div>

        <div className="p-6 text-left">
          <div className="flex justify-between items-center mb-3">
            <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
              Efficient Scooter
            </span>
            <div className="text-yellow-400 text-sm">★★★★★</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            GreenVolt Eco Max
          </h3>

          <p className="text-gray-600 text-sm mb-5">
            Maximum efficiency and range for eco-conscious riders.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ Long Range Battery</li>
            <li>✔ Eco Mode</li>
            <li>✔ LED Lighting</li>
            <li>✔ Mobile Charging</li>
          </ul>

          <p className="text-2xl font-bold text-green-600">₹72,000</p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div className="h-56 bg-gray-50 flex items-center justify-center">
          <img
            src="/image/3.png"
            alt="GreenVolt City Rider"
            className="h-44 object-contain group-hover:scale-105 transition"
          />
        </div>

        <div className="p-6 text-left">
          <div className="flex justify-between items-center mb-3">
            <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
              Standard Scooter
            </span>
            <div className="text-yellow-400 text-sm">★★★★★</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            GreenVolt City Rider
          </h3>

          <p className="text-gray-600 text-sm mb-5">
            Reliable and affordable option for everyday urban transportation.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ Quick Charging</li>
            <li>✔ Compact Design</li>
            <li>✔ Safety Features</li>
            <li>✔ Affordable</li>
          </ul>

          <p className="text-2xl font-bold text-green-600">₹65,000</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= BUILT FOR EXCELLENCE ================= */}
<section className="relative py-32 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">

  {/* soft background shapes */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <span className="inline-block mb-4 px-5 py-1.5 text-sm font-medium text-green-700 bg-green-100 rounded-full">
        Advanced Features
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Built for <span className="text-green-600">Excellence</span>
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Every feature is thoughtfully engineered to deliver comfort,
        safety and effortless electric mobility.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Charging Time",
          value: "3.5 – 4 Hours",
          desc: "Fast charging for everyday convenience",
        },
        {
          title: "Front Suspension",
          value: "Telescopic",
          desc: "Smooth performance across all terrains",
        },
        {
          title: "Brakes",
          value: "Disk Brakes",
          desc: "Responsive braking for enhanced safety",
        },
        {
          title: "Loading Capacity",
          value: "170 kg",
          desc: "Comfortable for rider and cargo",
        },
        {
          title: "LED Headlights",
          value: "Stylish Design",
          desc: "Bright, energy-efficient illumination",
        },
        {
          title: "Mobile Charging Port",
          value: "Available",
          desc: "Charge devices while on the move",
        },
        {
          title: "Keyless Entry",
          value: "Yes",
          desc: "Smart access for modern convenience",
        },
        {
          title: "Digital Speedometer",
          value: "Advanced Display",
          desc: "Clear and accurate ride information",
        },
        {
          title: "Water & Dust Resistance",
          value: "Yes",
          desc: "Reliable performance in all conditions",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
        >
          {/* glow on hover */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl"></div>

          <div className="relative">
            <p className="text-sm text-gray-500 mb-1">
              {item.title}
            </p>

            <h4 className="text-xl font-semibold text-gray-900">
              {item.value}
            </h4>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* ================= TECHNICAL DETAILS (CHART VIEW) ================= */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <span className="inline-block mb-4 px-5 py-1.5 text-sm font-medium text-green-700 bg-green-100 rounded-full">
        Technical Specifications
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Complete Technical Details
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Comprehensive specifications to help you make an informed
        decision about your electric vehicle purchase.
      </p>
    </div>

    {/* Chart Container */}
    <div className="space-y-10">

      {/* TOP SPEED */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Top Speed</span>
          <span className="font-semibold text-gray-900">65 km/h</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[65%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
        </div>
      </div>

      {/* RANGE */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Range per Charge</span>
          <span className="font-semibold text-gray-900">80–100 km</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
        </div>
      </div>

      {/* CHARGING TIME */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Charging Time</span>
          <span className="font-semibold text-gray-900">3.5–4 hours</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
        </div>
      </div>

      {/* MOTOR POWER */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Motor Power</span>
          <span className="font-semibold text-gray-900">2000W BLDC</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[75%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
        </div>
      </div>

      {/* ACCELERATION */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Acceleration (0–40 km/h)</span>
          <span className="font-semibold text-gray-900">8 seconds</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[60%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= EASY FINANCING SOLUTIONS ================= */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <span className="inline-block mb-4 px-5 py-1.5 text-sm font-medium text-green-700 bg-green-100 rounded-full">
        Financing Options
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Easy Financing Solutions
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        We offer flexible financing options to make your electric vehicle
        purchase affordable and convenient.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-3">

      {/* EASY EMI */}
      <div className="rounded-2xl p-10 shadow-lg bg-gradient-to-b from-green-50 to-white text-center hover:shadow-2xl transition">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl">
          💳
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Easy EMI
        </h3>

        <p className="text-3xl font-extrabold text-green-600 mb-1">
          ₹2,500
        </p>
        <p className="text-gray-500 mb-6">
          per month starting
        </p>

        <ul className="text-left space-y-3 text-gray-700 text-sm">
          <li>• Flexible tenure options</li>
          <li>• Competitive interest rates</li>
          <li>• Quick approval process</li>
          <li>• Minimal documentation</li>
        </ul>
      </div>

      {/* BANK LOANS */}
      <div className="rounded-2xl p-10 shadow-lg bg-gradient-to-b from-sky-50 to-white text-center hover:shadow-2xl transition">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-sky-100 text-sky-600 text-2xl">
          🏦
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Bank Loans
        </h3>

        <p className="text-3xl font-extrabold text-sky-600 mb-1">
          7.5%
        </p>
        <p className="text-gray-500 mb-6">
          interest rate onwards
        </p>

        <ul className="text-left space-y-3 text-gray-700 text-sm">
          <li>• Partner bank network</li>
          <li>• Pre-approved loans</li>
          <li>• Instant loan processing</li>
          <li>• Attractive interest rates</li>
        </ul>
      </div>

      {/* GOVERNMENT SCHEMES */}
      <div className="rounded-2xl p-10 shadow-lg bg-gradient-to-b from-green-50 to-white text-center hover:shadow-2xl transition">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl">
          ✔
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Government Schemes
        </h3>

        <p className="text-3xl font-extrabold text-green-600 mb-1">
          ₹15,000
        </p>
        <p className="text-gray-500 mb-6">
          subsidy available
        </p>

        <ul className="text-left space-y-3 text-gray-700 text-sm">
          <li>• FAME II benefits</li>
          <li>• State government incentives</li>
          <li>• Tax exemptions</li>
          <li>• Registration fee waiver</li>
        </ul>
      </div>

    </div>
  </div>
</section>


{/* ================= TEST DRIVE CTA SECTION ================= */}
<section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

  {/* Soft green glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    {/* Badge */}
    <span className="inline-block mb-6 px-5 py-2 text-sm font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full">
      Ready to Experience Electric?
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
      Schedule Your Test Drive Today
    </h2>

    {/* Description */}
    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
      Experience the smooth, silent power of electric vehicles.
      Book a test drive and discover why thousands of customers
      have chosen <span className="text-green-400 font-semibold">GREENVOLT</span>.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-6">

      {/* Book Test Drive */}
      <button className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-green-500/30">
        Book Test Drive
        <span className="text-lg">📅</span>
      </button>

      {/* Visit Showroom */}
      <a
        href="/contact"
        className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:bg-gray-100"
      >
        Visit Showroom
        <span className="text-lg">📍</span>
      </a>

    </div>
  </div>
</section>



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

export default Vehicles;
