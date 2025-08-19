import './about.css'
import aboutImg from '../../../../../assets/3.jpeg'
import personImg from '../../../../../assets/person.jpg'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <section>
                <section className="booking-bar bg-[#f3f7f5] py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <form className="booking-form flex flex-wrap gap-4">

                            <div className="field flex flex-col flex-1 min-w-[200px]">
                                <label htmlFor="checkin">Check In</label>
                                <input
                                    type="date"
                                    id="checkin"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="field flex flex-col flex-1 min-w-[200px]">
                                <label htmlFor="checkout">Check Out</label>
                                <input
                                    type="date"
                                    id="checkout"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="field flex flex-col flex-1 min-w-[200px]">
                                <label htmlFor="room">Room</label>
                                <select
                                    id="room"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                >
                                    <option>Room 1</option>
                                    <option>Room 2</option>
                                    <option>Room 3</option>
                                </select>
                            </div>

                            <div className="field flex flex-col flex-1 min-w-[200px]">
                                <label htmlFor="adults">Adults</label>
                                <select
                                    id="adults"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                >
                                    <option>1 Adult</option>
                                    <option>2 Adults</option>
                                    <option>3 Adults</option>
                                </select>
                            </div>

                            <div className="field flex flex-col flex-1 min-w-[200px]">
                                <label htmlFor="children">Children</label>
                                <select
                                    id="children"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                >
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>

                            <div className="field flex flex-col w-full">
                                <label>&nbsp;</label>
                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition w-full"
                                >
                                    Check Now
                                </button>
                            </div>

                        </form>
                    </div>
                </section>
                <section className="bg-[#f3f7f5] py-16 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="relative">
                            <img src={aboutImg} alt="Hotel" className="rounded-2xl shadow-lg" />
                            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 hidden md:block ">
                                <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 font-bold text-sm text-center leading-tight border-4 border-green-500 rotate-[20deg]">
                                    <span className="rotate-[-20deg]">
                                        {t("about.years")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="px-4 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                                {t("about.badge")}
                            </span>
                            <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                                {t("about.title")}
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {t("about.description")}
                            </p>


                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
                                {t("about.features", { returnObjects: true }).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <VscWorkspaceTrusted style={{ color: "green", fontSize: "20px" }} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center gap-3">
                                <img src={personImg} alt="CEO" className="w-11 h-11 rounded-full border" />
                                <div>
                                    <p className="font-semibold text-gray-900">{t("about.ceo.name")}</p>
                                    <p className="text-gray-500 text-sm">{t("about.ceo.role")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



        </>
    )
}
