// useFetch hook to fetch related products
import useFetch from "../hooks/useFetch";
// components
import ProductSlider from "./ProductSlider";
// prop types
import PropTypes from "prop-types";

const RelatedProduct = ({ categoryTitle }) => {
  // get related products based on category title  
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  if (!data) {
    return <div>Loading...</div>; // or return null or some loading spinner
  }
  
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data}/>
      </div>
    </div>
  )
}

RelatedProduct.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
}

export default RelatedProduct