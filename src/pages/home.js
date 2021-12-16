import Title from "./../components/Title";
import Container from "./../components/Container";
import Product from "./../components/Product";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Title text="Home" />
      <Link to="criar">
        <Button width="100px">Criar</Button>
      </Link>
      {products.map((product, key) => (
        <Product key={key} {...product} />
      ))}
    </Container>
  );
};

export default Home;
