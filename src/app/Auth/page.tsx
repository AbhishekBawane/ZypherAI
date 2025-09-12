"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <>
      <Navbar />
      <section className="mt-[100px] w-full flex flex-col justify-center items-center">
        <form className="border w-[350px] bg-blue-900 flex flex-col p-6 rounded-lg shadow-lg text-black">
       
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              className="border rounded p-3 placeholder-blue-600 bg-white w-full mt-2 text-lg"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border rounded p-3 placeholder-blue-600 bg-white w-full mt-2 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded p-3 placeholder-blue-600 bg-white w-full mt-2 text-lg"
            required
          />

          
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded p-3 placeholder-blue-600 bg-white w-full mt-2 text-lg"
              required
            />
          )}

          <button
            type="submit"
            className="mt-5 p-3 bg-green-600 hover:bg-green-500 rounded text-white font-semibold"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 underline"
          >
            {isSignup ? "Already have an account? Log In" : "Create an Account"}
          </button>
          {!isSignup && (
            <button className="text-blue-600 underline">
              Forgot Password?
            </button>
          )}
        </div>
      </section>
    </>
  );
}
