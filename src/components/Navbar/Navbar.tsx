"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import  Image  from "next/image"
import logo from "@/Image/Logo-ZA.png"
import { Assistant } from "next/font/google";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuitems =[
     {assistant: 'Recent Search', herf: '#'},
     {assistant: 'APIs', herf: '#'},
      {assistant: 'Price', herf: '/price'},
      {assistant: 'About us', herf: '/about'} 
    ]
  const router = useRouter();
  const [drop, setDrop] = useState(false)
  return (
    <div className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
     
        <div className="flex h-16 items-center justify-between">
     
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <button className="bg-black text-xl font-bold flex justice-center text-ml" onClick={()=>router.push("/home")}><Image src={logo} alt="Zypher AI" width={40} height={40} className="me-2"/>ZyperAI</button>
            <div className="flex justify-center hidden sm:ml-7 md:block">
                 {  menuitems.map((menuitem, index)=>(
                    <button className="mx-1 me-2 hover:bg-gray-500 p-2" key={index} onClick={()=>router.push(menuitem.herf)}>{menuitem.assistant}</button>
                 ))
                    }
                
            </div>
          </div>

          {/* Right: + New Chat Button */}
          <button className="flex items-center gap-2 rounded-md bg-blue-900 px-4 py-2 
          text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={()=>router.push("/search")}>
            <PlusIcon className="h-5 w-5" />
            New Chat
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
       <div className="fixed inset-y-0 left-0 z-40 w-64 bg-black p-4 flex flex-col">
  {/* Sidebar Header */}
  <div className="flex items-center justify-center mb-6">
    <button
      onClick={() => setSidebarOpen(false)}
      className="rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none"
    >
      <XMarkIcon className="h-6 w-6" />
    </button>
    <button className="bg-black text-xl font-bold flex items-center">
      <Image
        src={logo}
        alt="Zypher AI"
        width={40}
        height={40}
        className="me-2"
      />
      ZyperAI
    </button>
  </div>

  {/* Sidebar Links */}
  <nav className="space-y-2 flex-1 overflow-y-auto">
    <div className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
      Library
    </div>

    <div
      className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
      onClick={() => setDrop(!drop)}
    >
      Settings
    </div>
    <div className={`${drop ? "block" : "hidden"} ml-6 space-y-2`}>
      <div className="px-2 py-1 text-gray-300 hover:bg-blue-600 rounded">
        Profile
      </div>
      <div className="px-2 py-1 text-gray-300 hover:bg-blue-600 rounded">
        Performance
      </div>
      <div className="px-2 py-1 text-gray-300 hover:bg-blue-600 rounded">
        Account
      </div>
      <div className="px-2 py-1 text-red-400 hover:bg-red-600 rounded">
        Logout
      </div>
    </div>

    <div className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
      Search Recent Tab
    </div>
  </nav>

  {/* Bottom Actions */}
  <div className="mt-4">
    <button className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-900 px-4 py-2 text-white hover:bg-blue-800">
      <PlusIcon className="h-5 w-5" />
      New Chat
    </button>
  </div>

  <div className="mt-6 flex items-center justify-center gap-3 text-xl text-gray-300">
    <Image
      src={logo}
      alt="User Account"
      width={32}
      height={32}
      className="bg-blue-500 rounded-full"
    />
    <span>Account</span>
  </div>
</div>

      )}
    </div>
  );
}
