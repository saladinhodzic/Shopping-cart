import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/products.json";
import "./Products.css";
export default function Products() {
  return (
    <div className="wrapper-product">
      {products.map((product) => {
        return (
          <ProductCard
            slika={product.image_url}
            description={product.short_description}
          />
        );
      })}
    </div>
  );
}
