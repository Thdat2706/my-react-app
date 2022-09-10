import { Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
};

export default App;
