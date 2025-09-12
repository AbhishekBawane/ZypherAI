"use client";

import Navbar from "@/components/Navbar/Navbar";
import Foooter from "@/components/Footer";
import { useRouter } from "next/navigation";
import Price from "@/components/Price/Price";

export default function Homepage() {
  const router = useRouter();



  return (
    <>
      <Navbar />

      <section className="hero flex flex-col justify-center items-center w-full py-10">

      <h1 className="text-5xl items-center font-bold text-blue-800 text-center">
        Ask me about
      </h1>
    <div className="hero-sect w-[90%] sm:w-[60%] h-[90%] bg-black border flex align-center justify-center  items-center  text-white p-6 rounded-lg">
     
      <div className="flex sm:flex-col gap-4 mt-10">
        <button
          className="px-6 py-3 bg-blue-700 rounded text-white hover:bg-blue-500"
          onClick={() => router.push("/Auth")}
        >
          Sign In / Sign Up
        </button>
        <button
          className="px-6 py-3 bg-gray-600 rounded text-white hover:bg-gray-500"
          onClick={() => router.push("/search")}
        >
          Search as Guest
        </button>
      </div>
    </div>
</section>


      {/* Pricing Section */}
     <Price/>

      <Foooter />
    </>
  );
}
