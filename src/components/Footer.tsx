"use client"; 
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Foooter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is ZypherAI free to use?",
      answer: "Yes! but only base plain. To enjoy more feature use suitable plain.",
    },
    {
      question: "Can I download and use it?",
      answer: "Sorry, unfortunately we don't provide the service to download.",
    },
  ];

  return (
    <footer className="bg-black w-full text-white px-6 py-10 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-md overflow-hidden"
          >
          
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold hover:bg-gray-900 transition"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-green-500" />
              ) : (
                <FaChevronDown className="text-green-500" />
              )}
            </button>

          
            {openIndex === index && (
              <div className="bg-white text-black p-4 text-base font-medium">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

   
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ZypherAI. All rights reserved.
      </div>
    </footer>
  );
}
