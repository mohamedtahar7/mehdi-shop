import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { products } from "../utils/products";
import { CartContext } from "../contexts/CartContext";
import DetailsHeader from "../components/DetailsHeader";
import Footer from "../components/Footer";
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);
  const product = products.find((item) => item.id === id);
  const { name, price, images } = product;
  const productToCart = { name, images, price };
  const [shownImg, setShownImg] = useState(0);
  return (
    <div>
      <DetailsHeader />
      {/* Imgs */}
      <div className="py-[12rem] px-16 flex lg:flex-row flex-col gap-4 items-center">
        {/* imgs */}
        <div className="flex relative flex-col gap-6">
          {shownImg === 1 ? (
            <img
              src={product.images[1].image}
              alt="image"
              className="w-[100%] rounded-lg"
            />
          ) : (
            <img
              src={product.images[0].image}
              alt="image"
              className="w-[100%] rounded-lg"
            />
          )}
          <div className="flex flex-row gap-4">
            {product.images.map((image, index) => (
              <img
                onClick={() => setShownImg(index)}
                src={image.image}
                alt="image"
                className="sm:w-[25%] w-[35%] rounded-lg cursor-pointer hover:opacity-80"
                key={index}
              />
            ))}
          </div>
        </div>
        {/* text */}
        <div className="lg:ml-10 lg:mt-0 mt-6 lg:w-[220rem] w-fit">
          <h1 className="lg:text-6xl text-4xl font-medium text-[#11334f] mb-10">
            {product.name}
          </h1>
          <p className="text-xl font- lg:w-[60%] text-[#11334f]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            deserunt fugiat perspiciatis assumenda sunt consequuntur numquam
            delectus tempore aliquam iusto ducimus voluptatibus commodi, sint,
            dolores molestiae aut quo veniam explicabo!
          </p>
          <p className="text-xl text-[#11334f] mt-8 mb-8">
            Price : {product.price} DA
          </p>
          <button
            onClick={() => addToCart(product, id)}
            className="py-3 px-8 bg-[#11334f] text-white hover:opacity-80 transition-all"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
