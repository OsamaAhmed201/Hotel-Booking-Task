import React from 'react';
import { FaUsers, FaBed, FaBath } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import imgRoom1 from "../../../../../assets/room1.jpg";
import imgRoom2 from "../../../../../assets/room2.jpg";
import imgRoom18 from "../../../../../assets/room6.jpg";

const rooms = [
  {
    img: imgRoom1,
    labelKey: "flxyland.hotel",
    titleKey: "flxyland.hotelAlAzhar",
    guests: 2,
    beds: 2,
    baths: 1,
  },
  {
    img: imgRoom2,
    labelKey: "flxyland.room",
    titleKey: "flxyland.deluxeRoom",
    guests: 2,
    beds: 2,
    baths: 1,
  },
  {
    img: imgRoom18,
    labelKey: "flxyland.room",
    titleKey: "flxyland.deluxeRoom",
    guests: 2,
    beds: 2,
    baths: 1,
  },
];

export default function Flxyland() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-10 p-4 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <span className="bg-white text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
          {t("flxyland.hotelNews")}
        </span>
        <h2 className="text-3xl font-bold mb-8 py-6 text-zinc-600 md:w-4/12 mx-auto w-full">
          {t("flxyland.getUpdate")}
        </h2>

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 relative cursor-pointer group"
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-52 md:h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      src={room.img}
                      alt={t(room.titleKey)}
                    />
                  </div>

                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {t(room.labelKey)}
                  </span>

                  <div className="p-4">
                    <h2 className="text-lg md:text-xl font-bold mb-2">{t(room.titleKey)}</h2>

                    <p className="text-gray-700 text-sm mb-3 flex flex-wrap justify-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaUsers className="text-green-600" /> {room.guests} {t("flxyland.guests")}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaBed className="text-green-600" /> {room.beds} {t("flxyland.beds")}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaBath className="text-green-600" /> {room.baths} {t("flxyland.baths")}
                      </span>
                    </p>

                    <p className="text-gray-600 text-sm mb-2">
                      {t("flxyland.description")}
                    </p>

                    <a
                      href="#"
                      className="flex items-center justify-center text-green-500 hover:text-green-700 text-sm font-semibold"
                    >
                      {t("flxyland.readMore")} <FiArrowUpRight className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
