import { Card, Image, Text, Button } from "@mantine/core";
import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
export default function ProductCard({
  slika,
  description,
  title,
  onClick,
  product,
  price,
  discountPrice,
}) {
  const { productsInCart } = useContext(AppContext);
  const productInCart = productsInCart.some((item) => item.id === product.id);
  const { discount } = useContext(AppContext);
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      target="_blank"
      className="product"
    >
      <Card.Section>
        <Image className="img" src={slika} alt="No way!" />
      </Card.Section>
      <div className="info">
        <Text className="naslov" mt="xs" size="sm">
          {title}
        </Text>
        <Text className="price" mt="xs" size="sm">
          {discount ? <del>{price}</del> : price}
          {discount ? discountPrice : null}
        </Text>
        <Text className="description" mt="xs" size="sm">
          {description}
        </Text>
        <Button className="cart-button" mt="md" radius="md" onClick={onClick}>
          <FaShoppingCart className="shopping-cart" />
          {productInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </div>
    </Card>
  );
}
