import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative FooterImg text-gray-300 py-12">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{t("footer.name")}</h2>
          <p className="text-sm leading-6">{t("footer.description")}</p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-green-600 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-green-600 rounded-full transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-green-600 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-green-600 rounded-full transition">
              <FaBehance />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.explore")}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500">{t("footer.about")}</a></li>
            <li><a href="#" className="hover:text-green-500">{t("footer.pricing")}</a></li>
            <li><a href="#" className="hover:text-green-500">{t("footer.staff")}</a></li>
            <li><a href="#" className="hover:text-green-500">{t("footer.news")}</a></li>
            <li><a href="#" className="hover:text-green-500">{t("footer.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.contact")}</h3>
          <p className="text-sm leading-6">{t("footer.address")}</p>
          <p className="mt-3 text-sm">{t("footer.phone")}</p>
          <p className="text-sm">{t("footer.email")}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.newsletter")}</h3>
          <form className="bg-gray-800 p-4 rounded-lg">
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="w-full px-3 py-2 rounded bg-gray-700 text-sm text-gray-200 focus:outline-none"
            />
            <label className="flex items-center gap-2 mt-3 text-xs">
              <input type="checkbox" className="accent-green-500" />
              {t("footer.terms")}
            </label>
          </form>
        </div>
      </div>
    </footer>
  );
}
