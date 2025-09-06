import { motion } from "framer-motion";
import brain2 from "../iconImages/brain2.png";
import { HeroButton } from "./HeroButton";


interface NavbarIconProps {
  src: string;
  alt?: string;
  className?: string;
}

export function NavbarIconcomponent2({ src, alt, className }: NavbarIconProps) {
  return (
    <div className={className}>
      <img src={src} alt={alt || "Icon"} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gray-50 overflow-hidden flex items-start justify-center px-4 pt-12 pb-8 sm:pt-14 sm:pb-12">
        <div className="flex flex-col items-center text-center max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <NavbarIconcomponent2 src={brain2} />
          </motion.div>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Save, Organize, Share
          </motion.div>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            All in One Place
          </motion.div>

          <motion.div
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-600 mb-8 sm:mb-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Store, analyze, and access your Reddit, YouTube, and X links with intelligent embeddings.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <HeroButton />
          </motion.div>
        </div>

        {/* Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[15%] left-[15%] w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg opacity-70"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[45%] left-[5%] w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-lg opacity-70"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-[25%] right-[8%] w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg opacity-70"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="absolute top-[8%] left-[2%] w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-14 xl:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          />
          <motion.div
            className="absolute top-[5%] right-[20%] w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-lg opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[10%] w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[12%] w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-14 xl:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 1 }}
          />
        </div>
      </div>
    </div>
  );
}