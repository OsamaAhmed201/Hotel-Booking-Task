import person1 from '../../../../../assets/per1.jpg'
import hotel3 from '../../../../../assets/hotel3.jpg'
import { useTranslation } from 'react-i18next'

const Feedback = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row items-center p-6 bg-gray-50">

            <div className="w-full md:w-1/2 p-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={hotel3}
                        alt={t("feedback.hotel_alt")}
                        className="w-full object-cover"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 p-4 rounded-lg">
                <div className="bg-green-50 md:w-10/12 mx-auto p-6 shadow-md">

                    <h3 className="text-sm text-green-600 uppercase tracking-wide mb-2 w-24 bg-white rounded-xl">
                        {t("feedback.title_small")}
                    </h3>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 md:w-8/12 w-full">
                        {t("feedback.title_big")}
                    </h2>

                    <div className="flex items-center mb-4">
                        <div>
                            <span className="text-yellow-400 text-2xl">★★★★★</span>
                            <p className="ml-2 text-gray-600">
                                {t("feedback.testimonial_text")}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img
                            src={person1}
                            alt={t("feedback.person_name")}
                            className="w-14 h-14 rounded-full mr-3"
                        />
                        <div>
                            <p className="text-gray-800 font-semibold">{t("feedback.person_name")}</p>
                            <p className="text-gray-500 text-sm">{t("feedback.person_role")}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Feedback;
