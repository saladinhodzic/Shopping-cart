import { Card, Image, Text, Button } from "@mantine/core";
import "./ProductCard.css";
export default function ProductCard({ slika, description }) {
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

      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>
      <Button color="blue" fullWidth mt="md" radius="md">
        Add To Cart
      </Button>
    </Card>
  );
}
