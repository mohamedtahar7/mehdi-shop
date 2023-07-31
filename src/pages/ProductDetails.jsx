import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext,useEffect } from "react";
import { products } from "../utils/products";
import { CartContext } from "../contexts/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SimilarProductsCard from "../components/SimilarProductsCard";
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);
  const product = products.find((item) => item.id === id);
  const { name, price, images,category} = product;
  const similarProducts = products.filter((prod)=>prod.category===category&&prod.id!==id)
  const productToCart = { name, images, price };
  const [shownImg, setShownImg] = useState(0);
  useEffect(()=>{
    document.title = `${product.name}`;
  },[])
  return (
    <div>
      <Header />
      {/* Imgs */}
      <div className="pt-[12rem] px-16 flex lg:flex-row lg:justify-normal justify-start flex-col gap-4 items-center">
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
        <div className="lg:ml-10 lg:mt-0 mt-6 lg:w-[220rem] w-full">
          <h1 className="lg:text-6xl sm:text-6xl text-4xl font-medium text-[#11334f] mb-10">
            {product.name}
          </h1>
          <p className="text-xl font- lg:w-[60%] text-[#11334f]">
            {product.description}
          </p>
          {product.dimensions&&<p className="text-xl text-[#11334f] mt-8 mb-8">
            Dimensions : {product.dimensions}
          </p>}
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
      {/* Similar Products */}
      <div className="px-16 py-16 mt-6">
        <h3 className="text-[#11334f] text-xl md:text-2xl font-medium mb-6">Produits Similaires</h3>
       <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
        {similarProducts.map((item)=>(
          <SimilarProductsCard id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.images[0].image}/>
        ))}
       </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
