import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRegisterMutation } from '../services/apiService'; // Your service file
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Register() {
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();
 const [profilePicBase64, setProfilePicBase64] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicBase64(reader.result); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };
  return (
 
      <div className="flex flex-col justify-center px-6 py-8 lg:px-8 bg-black">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-2xl  tracking-tight font-bold text-yellow-500">
          Create a New Account
        </h2>
      </div>

      <div className="mt-6 mx-auto w-full max-w-4xl ">
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone:'',
           
            carName: '',
            carModel: '',
            carColor: '',
            carNumber: '',
             
             
            address: '',
            parking: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = 'Name is required';
            if (!values.email) errors.email = 'Email is required';
            if (!values.password) errors.password = 'Password is required';
            if (values.password !== values.confirmPassword)
              errors.confirmPassword = 'Passwords do not match';
                        if (!values.phone) errors.phone = 'phone number is required';
            if (!values.address) errors.address = 'Area is required';

            return errors;
          }}

          onSubmit={async (values, { resetForm }) => {
  try {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      phone: values.phone,
      area: values.address,
      profilePic: profilePicBase64,
      carDetails: {
        carName: values.carName,
        carModel: values.carModel,
        carColor: values.carColor,
        carNumber: values.carNumber,
        address: values.address,   // ✅ dropdown stored here
        parking: values.parking,
      },
    };

    await registerUser(payload).unwrap();
    alert("User registered successfully!");
    navigate("/login");
    resetForm();
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong.");
  }
}}



        >
          {({ errors }) => (
            <Form className="space-y-6 bg-black p-6 rounded-lg shadow border border-yellow-500 shadow-[0_0_10px_#facc15]">
             
                <h3 className="text-lg font-semibold mb-4 text-center text-yellow-500">Registration Form</h3>

                {/* User Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-bold text-sm mb-1">Name</label>
                    <Field
                      type="text"
                      name="name"
                      className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-white font-bold text-sm mb-1">Email address</label>
                    <Field
                      type="email"
                      name="email"
                      className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-white font-bold text-sm mb-1">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-white font-bold text-sm mb-1">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div>
  <label className="block text-white font-bold text-sm mb-1">Phone Number</label>
  <Field
    type="text"
    name="phone"
    className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
            // required
  />
  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm"
  />
</div>
{/* 
<div>
                <label className="block text-white font-bold text-sm mb-1">Upload Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-white"
                />
                {errors.profilePic && !profilePicBase64 && (
                  <div className="text-red-500 text-sm mt-1">{errors.profilePic}</div>
                )}
                {profilePicBase64 && (
                  <img
                    src={profilePicBase64}
                    alt="Profile Preview"
                    className="mt-2 h-20 w-20 rounded-full object-cover border border-white"
                  />
                )}
              </div>


                <div className=" rounded-lg p-8 bg-black border border-yellow-500 ">
                  <h3 className="text-lg font-semibold mb-4 text-center text-yellow-500">Car Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             
                    <div>
                      <label className="block text-white font-bold text-sm mb-1">Car Name</label>
                      <Field
                        type="text"
                        name="carName"
                        className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-bold text-sm mb-1">Car Model</label>
                      <Field
                        type="text"
                        name="carModel"
                        className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-bold text-sm mb-1">Car Colour</label>
                      <Field
                        type="text"
                        name="carColor"
                        className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-bold text-sm mb-1">Car Number</label>
                      <Field
                        type="text"
                        name="carNumber"
                        className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                      />
                    </div>
                   */}

                    {/* ✅ Dropdown for Address (Area) */}
                   
<div>
  <label className="block text-white font-bold text-sm mb-1">Area</label>
  <Field
    as="select"
    name="address"
    className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
  >
    <option value="">Select Area</option>
    <option value="KPHB">KPHB</option>
    <option value="Kukatpally">Kukatpally</option>
    <option value="Miyapur">Miyapur</option>
    <option value="Chandanagar">Chandanagar</option>
  </Field>
  <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
</div>

                    {/* <div>
                      <label className="block text-white font-bold text-sm mb-1">Parking Slot</label>
                      <Field
                        type="text"
                        name="parking"
                        className="mt-1 block w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                      />
                    </div> */}
                  {/* </div> */}
                {/* </div> */}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 font-semibold"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;