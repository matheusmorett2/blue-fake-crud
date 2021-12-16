import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Title from "../components/Title";
import Products from "./../data/products.json";

const Detail = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === Number(id));

  return (
    <Container>
      <Title text={product.name} />
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <Link to="/">
        <Button type="secondary">Voltar</Button>
      </Link>
    </Container>
  );
};

export default Detail;
