import { useState, useEffect } from "react";
// useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
  const { id } = useParams();
  // get products based on category
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);

  // set title based on data fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-8">
          <CategoryNav />
          <main>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {title} cameras
            </div>
            {/* products grid */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3
              xl:grid-cols-4 gap-[15px] md:gap-[30]px"
            >
              {data?.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
