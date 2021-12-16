import styled from "styled-components";

const Button = styled.button`
  background: ${({ type }) => {
    switch (type) {
      case "primary":
        return "blue";
      case "secondary":
        return "lightblue";
      case "success":
        return "green";
      case "danger":
        return "red";
      default:
        return "blue";
    }
  }};
  cursor: pointer;
  padding: 8px 12px;
  color: white;
  width: ${({ width }) => width || `100%`};
  text-align: center;
  border-radius: 3px;
`;

export default Button;
