// icons
import { FaTimes } from "react-icons/fa";

import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  // get categories
  const { data } = useFetch("/categories");
  return (
    <div className="w-full h-full bg-primary p-8">
      {/* close icon */}
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FaTimes className="text-3xl text-white cursor-pointer" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return <Link to={`products/${category.id}`} className="uppercase font-medium" key={category.id}>
          {category.attributes.title} Cameras
          </Link>;
        })}
      </div>
    </div>
  );
};

CategoryNavMobile.propTypes = {
  setCatNavMobile: PropTypes.func.isRequired,
};

export default CategoryNavMobile;
