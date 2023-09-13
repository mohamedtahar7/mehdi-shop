import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SimilarProductsCard from "../components/SimilarProductsCard";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [activeColor, setActiveColor] = useState("");
  const { addToCart, cart } = useContext(CartContext);
  const product = products.find((item) => item._id === id);
  const { name, price, images, category } = product;
  const similarProducts = products.filter(
    (prod) => prod.category === category && prod._id !== id
  );
  const productToCart = {
    name,
    images,
    price,
    color: product.colors ? activeColor : "",
  };
  const [shownImg, setShownImg] = useState(0);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  };
  useEffect(() => {
    document.title = `${product.name}`;
  }, []);
  return (
    <div>
      <Header />
      {/* Imgs */}
      <div className="pt-[12rem] px-16 flex lg:flex-row lg:justify-normal justify-start flex-col gap-4 items-center">
        {/* imgs */}
        <div className="flex relative flex-col gap-6">
          {shownImg === 1 ? (
            <img
              src={product.images[1]}
              alt="image"
              className="w-[100%] rounded-lg"
            />
          ) : (
            <img
              src={product.images[0]}
              alt="image"
              className="w-[100%] rounded-lg"
            />
          )}
          <div className="flex flex-row gap-4">
            {product.images.map((image, index) => (
              <img
                onClick={() => setShownImg(index)}
                src={image}
                alt="image"
                className="sm:w-[25%] w-[35%] rounded-lg cursor-pointer hover:opacity-80"
                key={index}
              />
            ))}
          </div>
        </div>
        {/* text */}
        <div className="lg:ml-10 lg:mt-0 mt-6 lg:w-[220rem] w-full">
          <h1 className="lg:text-6xl sm:text-6xl text-4xl font-medium text-[#11334f] mb-10">
            {product.name}
          </h1>
          <p className="text-xl font- lg:w-[60%] text-[#11334f]">
            {product.description}
          </p>
          {product.dimensions && (
            <p className="text-xl text-[#11334f] mt-8 mb-8">
              Dimensions : {product.dimensions}
            </p>
          )}
          {product.colors.length > 0 && (
            <div>
              <p className="text-xl text-[#11334f] mt-8 mb-4">Couleurs:</p>
              <div className="flex gap-4 items-center">
                {product.colors.map((color, index) => (
                  <div
                    style={{ backgroundColor: `#${color}` }}
                    onClick={() => setActiveColor(color)}
                    className={`${
                      activeColor === color ? "border-2 border-[#11334f]" : ""
                    } p-4 cursor-pointer rounded-full`}
                    key={index}
                  />
                ))}
              </div>
            </div>
          )}
          <p className="text-xl text-[#11334f] mt-8 mb-8">
            Prix : {product.price} DA
          </p>
          <button
            onClick={() => addToCart(productToCart, id)}
            className="py-3 px-8 bg-[#11334f] text-white hover:opacity-80 transition-all"
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
      {/* Similar Products */}
      <div className="px-16 py-16 mt-6">
        <h3 className="text-[#11334f] text-2xl md:text-3xl font-medium mb-10">
          Produits Similaires :
        </h3>
        <Carousel responsive={responsive}>
          {similarProducts.map((item) => (
            <SimilarProductsCard
              id={item.id}
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.images[0]}
            />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
