import "./header.css";
import { FiArrowUpRight } from "react-icons/fi";
import video from "../../../../../assets/bgvid.mp4";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
export default function HeaderHome() {
    const { t } = useTranslation();

    return (
        <>
            <header className="relative w-full h-screen overflow-hidden">
                <video
                    src={video}
                    type="video/mp4"
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
                <div className="relative z-20 h-full flex flex-col">
                  

                    <section className="flex flex-1 items-center justify-center text-center px-4">
                        <div className="max-w-3xl text-white">
                            <h1 className="text-4xl md:text-6xl font-bold leading-snug">
                                {t("header.title1")} <br />
                                <span className="text-yellow-400">{t("header.title2")}</span>
                            </h1>
                            <p className="mt-4 text-sm md:text-lg text-gray-200">
                                {t("header.desc")}  {t("header.desc2")}
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition">
                                    {t("header.btnExplore")} <FiArrowUpRight className="ml-2" />
                                </button>
                                <button className="flex items-center bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md font-medium transition">
                                    {t("header.btnServices")} <FiArrowUpRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
        </>
    );
}
