import React from "react";
import FeatureCard from "./FeatureCard";
import { FiGrid } from "react-icons/fi";
import { BiSolidCheckShield } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { motion } from "framer-motion";
const Feature = () => {
  return (
    <div className="px-20">
      <motion.h1
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='className="sm:text-5xl font-medium text-3xl pt-4 mb-4 text-[#11334f] text-center mt-4'
      >
        Caractéristiques et Avantages
      </motion.h1>
      <div className="grid place-items-center lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-12 py-12">
        <FeatureCard
          transition={0.5}
          icon={<FiGrid size={45} className="text-[#11334f]" />}
          name={"Une grande sélection de produits"}
        />
        <FeatureCard
          transition={0.8}
          icon={<BiSolidCheckShield size={55} className="text-[#11334f]" />}
          name={"Produit de qualité"}
        />
        <FeatureCard
          transition={1}
          icon={<CiDeliveryTruck size={55} className="text-[#11334f]" />}
          name={"Livraison rapide et fiable"}
        />
        <FeatureCard
          transition={1.3}
          icon={<RiCustomerService2Line size={55} className="text-[#11334f]" />}
          name={"Service client expert"}
        />
      </div>
    </div>
  );
};

export default Feature;
