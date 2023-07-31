import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
const SimilarProductsCard = ({ image, price, name, id }) => {
  const { addToCart } = useContext(CartContext);
  const product = { image, price, name, id };
  return (
    <Link onClick={()=>window.scrollTo(0,0)} to={`/product/${id}`} className="group w-fit overflow-y-hidden">
      <div className="group-hover:opacity-80 group-hover:cursor-pointer">
        <img className="w-[90%] h-[90%] rounded-xl" src={image} alt="uniconofrt product" />
        <div className="text-center py-6">
          <h4 className="text-xl font-medium">{name}</h4>
          <p className="text-[1rem] font-normal ">{price} DA</p>
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductsCard;
