// useLocation hook to access the query string
import { useLocation } from "react-router-dom";
// useEffect hook to run code when the component mounts
import { useEffect } from "react";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  // get products based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  return (
    <div className="mb-[30px] pt-40 lg:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          {/* category nav */}
          <CategoryNav />
          <div>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data.length} results for "${searchTerm}"`
                : `No results for "${searchTerm}"`}
            </div>
            {/* products grid */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3
              xl:grid-cols-4 gap-[15px] md:gap-[30px]"
            >
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
