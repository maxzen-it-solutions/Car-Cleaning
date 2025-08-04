

import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useLoginMutation } from '../services/apiService'; // adjust the path if needed
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [loginUser] = useLoginMutation();
  const navigate = useNavigate();

  return (
    

<div className="min-h-screen flex items-center justify-center bg-black">
  <div className="w-full max-w-sm border border-yellow-500 shadow-[0_0_10px_#facc15] rounded-lg p-8 bg-[#1a1a1a]">
    <h2 className="text-center text-2xl font-bold text-yellow-500 mb-6">Login</h2>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = 'Required';
        if (!values.password) errors.password = 'Required';
        return errors;
      }}
    onSubmit={async (values, { setSubmitting }) => {
  try {
    const res = await loginUser(values).unwrap();
    localStorage.setItem('token', res.token);
    localStorage.setItem('email', res.email);
    localStorage.setItem('role', res.role);

    if (res.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/navbar');
    }
  } catch (err) {
    alert('Login failed');
  }
}}

    >
      {() => (
        <Form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-white font-bold text-sm mb-1">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white font-bold text-sm mb-1">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center text-white mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="text-yellow-400 hover:underline">
              Sign up
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  </div>
</div>



  );
}

export default Login;
