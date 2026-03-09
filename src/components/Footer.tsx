import { SiTrainerroad } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 pt-16 pb-8">
      <div className="w-[90%] md:w-275 mx-auto grid md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <SiTrainerroad className="text-3xl text-white" />
            <span className="text-xl font-bold text-white">
              RoadSafe Authority
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Enhancing road safety through intelligent monitoring,
            driver verification, and real-time incident reporting
            systems.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Register</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Driver Verification</li>
            <li>Incident Reporting</li>
            <li>Traffic Monitoring</li>
            <li>Violation Detection</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>0793720578</li>
            <li>francismm2023@gmail.com</li>
            <li>Nairobi, Kenya</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Road Safety & Security Authority. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
