import Merch from "./Merch";
import Music from "./Music";
import "./Products.css";

const Products = () => {
  return (
    <div className="prod">
      <Music />
      <Merch />
      <button>See The Cart</button>
    </div>
  );
};

export default Products;