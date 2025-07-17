"use client";

import PageWrapper from "@/components/PageWrapper";
import DishTable from "@/components/DishTable";
import { indianData } from "@/data/indian";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Indian() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-16 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                🍛 {t("indianTitle")}
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                {t("indianDescription")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <DishTable dishes={indianData} />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
