import ProductSlider from '../components/ProductSlider';
import useFetch from '../hooks/useFetch';

const LatestProduct = () => {
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  if (!data) {
    return <div>Loading...</div>; // or return null or some loading spinner
  }

  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
}

export default LatestProduct;