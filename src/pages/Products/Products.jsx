import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/products.json";
import "./Products.css";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../context/AppContext";
import { Notification } from "@mantine/core";
import "@mantine/core/styles.css";
export default function Products() {
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
    setDiscount(false);
  }, []);
  return (
    <>
      <div className="wrapper-product">
        {products
          .map((product) => {
            const firstIndexOfComma = product.current_price.indexOf(",");
            const price =
              Number(product.current_price.slice(0, firstIndexOfComma)) * 1000;
            return (
              <ProductCard
                key={product.id}
                slika={product.image_url}
                description={product.short_description}
                title={product.title}
                onClick={() => {
                  addToCart(product);
                  setOpen(!open);
                }}
                product={product}
                price={price}
              />
            );
          })
          .slice(brojPoStranici * (page - 1), brojPoStranici * page)}
      </div>
      <div className="pagination">
        <Pagination brojStranica={brojStranica} setPage={setPage} page={page} />
      </div>
      <Notification title="We notify you that">
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </>
  );
}
