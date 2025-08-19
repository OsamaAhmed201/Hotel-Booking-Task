import React from 'react'
import './servicess.css'
import img1 from '../../../../../assets/IMG1.jpg'
import img2 from '../../../../../assets/IMG2.jpg'
import img3 from '../../../../../assets/IMG3.jpg'
import img4 from '../../../../../assets/IMG4.jpg'
import video from '../../../../../assets/video.mp4'
import { MdBikeScooter, MdSpa } from 'react-icons/md'
import { FaHotTub } from 'react-icons/fa'
import { FaPersonSwimming } from 'react-icons/fa6'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

export default function Servicess() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row p-6 bg-gray-50 px-4 md:px-20 py-20">
          <div className="md:w-1/2 p-4 px-11 ">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide">
              {t('services.section_small_title')}
            </h3>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {t('services.section_big_title')}
            </h1>
            <p className="text-gray-600 mt-4">
              {t('services.section_paragraph')}
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              {t('services.button')}
            </button>
          </div>

          <div className="md:w-1/2 p-4 rounded cursor-pointer px-11 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg">

              {/* Fitness */}
              <div className="h-55 bg-gray-300 relative rounded-lg overflow-hidden">
                <img src={img1} alt="Fitness" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute contanin_services flex flex-col items-center justify-center text-center p-4">
                  <MdBikeScooter style={{ fontSize: "50px", marginBottom: "10px" }} />
                  <h2 className="text-2xl font-bold mb-2">{t('services.fitness_title')}</h2>
                  <p className="text-sm max-w-xs">{t('services.fitness_desc')}</p>
                </div>
              </div>

              {/* Jacuzzi */}
              <div className="h-55 bg-gray-300 relative rounded-lg overflow-hidden">
                <img src={img2} alt="Jacuzzi" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute contanin_services flex flex-col items-center justify-center text-center p-4">
                  <FaHotTub style={{ fontSize: "50px", marginBottom: "10px" }} />
                  <h2 className="text-2xl font-bold mb-2">{t('services.jacuzzi_title')}</h2>
                  <p className="text-sm max-w-xs">{t('services.jacuzzi_desc')}</p>
                </div>
              </div>

              {/* Swimming */}
              <div className="h-55 bg-gray-300 relative rounded-lg overflow-hidden">
                <img src={img3} alt="Swimming" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute contanin_services flex flex-col items-center justify-center text-center p-4">
                  <FaPersonSwimming style={{ fontSize: "50px", marginBottom: "10px" }} />
                  <h2 className="text-2xl font-bold mb-2">{t('services.swimming_title')}</h2>
                  <p className="text-sm max-w-xs">{t('services.swimming_desc')}</p>
                </div>
              </div>

              {/* SPA */}
              <div className="h-55 bg-gray-300 relative rounded-lg overflow-hidden">
                <img src={img4} alt="SPA" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute contanin_services flex flex-col items-center justify-center text-center p-4">
                  <MdSpa style={{ fontSize: "50px", marginBottom: "10px" }} />
                  <h2 className="text-2xl font-bold mb-2">{t('services.spa_title')}</h2>
                  <p className="text-sm max-w-xs">{t('services.spa_desc')}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-50 md:h-96 overflow-hidden ">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />

      </div>


    </>
  )
}
