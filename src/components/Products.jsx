import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
// import { useState, useEffect } from "react";
import { chairs } from "../utils/chairs";
import { tables } from "../utils/tables";
import { meubles } from "../utils/meubles";
import { banquettes } from "../utils/banquettes";
// import { categories } from "../utils/categories";
import { PageContext } from "../contexts/PageContext";
import { ProductContext } from "../contexts/ProductContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryContext";
import Spinner from "./Spinner";
const Products = () => {
  const { products, loading } = useContext(ProductContext);
  const { categories, category, setCategory } = useContext(CategoryContext);
  // const [category, setCategory] = useState('Tout')
  // const [currentPage, setCurrentPage] = useState(1);
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const productPerPage = 6;
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);
  return (
    <section id="products">
      <div className="h-auto py-40 px-20">
        <motion.h1
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="sm:text-5xl text-3xl text-[#11334f] text-center"
        >
          Nos Produits
        </motion.h1>
        <div className="flex sm:flex-row flex-col justify-center gap-4 mt-10 items-center">
          <h3 className="text-2xl text-[#11334f]">Filter:</h3>
          <div className="flex md:flex-row flex-col sm:w-auto w-fit gap-4 items-center">
            {categories.map((type, index) => (
              <motion.p
                whileInView={{ x: 0, opacity: 100 }}
                initial={{ x: -50, opacity: 40 }}
                transition={{ delay: 0.2, duration: index / 5 }}
                onClick={() => {
                  setCategory(type);
                  setCurrentPage(1);
                }}
                key={index}
                className={`text-xl hover:text-white hover:bg-[#11334f] transition-all cursor-pointer ${
                  category === type && "text-white bg-[#11334f]"
                } px-4 transition-all border border-[#11334f]`}
              >
                {type}
              </motion.p>
            ))}
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {category === "Tout" && (
              <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
                {products
                  .slice(firstProductIndex, lastProductIndex)
                  .map((product, index) => (
                    <ProductCard
                      index={index}
                      id={product._id}
                      key={index}
                      name={product.name}
                      price={product.price}
                      image={product.images[0]}
                    />
                  ))}
              </div>
            )}
            {category === "Tout" && (
              <Pagination
                totalProducts={products.length}
                productPerPage={productPerPage}
                setCurrrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
            {category === "Chaises" && (
              <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
                {products.filter((item) => item.category === category).length >
                productPerPage
                  ? products
                      .filter((item) => item.category === category)
                      .slice(firstProductIndex, lastProductIndex)
                      .map((chair, index) => (
                        <ProductCard
                          index={index}
                          id={chair._id}
                          key={chair.id}
                          name={chair.name}
                          price={chair.price}
                          image={chair.images[0]}
                        />
                      ))
                  : products
                      .filter((item) => item.category === category)
                      .map((chair, index) => (
                        <ProductCard
                          index={index}
                          id={chair._id}
                          key={chair.id}
                          name={chair.name}
                          price={chair.price}
                          image={chair.images[0]}
                        />
                      ))}
              </div>
            )}
            {category === "Chaises" && (
              <Pagination
                totalProducts={chairs.length}
                productPerPage={productPerPage}
                setCurrrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
            {category === "Tables" && (
              <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
                {products.filter((item) => item.category === category).length >
                productPerPage
                  ? products
                      .filter((item) => item.category === category)
                      .slice(firstProductIndex, lastProductIndex)
                      .map((table, index) => (
                        <ProductCard
                          index={index}
                          id={table._id}
                          key={table.id}
                          name={table.name}
                          price={table.price}
                          image={table.images[0]}
                        />
                      ))
                  : products
                      .filter((item) => item.category === category)
                      .map((table, index) => (
                        <ProductCard
                          index={index}
                          id={table._id}
                          key={table.id}
                          name={table.name}
                          price={table.price}
                          image={table.images[0]}
                        />
                      ))}
              </div>
            )}
            {category === "Tables" && (
              <Pagination
                totalProducts={tables.length}
                productPerPage={productPerPage}
                setCurrrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
            {category === "Meubles" && (
              <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
                {products.filter((item) => item.category === category).length >
                productPerPage
                  ? products
                      .filter((item) => item.category === category)
                      .slice(firstProductIndex, lastProductIndex)
                      .map((table, index) => (
                        <ProductCard
                          index={index}
                          id={table._id}
                          key={table.id}
                          name={table.name}
                          price={table.price}
                          image={table.images[0]}
                        />
                      ))
                  : products
                      .filter((item) => item.category === category)
                      .map((table, index) => (
                        <ProductCard
                          index={index}
                          id={table._id}
                          key={table.id}
                          name={table.name}
                          price={table.price}
                          image={table.images[0]}
                        />
                      ))}
              </div>
            )}
            {category === "Meubles" && (
              <Pagination
                totalProducts={meubles.length}
                productPerPage={productPerPage}
                setCurrrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
            {category === "Banquettes" && (
              <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
                {products.filter((item) => item.category === category).length >
                productPerPage
                  ? products
                      .filter((item) => item.category === category)
                      .slice(firstProductIndex, lastProductIndex)
                      .map((table, index) => (
                        <ProductCard
                          index={index}
                          id={table._id}
                          key={table.id}
                          name={table.name}
                          price={table.price}
                          image={table.images[0]}
                        />
                      ))
                  : products
                      .filter((item) => item.category === category)
                      .map((table, index) => (
                        <ProductCard
                          index={index}
                          id={table._id}
                          key={table.id}
                          name={table.name}
                          price={table.price}
                          image={table.images[0]}
                        />
                      ))}
              </div>
            )}
            {category === "Banquettes" && (
              <Pagination
                totalProducts={banquettes.length}
                productPerPage={productPerPage}
                setCurrrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
            {/* <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12'>
          {chairs.map((chair)=>(
            <ProductCard id={chair.id} key={chair.id} name={chair.name} price={chair.price}
            image={chair.images[0].image}/>
          ))}
        </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
