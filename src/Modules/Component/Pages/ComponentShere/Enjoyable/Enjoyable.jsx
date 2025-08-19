import React from "react";
import { useTranslation } from "react-i18next";

import img1 from "../../../../../assets/food.jpg";
import img2 from "../../../../../assets/drink.jpg";
import './Enjoyable.css';
export default function Enjoyable() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center">

      <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
        <p className="text-sm font-semibold text-green-500 uppercase tracking-widest mb-2">
          {t("enjoyable.small_title")}
        </p>

        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
          {t("enjoyable.big_title")}
        </h2>

        <p className="text-gray-600 mb-8">{t("enjoyable.paragraph")}</p>

        <div className="space-y-6 mb-8">
      
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-green-500 mr-3 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">
                {t("enjoyable.features.breakfast_title")}
              </h4>
              <p className="text-gray-600">
                {t("enjoyable.features.breakfast_desc")}
              </p>
            </div>
          </div>

        
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-green-500 mr-3 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">
                {t("enjoyable.features.quality_title")}
              </h4>
              <p className="text-gray-600">
                {t("enjoyable.features.quality_desc")}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-green-500 mr-3 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">
                {t("enjoyable.features.restaurant_title")}
              </h4>
              <p className="text-gray-600">
                {t("enjoyable.features.restaurant_desc")}
              </p>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          {t("enjoyable.button")}
        </a>
      </div>
      <div className="lg:w-1/2 relative flex justify-center items-center">
        <div className="relative w-full h-auto lg:h-[650px] flex flex-col gap-4 lg:block overflow-hidden">
          <img
            src={img2}
            alt="Person eating food"
            className="w-full h-auto rounded-2xl object-cover shadow-xl lg:absolute lg:bottom-20 lg:left-0 lg:w-[48%]"
          />

          <img
            src={img1}
            alt="Pouring a drink"
            className="w-full h-auto rounded-2xl object-cover shadow-xl lg:absolute lg:top-12 lg:right-0 lg:w-[48%]"
          />
        </div>
      </div>
    </section>
  );
}
