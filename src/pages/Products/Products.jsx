import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./Products.css";

import products from "../../common/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../context/AppContext";
import { notifications } from "@mantine/notifications";

export default function Products() {
  const { addToCart, setDiscount } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [pop, setPop] = useState(false);
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
                  setPop(
                    notifications.show({
                      title: "You successfully removed product from cart!",
                      message: "You can go to cart to check it out!",
                      color: "red",
                    })
                  );
                }}
                product={product}
                price={price}
              />
            );
          })
          .slice(brojPoStranici * (page - 1), brojPoStranici * page)}
      </div>

      <div className="pagination">
        <Pagination
          className="paginacija"
          brojStranica={brojStranica}
          setPage={setPage}
          page={page}
        />
      </div>
    </>
  );
}
