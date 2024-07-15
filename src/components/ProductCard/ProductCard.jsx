import { Card, Image, Text, Button } from "@mantine/core";
import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard({ slika, description, title }) {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
        <Text className="description" mt="xs" size="sm">
          {description}
        </Text>
        <Button className="cart-button" mt="md" radius="md">
          <FaShoppingCart className="shopping-cart" />
          Add To Cart
        </Button>
      </div>
    </Card>
  );
}
