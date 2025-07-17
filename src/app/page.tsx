"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Flame } from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Grills",
      href: "/grills",
      image: "🔥",
      bgColor: "from-red-500 to-orange-600",
    },
    {
      title: "Pasta",
      href: "/pasta",
      image: "🍝",
      bgColor: "from-yellow-500 to-orange-500",
    },
    {
      title: "Seafood",
      href: "/seafood",
      image: "🦐",
      bgColor: "from-blue-500 to-teal-600",
    },
    {
      title: "Indian Specials",
      href: "/indian",
      image: "🍛",
      bgColor: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Indian <span className="text-[#BF9040]">Fire</span>
              <br />
              Meets Modern
              <br />
              <span className="text-[#BF9040]">Flavor</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-lg">
              Experience the fusion of traditional Indian spices with
              contemporary culinary artistry in Montreal&apos;s heart.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#BF9040] hover:bg-[#A67A35] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group">
                Order on Uber Eats
                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#BF9040] text-[#BF9040] hover:bg-[#BF9040] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group">
                Order on DoorDash
                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl md:text-9xl opacity-80">
              🍽️
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#BF9040] rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Flavors That Tell a Story */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#BF9040]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative">
              <div className="relative">
                {/* Main image placeholder with artistic overlay */}
                <div className="aspect-square bg-gradient-to-br from-[#BF9040]/20 to-orange-600/30 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-8xl opacity-60">
                      🌶️
                    </motion.div>
                  </div>

                  {/* Floating spice elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-8 right-8 text-4xl">
                    🍃
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-12 left-8 text-3xl">
                    ✨
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#BF9040]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Right side - Storytelling Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-block">
                  <span className="text-[#BF9040] font-medium text-lg tracking-wider uppercase">
                    Our Philosophy
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
                  Flavors That Tell a{" "}
                  <span className="text-[#BF9040] relative">
                    Story
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#BF9040]/30 rounded-full"></div>
                  </span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="prose prose-lg max-w-none">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
                  <em>
                    From the heart of India to the soul of Montreal – we serve
                    history on a plate.
                  </em>
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Every dish at Sherbrooke Grill & Pizza carries the whispers of ancient
                  spice routes, the warmth of family recipes passed down through
                  generations, and the innovative spirit of contemporary
                  culinary artistry. We don&apos;t just cook food; we craft
                  experiences that bridge cultures and create memories.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our kitchen is where tradition meets innovation, where each
                  ingredient tells its own story, and where every meal becomes a
                  celebration of heritage, passion, and the beautiful fusion of
                  East meets West.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center bg-[#BF9040] hover:bg-[#A67A35] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Meet Our Chef
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  href="#menu"
                  className="group inline-flex items-center bg-transparent border-2 border-[#BF9040] text-[#BF9040] hover:bg-[#BF9040] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Explore Our Menu
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Block */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="text-[#BF9040]">Sherbrooke Grill & Pizza</span>?
            </h2>
            <div className="text-6xl mb-8">🍽️</div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-300">
            Born from a passion for culinary fusion, Sherbrooke Grill & Pizza represents the
            bridge between traditional Indian flavors and modern gastronomy. Our
            name reflects our commitment to creating extraordinary dining
            experiences that honor heritage while embracing innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <Link
              href="/about"
              className="inline-flex items-center bg-[#BF9040] hover:bg-[#A67A35] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 group">
              Explore Our Vision
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Explore Menu Grid */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-[#BF9040]">Menu</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four distinct categories, endless possibilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl h-80 cursor-pointer">
                <Link href={category.href}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.image}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {category.title}
                    </h3>

                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                        See Menu
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Now Banner */}
      <section className="py-16 bg-gradient-to-r from-[#BF9040] to-[#A67A35] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl mb-4">
              <Flame size={48} />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hungry Now?</h2>
            <p className="text-xl mb-8 opacity-90">
              Order your favorite dishes for delivery or pickup
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#BF9040] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                Order on Uber Eats
                <ExternalLink size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#BF9040] px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                Order on DoorDash
                <ExternalLink size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
