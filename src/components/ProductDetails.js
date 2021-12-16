import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
`;

const Title = styled.h4`
  font-size: 22px;
  width: 790px;
  padding-left: 10px;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  width: 154px;
  margin-right: 10px;
`;

const Product = ({ image, name, id }) => {
  return (
    <Item>
      <Link to={`/detail/${id}`}>
        <Title>{name}</Title>
      </Link>
      <Image src={image} alt={name} />
      <ButtonContainer>
        <Link to={`/editar/${id}`}>
          <Button type="primary">Editar</Button>
        </Link>
        <Button type="danger">Excluir</Button>
      </ButtonContainer>
    </Item>
  );
};

export default Product;
