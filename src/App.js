import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Detail from "./pages/detail";
import { ProductContextProvider } from "./context/ProductContext";
import "./index.scss";

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<Form />} />
        <Route path="/editar/:id" element={<Form />} />
        <Route path="/detalhes/:id" element={<Detail />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
