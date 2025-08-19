import React from "react";
import { FaFacebookF, FaInstagram, FaPlus, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import img1 from "../../../../../assets/chef.jpg";
import img2 from "../../../../../assets/chef2.jpg";
import img3 from "../../../../../assets/superF.jpg";
import img4 from "../../../../../assets/ww.jpg";

const staff = [
    {
        nameKey: "staff.michaelDean",
        roleKey: "staff.chefMaster",
        img: img1,
    },
    {
        nameKey: "staff.michaelDean",
        roleKey: "staff.assistantChef",

        img: img2,
    },
    {
        nameKey: "staff.arnoldTaylor",
        roleKey: "staff.roomCleaner",
        img: img4,
    },
    {
        nameKey: "staff.michaelDean",
        roleKey: "staff.supervisor",
        img: img3,
    },
];

export default function Staff() {
    const { t } = useTranslation();

    return (
        <section className="bg-green-700 py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="bg-white text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {t("staff.title")}
                </span>
                <h2 className="text-3xl font-bold text-white mt-4">
                    {t("staff.subtitle")}
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staff.map((person, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl overflow-hidden group flex flex-col"
                        >
                            <div className="relative w-11/12 mx-auto">
                                <img
                                    src={person.img}
                                    alt={t(person.nameKey)}
                                    className="w-full object-cover rounded-t-lg"
                                />

                                <div
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center 
                                        gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-lg"
                                >
                                    <a href="#" className="text-white text-xl hover:text-green-400">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="text-white text-xl hover:text-green-400">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="text-white text-xl hover:text-green-400">
                                        <FaInstagram />
                                    </a>
                                </div>
                                <button className="absolute bottom-3 right-3 bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition">
                                    <FaPlus />
                                </button>
                            </div>
                            <div className="w-11/12 mx-auto bg-white p-4 text-center shadow-md rounded-b-2xl">
                                <h3 className="text-lg font-bold text-gray-800">{t(person.nameKey)}</h3>
                                <p className="text-gray-500 text-sm">{t(person.roleKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
