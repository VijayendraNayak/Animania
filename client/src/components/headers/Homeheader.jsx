import React from "react";
import { useState, useRef, useEffect } from "react";
import { Sidebar } from "../Sidebar";

export const Homeheader = () => {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef(null);
  const closesidebar = () => {
    setSidebar(false);
  };
  useEffect(() => {
    if (sidebar && ref.current && !ref.current.contains(target.event)) {
      closesidebar();
    }
    document.addEventListener('mousedown', closesidebar);
    return () => {
      document.removeEventListener('mousedown', closesidebar);
    };
  },[sidebar]);

  const opensidebar = () => {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };
  return (
    <div>
      {sidebar && <Sidebar sidebar={sidebar} />}
      <div className="flex justify-between p-4 items-center">
        <div className="flex items-center gap-2">
          <div onClick={opensidebar}>
            <i class="bi bi-list"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="28"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div>
            {sidebar ? (
              <div className="pl-52">
                <span className="font-semibold text-2xl text-purple-600">
                  Ani
                </span>
                <span className="font-semibold text-xl text-purple-400">
                  Mania
                </span>
              </div>
            ) : (
              <div>
                <span className="font-semibold text-2xl text-purple-600">
                  Ani
                </span>
                <span className="font-semibold text-xl text-purple-400">
                  Mania
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="border rounded-lg border-purple-500 text-purple-500 px-4 py-2 hover:scale-110 hover:bg-purple-500 hover:text-white transition-transform duration-200">
            <button type="button" className="font-semibold">
              Login
            </button>
          </div>
          <div>
            <form action="/search" method="get">
              <input
                type="search"
                class="peer  border-purple-500 cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-purple-500 focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-6  h-8 w-12 border-r border-transparent stroke-purple-500 px-3.5 peer-focus:border-purple-500 peer-focus:stroke-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
