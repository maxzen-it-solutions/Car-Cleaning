import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import Profile from "../Assests/service_2.jpg";
import Background from "../Assests/commpagesbg.jpg"
import { FaEdit } from "react-icons/fa";


function Profilepage() {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    username: "Sai Kiran",
    email: "saikiran@example.com",
    phone: "9876543210",
    address: "Kpbh 13th Phase ",
  });

  const [editable, setEditable] = useState({
    username: false,
    email: false,
    phone: false,
    address: false,
    profilePic: false,
  });

  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleEdit = (field) => {
    setEditable({ ...editable, [field]: !editable[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    Object.keys(formData).forEach((key) => {
      if (editable[key] && formData[key].trim() === "") {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    alert("✅ Profile updated successfully!");

    setEditable({
      username: false,
      email: false,
      phone: false,
      address: false,
      profilePic: false,
    });

    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gray-300 shadow-xl rounded-2xl p-6 w-72 md:w-[70%] lg:w-[60%] xl:w-[70%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
        {/* Profile Pic Section */}
        <div className="relative flex flex-col md:flex-row justify-center items-center    ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="">
              <img
                src={profilePic || Profile}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-gray-100 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <label className="absolute  text-white md:mt-6 ml-12 -mt-8 md:-ml-3 p-2 rounded-full cursor-pointer hover:bg-blue-600">
                <FaEdit size={18} />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
             
            </div>
             <div className="md:ml-20 text-white font-semibold text-2xl">
               Username
              </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-5 flex flex-col justify-center items-center"
        >
          {/* Username */}
          <div>
            <label className="block text-white font-medium">Username</label>
            <div className="flex items-center">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                disabled={!editable.username}
                className={`mt-1 md:w-96 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 ${
                  !editable.username ? "bg-gray-400 cursor-not-allowed" : ""
                } ${errors.username ? "border-red-500" : ""}`}
              />
              <FiEdit2 size={18}
                className="ml-2 text-gray-300 cursor-pointer"
                onClick={() => toggleEdit("username")}
              />
            </div>
            {errors.username && (
              <p className="text-red-600 text-sm">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium">Email</label>
            <div className="flex items-center">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editable.email}
                className={`mt-1 md:w-96 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 ${
                  !editable.email ? "bg-gray-400 cursor-not-allowed" : ""
                } ${errors.email ? "border-red-500" : ""}`}
              />
              <FiEdit2 size={18}
                className="ml-2 text-gray-300 cursor-pointer"
                onClick={() => toggleEdit("email")}
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white font-medium">Phone</label>
            <div className="flex items-center">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!editable.phone}
                className={`mt-1 md:w-96 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 ${
                  !editable.phone ? "bg-gray-400 cursor-not-allowed" : ""
                } ${errors.phone ? "border-red-500" : ""}`}
              />
              <FiEdit2 size={18}
                className="ml-2 text-gray-300 cursor-pointer"
                onClick={() => toggleEdit("phone")}
              />
            </div>
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-white font-medium">Address</label>
            <div className="flex items-start">
              <textarea 
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!editable.address}
                className={`mt-1 md:w-96 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 ${
                  !editable.address ? "bg-gray-400 cursor-not-allowed" : ""
                } ${errors.address ? "border-red-500" : ""}`}
                rows="3"
              ></textarea>
              <FiEdit2 size={18}
                className="ml-2 mt-2 text-gray-300 cursor-pointer"
                onClick={() => toggleEdit("address")}
              />
            </div>
            {errors.address && (
              <p className="text-red-600 text-sm">{errors.address}</p>
            )}
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full  bg-yellow-500 text-white py-2 w-32 md:w-40 rounded-lg hover:bg-yellow-300 transition"
          >
            Save & Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profilepage;
