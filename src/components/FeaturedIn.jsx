import { motion } from "framer-motion";
const FeaturedIn = () => {
  return (
    <div className="px-20 pt-8 bg-[#11334f]">
      <motion.h1
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='className="sm:text-5xl text-3xl pt-4 text-white text-center -mb-12 sm:-mb-16'
      >
        Nos References Clients
      </motion.h1>
      <div className="grid place-items-center md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-12 py-12">
        <motion.img
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="hover:-translate-y-4 transition-all"
          src="https://i.postimg.cc/0NTTmS3N/hicham-cook.png"
          alt="uniconfort client"
        />
        <motion.img
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="rounded-full w-[70%] sm:w-[60%] hover:-translate-y-4 transition-all"
          src="https://i.postimg.cc/j29ffw2N/zina-beach.jpg"
          alt="uniconfort client"
        />
        <motion.img
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hover:-translate-y-4 transition-all"
          src="https://i.postimg.cc/8cXkwhy8/seven-times.png"
          alt="uniconfort client"
        />
        <motion.img
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-full w-[70%] sm:w-[60%] hover:-translate-y-4 transition-all"
          src="https://i.postimg.cc/wj0d6hGw/sopimem.jpg"
          alt="uniconfort client"
        />
        <motion.img
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-[70%] sm:w-[60%] hover:-translate-y-4 transition-all"
          src="https://i.postimg.cc/ZqxtpvP2/tacos-world-jpg.png"
          alt="uniconfort client"
        />
        <motion.img
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-[70%] sm:w-[60%] rounded-full hover:-translate-y-4 transition-all"
          src="https://i.postimg.cc/6qk4RPt9/la-casa-del-pizza.jpg"
          alt="uniconfort client"
        />
      </div>
    </div>
  );
};

export default FeaturedIn;
