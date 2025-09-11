
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddUserPlanMutation } from "../services/plansApi";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const formData = state?.formData;

  // RTK mutation hook
  const [addUserPlan, { isLoading }] = useAddUserPlanMutation();

  if (!formData) {
    return (
      <div className="text-center mt-10">
        No data found. Please go back and fill your profile.
      </div>
    );
  }

  const handleProceed = async () => {
    try {
      // Replace with actual logged-in user ID
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in!");
        return;
      }

      // Prepare plan data to send
      const planData = {
        carName: formData.carName,
        carColor: formData.carColor,
        carNumber: formData.carNumber,
        planDuration: formData.planDuration,
        timeSlot: formData.timeSlot,
        address: formData.address,
        parking: formData.parking,
      };

      // Call RTK mutation to save plan
      await addUserPlan({ userId, planData }).unwrap();

      alert("Plan added successfully!");
      navigate("/profilepage"); // Redirect to plans page if you have one
    } catch (err) {
      console.error(err);
      alert("Failed to add plan. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold text-yellow-400 mb-8">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Left: User Data */}
        <div className="flex-1 bg-[#1f2937] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">User Information</h2>
          <div className="space-y-3">
            <p><span className="font-semibold">Name:</span> {formData.name}</p>
            <p><span className="font-semibold">Email:</span> {formData.email}</p>
            <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
            <p><span className="font-semibold">Address:</span> {formData.address}</p>
          </div>
        </div>

        {/* Right: Car Data */}
        <div className="flex-1 bg-[#1f2937] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Car Information</h2>
          <div className="space-y-3">
            <p><span className="font-semibold">Car Name:</span> {formData.carName}</p>
            <p><span className="font-semibold">Car Type:</span> {formData.carType}</p>
            <p><span className="font-semibold">Car Color:</span> {formData.carColor}</p>
            <p><span className="font-semibold">Car Number:</span> {formData.carNumber}</p>
            <p><span className="font-semibold">Plan Duration:</span> {formData.planDuration} Month(s)</p>
            <p><span className="font-semibold">Time Slot:</span> {formData.timeSlot}</p>
            <p><span className="font-semibold">Parking:</span> {formData.parking}</p>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-6  text-white font-bold text-xl px-6 py-3 rounded">
        Price: ₹{formData.planAmount}
      </div>
      <div className="mt-6 border border-gray-400 text-white font-bold text-xl px-6 py-3 rounded">
        After discount: ₹{formData.discountedAmount}
      </div>

      {/* Proceed button */}
      <button
        className="mt-6 bg-green-400 text-black px-6 py-2 rounded hover:bg-yellow-400"
        onClick={handleProceed}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default Checkout;
