import React, { useState, useRef, useEffect } from "react";
import CardSwiper from "./CardSwiper";
import "./CardSwiper.css";
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/effect-fade";
// import "swiper/css/zoom";

import "./AsideNavbar.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const AsideNavbar = () => {
  const [display, setDisplay] = useState("none");
  const [displayAsideNav, setDisplayAsideNav] = useState("block");
  const [showAsideNavbar, setShowAsideNavbar] = useState(true);

  const showDropdownList = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  const hideAsideNavbar = () => {
    if (displayAsideNav === "block") {
      setDisplayAsideNav("none");
    } else {
      setDisplayAsideNav("block");
    }
  };

  const disable_button = () => {
    setShowAsideNavbar({ show_button: !showAsideNavbar });
  };

  // init Swiper:
  // const swiper = new Swiper(".swiper", {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  //   speed: 400,
  //   spaceBetween: 100,
  //   a11y: {
  //     prevSlideMessage: "Previous slide",
  //     nextSlideMessage: "Next slide",
  //   },
  //   allowSlideNext: true,
  //   allowSlidePrev: true,
  //   allowTouchMove: true,
  //   autoplay: true,
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   loop: true,
  //   /*autoplay: true,*/
  //   autoplay: {
  //     delay: 6000,
  //     disableOnInteraction: false,
  //   },
  //   speed: 1000,
  //   autoHeight: true,
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination-t0",
  //     type: "bullets",
  //     clickable: true,
  //   },
  // });

  return (
    <>
      <div className="bg-white">
        <div>
          {/*  
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    */}
          <div
            className="relative z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* 
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
       */}
            {/* inset-0 bg-black bg-opacity-25 */}
            <div className="fixed "></div>

            <div
              className="fixed inset-0 z-40 flex"
              style={{ display: displayAsideNav }}
            >
              {/*  
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        */}

              <div
                className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
                style={{ display: displayAsideNav }}
                // style={display === "block" ? "none" : "block"}
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={hideAsideNavbar}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Filters  */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 text-left font-medium text-gray-900"
                  >
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Totes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Backpacks
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Travel Bags
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Hip Bags
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Laptop Sleeves
                      </a>
                    </li>
                  </ul>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      {/* Expand/collapse section button */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Color</span>
                        <span className="ml-6 flex items-center">
                          {/* Expand icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* Collapse icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section state. */}
                    <div className="pt-6" id="filter-section-mobile-0">
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-color-0"
                            name="color[]"
                            value="white"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-color-0"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            White
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-color-1"
                            name="color[]"
                            value="beige"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-color-1"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Beige
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-color-2"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Blue
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-color-3"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Brown
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-color-4"
                            name="color[]"
                            value="green"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-color-4"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Green
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="fi/lter-mobile-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-color-5"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      {/* Expand/collapse section button */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category
                        </span>
                        <span className="ml-6 flex items-center">
                          {/* Expand icon, show/hide based on section open state. */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* Collapse icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section state.  */}
                    <div className="pt-6" id="filter-section-mobile-1">
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-category-0"
                            name="category[]"
                            value="new-arrivals"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-category-0"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            New Arrivals
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-category-1"
                            name="category[]"
                            value="sale"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-category-1"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Sale
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-category-2"
                            name="category[]"
                            value="travel"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-category-2"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Travel
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-category-3"
                            name="category[]"
                            value="organization"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-category-3"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Organization
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mo/bile-category-4"
                            name="category[]"
                            value="accessories"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-category-4"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            Accessories
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      {/* Expand/collapse section button  */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Size</span>
                        <span className="ml-6 flex items-center">
                          {/* Expand icon, show/hide based on section open state. */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* Collapse icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section state.  */}
                    <div className="pt-6" id="filter-section-mobile-2">
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-size-0"
                            name="size[]"
                            value="2l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-size-0"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            2L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-size-1"
                            name="size[]"
                            value="6l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-size-1"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            6L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-size-2"
                            name="size[]"
                            value="12l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-size-2"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            12L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-size-3"
                            name="size[]"
                            value="18l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-size-3"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            18L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-mobile-size-4"
                            name="size[]"
                            value="20l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-size-4"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            20L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filte/r-mobile-size-5"
                            name="size[]"
                            value="40l"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-mobile-size-5"
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            40L
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={showDropdownList}
                    >
                      Sort
                      <svg
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95" */}

                  <div
                    style={{ display: display }}
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      {/* Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500" */}

                      <a
                        href="#"
                        className="font-medium text-gray-900 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Most Popular
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Best Rating
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        Newest
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                      >
                        Price: Low to High
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-4"
                      >
                        Price: High to Low
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              {/* flex justify-between */}
              {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"> */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 adjust-ui-col">
                {/*  Filters  */}
                {/* w-1/4 */}
                <form className="hidden lg:block  ">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 text-left"
                  >
                    <li>
                      <a href="#">Totes</a>
                    </li>
                    <li>
                      <a href="#">Backpacks</a>
                    </li>
                    <li>
                      <a href="#">Travel Bags</a>
                    </li>
                    <li>
                      <a href="#">Hip Bags</a>
                    </li>
                    <li>
                      <a href="#">Laptop Sleeves</a>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* Expand/collapse section button */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Color</span>
                        <span className="ml-6 flex items-center">
                          {/* Expand icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* Collapse icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section state. */}
                    <div className="pt-6" id="filter-section-0">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="white"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            White
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="beige"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-1"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Beige
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Blue
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-3"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Brown
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-4"
                            name="color[]"
                            value="green"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-4"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Green
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-5"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* Expand/collapse section button  */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category
                        </span>
                        <span className="ml-6 flex items-center">
                          {/* Expand icon, show/hide based on section open state. */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* Collapse icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section state. */}
                    <div className="pt-6" id="filter-section-1">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="filter-category-0"
                            name="category[]"
                            value="new-arrivals"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            New Arrivals
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-1"
                            name="category[]"
                            value="sale"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-1"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Sale
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-2"
                            name="category[]"
                            value="travel"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Travel
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-3"
                            name="category[]"
                            value="organization"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-3"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Organization
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-4"
                            name="category[]"
                            value="accessories"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-4"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Accessories
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* Expand/collapse section button */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Size</span>
                        <span className="ml-6 flex items-center">
                          {/* Expand icon, show/hide based on section open state. */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* Collapse icon, show/hide based on section open state.  */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section state. */}
                    <div className="pt-6" id="filter-section-2">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="filter-size-0"
                            name="size[]"
                            value="2l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            2L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-1"
                            name="size[]"
                            value="6l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-1"
                            className="ml-3 text-sm text-gray-600"
                          >
                            6L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-2"
                            name="size[]"
                            value="12l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            12L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-3"
                            name="size[]"
                            value="18l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-3"
                            className="ml-3 text-sm text-gray-600"
                          >
                            18L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-4"
                            name="size[]"
                            value="20l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-4"
                            className="ml-3 text-sm text-gray-600"
                          >
                            20L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-5"
                            name="size[]"
                            value="40l"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-5"
                            className="ml-3 text-sm text-gray-600"
                          >
                            40L
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Cards */}
                {/* <div className="swiper w-3/4">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <CardSwiper />
                    </div>
                    <div className="swiper-slide">
                      <CardSwiper />
                    </div>
                    <div className="swiper-slide">
                      <CardSwiper />
                    </div>
                    <div className="swiper-slide">
                      <CardSwiper />
                    </div>
                    <div className="swiper-slide">
                      <CardSwiper />
                    </div>
                    <div className="swiper-slide">
                      <CardSwiper />
                    </div>

                    <div className="swiper-button-prev"></div>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar"></div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div> */}
                {/* w-3/4 */}
                <div className="flex-col col-span-3 text-left">
                  {/* Category and section Sebaka*/}

                  <div>
                    <div className="flex category-header items-center cursor-pointer">
                      <div className="icon-holder me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>

                      <h1>Fany Sebaka</h1>
                    </div>
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={3}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  {/* Category and section */}
                  <div>
                    <div className="flex category-header mt-8 items-center cursor-pointer">
                      <div className="icon-holder me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>

                      <h1>Fany Kahraba</h1>
                    </div>
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={3}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {/* Category and section Takyeefat*/}

                  <div>
                    <div className="flex category-header mt-8 items-center cursor-pointer">
                      <div className="icon-holder me-3">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                            clip-rule="evenodd"
                          />
                        </svg> */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>

                      <h1>Fany Takyeefat</h1>
                    </div>
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={3}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <CardSwiper />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default AsideNavbar;
