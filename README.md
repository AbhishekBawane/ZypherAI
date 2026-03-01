
# ZypherAI – Modern AI Assistant Frontend

ZypherAI is a frontend project inspired by industry-leading AI platforms such as ChatGPT, Copilot, Humata, and OpenAI’s tools.
The project demonstrates how to design and implement AI-inspired user experiences using Next.js, React, and TailwindCSS.

## 🎯 Objective

The goal of ZypherAI is to replicate and enhance the user interface patterns of existing AI tools.
By rebuilding these features, the project showcases skills in:

Responsive UI design

Modern React patterns (App Router, Hooks, Client Components)

Interactive state-driven components

Scalable, maintainable code practices

 1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Install required libraries for the assignment** , ie Tailwind CSS, Heroicons
3. **Start the JSON Server (Backend API)**
   ```bash
   npm run server
   ```
   The API will run on `http://localhost:3001`

4. **Start the Development Server (in a new terminal)**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`
🚀 Features
🔹 Navbar & Sidebar

Responsive navbar inspired by YouTube and ChatGPT.

Sidebar navigation with collapsible menu and dropdown for Settings.

+ New Chat button to mimic ChatGPT’s quick-start workflow.

🔹 Hero Section

Prominent landing hero with background image.

Centered call-to-action: “Ask me about”, encouraging interaction.

Fully responsive for mobile and desktop layouts.

🔹 Search & Chat Bar

Behavior modeled after ChatGPT’s input area:

On first visit, input bar is centered on the screen.

After first query, bar shifts to the bottom (chat-style).

Messages appear in chat bubbles (user on right, AI on left).

Default AI response: “🎉 Thank You For Trying My Front-end Project 🎉”.

🔹 AI Model Selector

Dropdown for selecting between multiple AI models:

ChatGPT-1, Humata, Copilate, OpenAI.

Selector persists above input, allowing users to switch AI mid-chat.

🔹 Pricing Section

SaaS-style pricing tiers: Free, Personal, Family, Pro.

Different feature sets rendered dynamically from an array.

Inspired by subscription models from OpenAI and other SaaS platforms.

🔹 Authentication Page

Login & Signup forms with standard fields:

Username, Email, Password, Confirm Password.

Button text changes dynamically based on mode (Sign Up / Log In).

🔹 FAQ Section

Collapsible accordion for common questions.

Minimalistic design similar to landing pages of modern AI tools.

🛠️ Tech Stack

Framework: Next.js (App Router, TypeScript ready)

Frontend Library: React (Hooks, Client Components)

Styling: TailwindCSS

Icons: Heroicons, React-Icons

🌐 Deployment

Deploy easily on Vercel.
[(Add your live project link here once deployed.)](https://zypher-ai-og1.vercel.app)

📌 Future Enhancements

Integration with a real AI backend (e.g., OpenAI API).

Persistent chat history per user.

Authentication with JWT or OAuth.

Theme toggle (dark/light).

📖 Conclusion

ZypherAI is a practice frontend project showcasing how to reimagine AI-powered user experiences.
It combines inspirations from ChatGPT, Copilot, Humata, and YouTube, while building a unique brand identity as ZypherAI.

This project highlights my ability to:

Recreate complex UIs from reference products

Write clean, modular, and scalable React/Next.js code

Deliver responsive, accessible, and production-ready frontend solutions
