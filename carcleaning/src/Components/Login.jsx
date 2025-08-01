

import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useLoginMutation } from '../services/apiService'; // adjust the path if needed
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [loginUser] = useLoginMutation();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}

          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await loginUser(values).unwrap();
              localStorage.setItem('token', res.token);
              localStorage.setItem('email', res.email);
              navigate('/navbar');
            } catch (err) {
              alert('Login failed');
            }
          }}

        >
          {() => (
            <div className="border rounded-lg p-4 bg-gray-50">
              <Form className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 text-left">
                    Email address
                  </label>
                  <div className="mt-2">
                    <Field
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Field
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    Login
                  </button>
                </div>

                <p className="text-sm text-center mt-4">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-indigo-600 hover:underline">
                    Register
                  </Link>
                </p>

              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
