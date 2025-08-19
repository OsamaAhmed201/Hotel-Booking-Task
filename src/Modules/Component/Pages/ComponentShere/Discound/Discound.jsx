import React from 'react'
import './Discound.css'
import hotel1 from '../../../../../assets/hotel4.jpg'
import hotel2 from '../../../../../assets/hotel2.jpg'
import { FiArrowUpRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Discound() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-gray-100 py-16">
                <div className="container w-full md:w-7/12 mx-auto px-4 md:px-8">
                    
                    <div className="text-center mb-8 w-full md:w-6/12 mx-auto">
                        <p className="uppercase text-sm font-semibold text-green-500 tracking-wider">
                            {t("discount.small_title")}
                        </p>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {t("discount.big_title")}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="bg-white rounded-xl shadow-md relative cursor-pointer group">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={hotel1}
                                    alt="Hotel"
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-4 left-4 bg-white text-green-500 font-semibold px-3 py-1 rounded-full shadow-sm">
                                {t("discount.card1.offer")}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {t("discount.card1.title")}
                                </h3>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2">
                                    {t("discount.card1.button")} <FiArrowUpRight />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md relative cursor-pointer group">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={hotel2}
                                    alt="Hotel"
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-4 left-4 bg-white text-green-500 font-semibold px-3 py-1 rounded-full shadow-sm">
                                {t("discount.card2.offer")}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {t("discount.card2.title")}
                                </h3>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2">
                                    {t("discount.card2.button")} <FiArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
