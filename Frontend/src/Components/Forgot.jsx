import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../services/apiService"; // Make sure you define this in apiService

function Forgot() {
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md border border-yellow-500 shadow-[0_0_10px_#facc15] rounded-lg p-6 bg-[#1a1a1a]">
        <h2 className="text-center text-2xl font-bold text-yellow-500 mb-6">
          Forgot Password
        </h2>

        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const res = await forgotPassword(values).unwrap();
              alert(res?.message || "Password reset instructions sent to your email.");
              resetForm();
              navigate("/login"); // redirect after success
            } catch (err) {
              console.error("Forgot password error:", err);
              alert("Failed to send reset email. Try again.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-white font-bold text-sm mb-1">
                  Enter your email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full bg-black text-white border border-white-600 rounded px-3 py-2 focus:outline-none focus:border-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center text-white mt-4">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-yellow-400 hover:underline"
          >
            Go back to Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Forgot;
