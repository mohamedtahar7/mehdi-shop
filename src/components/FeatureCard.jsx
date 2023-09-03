import { motion } from "framer-motion";
const FeatureCard = ({ name, icon, transition }) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 100 }}
      initial={{ x: -50, opacity: 0 }}
      transition={{ delay: 0.2, duration: transition }}
      className="w-[80%]"
    >
      <div className="flex flex-col gap-2">
        {icon}
        <h4 className="text-[#11334f] text-xl mt-6 font-semibold">{name}</h4>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
