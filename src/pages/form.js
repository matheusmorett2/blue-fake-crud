import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/Button";
import { Input, Textarea, Label } from "../components/Form";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, createNewProduct, editProduct } =
    useContext(ProductContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (id) {
      const product = products.find((product) => product.id === Number(id));
      setName(product.name);
      setDescription(product.description);
      setImage(product.image);
    }
  }, [id, products]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (id) {
      editProduct({
        id: Number(id),
        name,
        description,
        image,
      });
    } else {
      createNewProduct({
        id: Date.now(),
        name,
        description,
        image,
      });
    }

    navigate("/");
  };

  return (
    <Container>
      <Title text={id ? "Editar" : "Criar"} />
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <Label htmlFor="name">Nome</Label>
          <br />
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="image">Imagem</Label>
          <br />
          <Input
            name="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <br />
          <Textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button>Salvar</Button>
      </form>
      <Link to="/">
        <Button type="secondary">Voltar</Button>
      </Link>
    </Container>
  );
};

export default Form;
