import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../contexts/CartContext";
import { BsCart } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
const ProductCard = ({ image, index, price, name, id }) => {
  const { addToCart } = useContext(CartContext);
  const product = { image, price, name, id };
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 100 }}
      initial={{ x: -50, opacity: 0 }}
      transition={{ delay: 0.2, duration: index <= 2 ? index / 2 : index / 5 }}
      className="relative bg-[#fff] cursor-pointer rounded-2xl"
    >
      <div className="group-hover:opacity-80 group-hover:cursor-pointer">
        <img
          className="pt-4 px-4 rounded-2xl"
          src={image}
          alt="uniconfort product"
        />
        <div className="flex flex-col gap-2 px-4 py-4">
          <h4 className="text-xl font-medium">{name}</h4>
          <p className="text-[1rem] text-[#222] font-normal ">{price} DZD</p>
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={() => addToCart(product, id)}
              className="flex items-center text-white gap-5 w-full py-2 justify-center px-6 rounded-sm hover:opacity-80 transition bg-[#11334f]"
            >
              <BsCart size={25} className="text-white" />
              Ajouter au Panier
            </button>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/product/${id}`}
              className="flex items-center border border-[#11334f] text-[#11334f] gap-5 w-full py-2 justify-center px-6 rounded-sm hover:opacity-80 transition bg-white"
            >
              <AiOutlineEye size={25} className="text-[#11334f]" />
              Plus d'infos
            </Link>
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </motion.div>
  );
};

export default ProductCard;
