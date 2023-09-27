import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../contexts/CartContext";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
const ProductCard = ({ image, index, price, name, id }) => {
  const { addToCart } = useContext(CartContext);
  const product = { image, price, name, id };
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 100 }}
      initial={{ x: -50, opacity: 0 }}
      transition={{ delay: 0.2, duration: index <= 2 ? index / 2 : index / 5 }}
      className="relative group w-fit overflow-y-hidden"
    >
      <div className="group-hover:opacity-80 group-hover:cursor-pointer">
        <img
          className="w-[2822px] h-[2812px] rounded-xl"
          src={image}
          alt="uniconfort product"
        />
        <div className="text-center py-6">
          <h4 className="text-xl font-medium">{name}</h4>
          <p className="text-[1rem] font-normal ">{price} DA</p>
        </div>
      </div>
      <div
        className={`absolute transition-all top-10 -left-20 group-hover:left-5 p-2 overflow-hidden flex flex-col gap-2`}
      >
        <AiOutlinePlus
          onClick={() => addToCart(product, id)}
          className="p-3 bg-[#11334f] text-white cursor-pointer"
          size={50}
        />
        <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`}>
          <AiOutlineEye
            className="p-3 bg-white text-[#11334f] cursor-pointer"
            size={50}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
