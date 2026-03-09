import React, { useState } from "react";
import Header from "../components/Header";
import { db } from "../config/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { FaPrint } from "react-icons/fa6";
import QRCode from "react-qr-code";

const Register = () => {
  const [driverData, setDriverData] = useState({
    fullName: "",
    licenseId: "",
    nationalId: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    licenseExpiry: "",
    vehicleType: "",
    vehicleServiceType: "",
    plateNumber: "",
    chassisNumber: "",
    insuranceProvider: "",
    insuranceExpiry: "",
  });

  const [qrValue, setQrValue] = useState("");


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };


  const handleRegister = async () => {
    try {
      const docRef = doc(db, "vehicles", driverData.licenseId);
      await setDoc(docRef, {
        ...driverData,
        createdAt: new Date(),
      });

      setQrValue(JSON.stringify({ licenseId: driverData.licenseId }));

      alert("Vehicle registered successfully! QR code generated below.");
    } catch (err) {
      console.error("Error registering vehicle:", err);
      alert("Failed to register vehicle.");
    }
  };

  
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR Code</title>
          <style>
            body { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:50px; font-family:sans-serif; }
            h2 { margin-bottom:20px; }
            .info { margin-bottom: 20px; font-size:16px; }
          </style>
        </head>
        <body>
          <h2>Driver QR Code</h2>
          <div class="info"><strong>Name:</strong> ${driverData.fullName}</div>
          <div class="info"><strong>License ID:</strong> ${driverData.licenseId}</div>
          <div id="qrContainer">${document.getElementById("qrWrapper")?.innerHTML}</div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    setDriverData({
      fullName: "",
      licenseId: "",
      nationalId: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
      licenseExpiry: "",
      vehicleType: "",
      vehicleServiceType: "",
      plateNumber: "",
      chassisNumber: "",
      insuranceProvider: "",
      insuranceExpiry: "",
    });
    setQrValue("");
  };

  return (
    <div className="w-full h-auto bg-gray-100 py-16">
      <div className="w-[90%] md:w-237.5 mx-auto bg-white shadow-xl rounded-2xl p-10">
        <Header title="Register as a Driver" />

        <div className="mt-10">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Driver Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Driver Full Name"
              value={driverData.fullName}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="text"
              name="licenseId"
              placeholder="License ID"
              value={driverData.licenseId}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="text"
              name="nationalId"
              placeholder="National ID"
              value={driverData.nationalId}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="date"
              name="dob"
              value={driverData.dob}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={driverData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={driverData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="text"
              name="address"
              placeholder="Residential Address"
              value={driverData.address}
              onChange={handleChange}
              className="w-full md:col-span-2 p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="date"
              name="licenseExpiry"
              placeholder="License Expiry Date"
              value={driverData.licenseExpiry}
              onChange={handleChange}
              className="w-full md:col-span-2 p-3 bg-gray-50 border rounded-lg"/>
          </div>
        </div>


        <div className="mt-14">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Vehicle Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="vehicleType"
              value={driverData.vehicleType}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg">
              <option value="">Select Vehicle Type</option>
              <option>Car</option>
              <option>Bus</option>
              <option>Truck</option>
              <option>Motorcycle</option>
            </select>

            <select
              name="vehicleServiceType"
              value={driverData.vehicleServiceType}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg">
              <option value="">Vehicle Service Type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>

            <input
              type="text"
              name="plateNumber"
              placeholder="Plate Number"
              value={driverData.plateNumber}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
            <input
              type="text"
              name="chassisNumber"
              placeholder="Chassis Number"
              value={driverData.chassisNumber}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>

            <select
              name="insuranceProvider"
              value={driverData.insuranceProvider}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg">
              <option value="">Insurance Provider (Optional)</option>
              <option>APA Insurance</option>
              <option>Jubilee Insurance</option>
              <option>Britam</option>
              <option>CIC Insurance</option>
            </select>

            <input
              type="date"
              name="insuranceExpiry"
              value={driverData.insuranceExpiry}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border rounded-lg"/>
          </div>
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={handleRegister}
            className="px-10 py-3 bg-blue-950 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md">
            Register Driver & Vehicle
          </button>
        </div>


        {qrValue && (
          <div className="mt-10 flex flex-col items-center">
            <div id="qrWrapper">
              <QRCode value={qrValue} size={180} />
            </div>
            <button
              onClick={handlePrint}
              className="mt-4 px-6 py-2 text-gray-500 rounded-lg shadow-lg">
              <FaPrint className="text-3xl"/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;





