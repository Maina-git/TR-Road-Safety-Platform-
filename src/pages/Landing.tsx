import Header from "../components/Header";
import { Services } from "../constants";
import {
  FaMobileAlt,
  FaQrcode,
  FaShieldAlt,
  FaBell,
  FaChartLine,
} from "react-icons/fa";
const Landing = () => {
  return (
    <div className="w-full h-auto">
      <div
        className="relative w-full h-screen flex items-center"
        style={{
          backgroundImage: 'url("/images/traffic-surveillance-cameras-monitor-busy-260nw-2633099581.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="relative w-[90%] md:w-225 mx-auto text-white flex flex-col gap-6">
          <Header title="Who We Are" />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Road Safety and Security Authority
          </h1>
          <p className="max-w-150 text-gray-200 text-lg">
            We are committed to improving road safety through intelligent
            monitoring systems, real-time incident reporting, and secure driver
            verification services.
          </p>
        </div>
      </div>
      <div className="w-full py-20 bg-white">
        <div className="w-[90%] md:w-250 mx-auto">
          <Header title="About Us" />
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Driving Innovation in Road Safety
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Road Safety and Security Authority is committed to improving
                transportation safety through digital driver verification,
                real-time incident monitoring, and intelligent traffic management systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform connects drivers, law enforcement, and transport
                authorities in one secure ecosystem to promote accountability,
                transparency, and safer roads for all.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/IMG_8144.webp"
                alt="About Road Safety"
                className="shadow-lg w-full max-w-180 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-gray-50">
        <div className="w-[90%] md:w-275 mx-auto">
          <Header title="Routex Platform" />
          <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
  <div className="flex justify-center">
              <img
                src="/images/FotoJet-57-1200x630.jpg"
                alt="Routex Mobile Platform"
                className="shadow-lg w-full max-w-112.5 object-cover"/>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Smart Mobile Road Safety System
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Routex is an advanced mobile road safety platform designed to enhance
                driver accountability, improve passenger confidence, and strengthen
                vehicle verification processes through secure QR-based technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The mobile application enables passengers, drivers, and law enforcement
                officers to instantly verify registered vehicles, confirm driver identity,
                report incidents, and access live updates — all within a secure,
                real-time digital ecosystem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex items-start gap-3">
                  <FaMobileAlt className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Mobile Optimized</h4>
                    <p className="text-sm text-gray-600">
                      Seamless performance on Android and iOS devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaQrcode className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">QR Code Verification</h4>
                    <p className="text-sm text-gray-600">
                      Instant vehicle authentication through secure QR scanning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Secure Database</h4>
                    <p className="text-sm text-gray-600">
                      Powered by a protected cloud database ensuring data integrity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBell className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Real-Time Updates</h4>
                    <p className="text-sm text-gray-600">
                      Live notifications for registrations and security alerts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <FaChartLine className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Live Monitoring Dashboard</h4>
                    <p className="text-sm text-gray-600">
                      Integrated analytics showing registered vehicles and users in real time.
                    </p>
                  </div>
                </div>

              </div>
            </div>          
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-white">
        <div className="w-[90%] md:w-275 mx-auto">
          <Header title="Our Services" />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {Services.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                  <img
                    className="w-full h-50 object-cover"
                    src={item.img}
                    alt={item.title}/>
                  <div className="p-6">
                    <h1 className="text-xl font-bold text-blue-900 mb-3">
                      {item.title}
                    </h1>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-blue-950 text-white">
        <div className="w-[90%] md:w-225 mx-auto">
          <Header title="Contact Us" />
          <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="w-62.5"
                src="/images/unnamed.png"
                alt="Contact"/>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-lg font-semibold">
              <span>07123456763</span>
              <span>01232167452</span>
              <span>roadsafety@authority.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

















