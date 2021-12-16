import styled from "styled-components";

const Container = styled.div``;

const Text = styled.h1`
  font-size: 42px;
`;

const Title = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Title;
