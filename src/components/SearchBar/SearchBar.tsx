"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedAI, setSelectedAI] = useState<string>("ChatGPT-1"); // Default AI

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const newMessages: Message[] = [
        ...messages,
        { sender: "user", text: query },
      ];

      const aiReply =
        messages.length === 0
          ? "🎉 Thank You For Trying My Front-end Project 🎉"
          : `${selectedAI} says: You asked → ${query}`;

      newMessages.push({ sender: "ai", text: aiReply });

      setMessages(newMessages);
      setQuery("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-[80px] bg-gray-100 text-black">
      {/* Chat Messages */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-6 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] shadow ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area (AI selector always above input) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
        {/* AI Selector */}
        <div className="p-3 bg-gray-200 text-gray-900 rounded-lg mb-3">
          <p className="mb-2 text-sm font-semibold">Choose AI Assistant:</p>
          <div className="flex flex-wrap gap-2">
            {["ChatGPT-1", "Humata", "Copilate", "OpenAI"].map((ai) => (
              <button
                key={ai}
                className={`px-3 py-1 rounded text-sm ${
                  selectedAI === ai
                    ? "bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                onClick={() => setSelectedAI(ai)}
              >
                {ai}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="w-full flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 border border-gray-300 shadow-md"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Ask me anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-medium text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
