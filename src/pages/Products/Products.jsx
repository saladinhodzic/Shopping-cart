import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/products.json";
import "./Products.css";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
export default function Products() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(1);
  const proizvod = products.length;
  const brojPoStranici = 15;
  const brojStranica = proizvod / brojPoStranici;
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [page]);
  return (
    <>
      <div className="wrapper-product">
        {products
          .map((product) => {
            return (
              <ProductCard
                slika={product.image_url}
                description={product.short_description}
                title={product.title}
              />
            );
          })
          .slice(brojPoStranici * (page - 1), brojPoStranici * page)}
      </div>
      <div className="pagination">
        <Pagination
          brojStranica={brojStranica}
          setPage={setPage}
          page={page}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
    </>
  );
}
