import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/onSaleProducts.json";
import "./Outlet.css";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../context/AppContext";
export default function Outlet() {
  const { addToCart, setDiscount } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const proizvod = products.length;
  const brojPoStranici = 15;
  const brojStranica = Math.ceil(proizvod / brojPoStranici);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [page]);
  useEffect(() => {
    setDiscount(true);
  }, []);
  return (
    <>
      <div className="wrapper-product">
        {products
          .map((product) => {
            const firstIndexOfComma = product.current_price.indexOf(",");
            const price =
              Number(product.current_price.slice(0, firstIndexOfComma)) * 1000;
            const finalPrice =
              Math.round(price - price * (product.percentage / 100)) / 1000;
            return (
              <ProductCard
                slika={product.image_url}
                description={product.short_description}
                title={product.title}
                onClick={() => {
                  addToCart({
                    ...product,
                    discountPrice:
                      Math.round(price - price * (product.percentage / 100)) /
                      1000,
                  });
                }}
                product={product}
                price={product.current_price}
                discountPrice={finalPrice}
                discount={product.percentage ? true : false}
              />
            );
          })
          .slice(brojPoStranici * (page - 1), brojPoStranici * page)}
      </div>
      <div className="pagination">
        <Pagination brojStranica={brojStranica} setPage={setPage} page={page} />
      </div>
    </>
  );
}
